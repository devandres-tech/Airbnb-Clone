import * as React from 'react';
import { graphql, ChildMutateProps } from 'react-apollo';
import gql from 'graphql-tag';

import { normalizeErrors } from '../../utils/normalizeErrors';
import { LoginMutation, LoginMutationVariables } from '../../schemaTypes';

interface Props {
  // callback function used by the app to retrieve session ID
  onSessionId?: (sessionId: string | null) => void;
  children: (
    data: { submit: (values: LoginMutationVariables) => Promise<{ [key: string]: string; } | null> }
  ) => JSX.Element | null;
}

class C extends React.PureComponent<ChildMutateProps<Props, LoginMutation, LoginMutationVariables>> {
  submit = async (values: LoginMutationVariables) => {
    console.log('values', values);
    const { data: { login: { errors, sessionId } } } = await this.props.mutate({
      variables: values
    })
    console.log('response ', errors, sessionId);

    if (errors) {
      return normalizeErrors(errors);
    }

    if (sessionId && this.props.onSessionId) {
      this.props.onSessionId(sessionId);
    }
    return null;
  }

  render() {
    return this.props.children({ submit: this.submit });
  }
}

const loginMutation = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      errors {
        path
        message
      }
      sessionId
    }
  }
`;

export const LoginController = graphql<Props, LoginMutation, LoginMutationVariables>(loginMutation)(C);
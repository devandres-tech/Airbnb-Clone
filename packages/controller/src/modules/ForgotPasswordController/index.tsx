import * as React from 'react';
import { graphql, ChildMutateProps } from 'react-apollo';
import gql from 'graphql-tag';
import { RegisterMutation, RegisterMutationVariables } from '../../schemaTypes';
import { normalizeErrors } from '../../utils/normalizeErrors';
import { NormalizedErrorMap } from '../../types/NormalizedErrorMap';

interface Props {
  children: (
    data: { submit: (values: RegisterMutationVariables) => Promise<NormalizedErrorMap | null> }
  ) => JSX.Element | null
}

class C extends React.PureComponent<ChildMutateProps<Props, RegisterMutation, RegisterMutationVariables>> {
  submit = async (values: RegisterMutationVariables) => {
    console.log('values', values);
    const { data: { register } } = await this.props.mutate({
      variables: values
    })
    console.log('response', register);

    if (register) {
      return normalizeErrors(register);
    }
    return null;
  }

  render() {
    return this.props.children({ submit: this.submit });
  }
}

const forgotPasswordMutation = gql`
  mutation SendForgotPasswordEmailMutation($email: String!) {
    sendForgotPasswordEmail(email: $email)
  }
`;

export const RegisterController = graphql<Props, RegisterMutation, RegisterMutationVariables>(forgotPasswordMutation)(C);
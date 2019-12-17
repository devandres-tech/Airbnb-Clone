import React, { Component } from 'react'
import { RouteProps, Route, Redirect } from 'react-router';
import { graphql, ChildProps } from 'react-apollo';
import gql from 'graphql-tag';

import { MeQuery } from '../../schemaTypes';
import { RouteComponentProps } from 'react-router-dom';

type Props = RouteProps;

const meQuery = gql`
  query MeQuery {
    me {
      email
    }
  }
`

class C extends Component<ChildProps<Props, MeQuery>> {
  renderRoute = (routeProps: RouteComponentProps<{}>) => {
    const { data, component } = this.props;

    if (!data || data.loading) {
      // loading screen
      return null;
    }

    // data has loaded
    if (!data.me || !data.me.email) {
      // user not logged in
      return <Redirect to="/login" />
    }

    const Component = component as any;
    return <Component {...routeProps} />;
  }

  render() {
    const { data: _, component: __, ...rest } = this.props;
    return <Route {...rest} render={this.renderRoute} />;
  }
}

export const AuthRoute = graphql<Props, MeQuery>(meQuery)(C);
import React, { Component } from 'react'
import { RouteProps } from 'react-router';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const meQuery = gql`
  query MeQuery {
    me {
      email
    }
  }
`

class C extends Component<RouteProps> {
  render() {
    return (
      <div>

      </div>
    )
  }
}

export const AuthRoute = graphql(meQuery)(C);
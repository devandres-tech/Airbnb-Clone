import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { ChangePasswordView } from './view/ChangePasswordView';

export default class ChangePasswordConnector extends Component<RouteComponentProps<{ key: string; }>> {
  submit = async (values: any) => {
    console.log("values: ", values);
    return null;
  }

  render() {
    const { match: { params: { key } } } = this.props;
    console.log('key ', key);
    return (
      <ChangePasswordView submit={this.submit} />
    )
  }
}

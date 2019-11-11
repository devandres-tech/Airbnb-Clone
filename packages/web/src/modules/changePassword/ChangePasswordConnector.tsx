import React, { Component } from 'react'
import { ChangePasswordView } from './view/ChangePasswordView';

export default class ChangePasswordConnector extends Component {
  submit = async (values: any) => {
    console.log("values: ", values);
    return null;
  }

  render() {
    console.log("props ", this.props);
    return (
      <ChangePasswordView submit={this.submit} />
    )
  }
}

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ForgotPasswordView } from './view/ForgotPasswordView';
import { ForgotPasswordController } from '@abb/controller';
import { RouteComponentProps } from 'react-router-dom';

export default class ForgotPasswordConnector extends Component<RouteComponentProps<{}>> {
  onFinish = () => {
    this.props.history.push("/m/reset-email", { message: "check your email to reset your password" });
  }

  render() {
    return (
      <ForgotPasswordController>
        {({ submit }) => <ForgotPasswordView onFinish={this.onFinish} submit={submit} />}
      </ForgotPasswordController>
    )
  }
}

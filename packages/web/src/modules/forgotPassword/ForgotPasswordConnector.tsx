import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ForgotPasswordView } from './view/ForgotPasswordView';
import { ForgotPasswordController } from '@abb/controller';
import { RouteComponentProps } from 'react-router-dom';

export class ForgotPasswordConnector extends React.PureComponent<RouteComponentProps<{}>> {
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

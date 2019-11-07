import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ForgotPasswordView } from './view/ForgotPasswordView';
import { ForgotPasswordController } from '@abb/controller';

export default class ForgotPasswordConnector extends Component {
  render() {
    return (
      <ForgotPasswordController>
        {({ submit }) => <ForgotPasswordView submit={submit} />}
      </ForgotPasswordController>
    )
  }
}

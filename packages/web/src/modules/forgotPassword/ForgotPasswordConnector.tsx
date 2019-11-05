import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ForgotPasswordView } from './view/ForgotPasswordView'

export default class ForgotPasswordConnector extends Component {
  dummy = async (values: any) => {
    console.log("values ", values);
    return null;
  }

  render() {
    return (
      <ForgotPasswordView submit={this.dummy} />
    )
  }
}

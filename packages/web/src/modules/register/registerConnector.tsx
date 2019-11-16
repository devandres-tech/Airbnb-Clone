import * as React from 'react'
import { RegisterView } from "./view/RegisterView";
import { RegisterController } from '@abb/controller';
import { RouteComponentProps } from 'react-router-dom';

// controller -> connector -> view

export class RegisterConnector extends React.PureComponent<RouteComponentProps<{}>> {
  onFinish = () => {
    this.props.history.push('/m/confirm-email', { message: "check your email to confirm your account" });
  }

  render() {
    return (
      <RegisterController>
        {({ submit }: { submit: any }) => <RegisterView onFinish={this.onFinish} submit={submit} />}
      </RegisterController>
    )
  }
}

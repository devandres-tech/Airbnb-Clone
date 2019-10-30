import * as React from "react";
import { LoginController } from "@abb/controller";
import * as SecureStore from 'expo-secure-store';

import { LoginView } from "./view/LoginView";
import { SESSION_ID_KEY } from "../shared/constants";

export class LoginConnector extends React.PureComponent {
  saveSessionId = (sessionId: string | null) => {
    SecureStore.setItemAsync(SESSION_ID_KEY, sessionId)
  }

  render() {
    return (
      <LoginController onSessionId={this.saveSessionId}>
        {({ submit }) => <LoginView submit={submit} />}
      </LoginController>
    )
  }
}

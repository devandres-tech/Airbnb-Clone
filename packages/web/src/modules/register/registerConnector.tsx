import * as React from 'react'
import { RegisterView } from "./view/RegisterView";


// controller -> connector -> view

export class RegisterConnector extends React.PureComponent {

  demoSubmit = async (values: any) => {
    console.log('values: ', values);
    return null;
  }

  render() {
    return (
      <RegisterView submit={this.demoSubmit} />
    )
  }
}




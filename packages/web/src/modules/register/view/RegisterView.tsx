import * as React from 'react';
import { Form, Icon, Input, Button } from 'antd';


export class RegisterView extends React.PureComponent {

  render() {

    return (
      <div className="login-form">
        <Form.Item>
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item>
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Register
          </Button>
        </Form.Item>
        <Form.Item>
          Or <a href="">login now!</a>

        </Form.Item>
      </div>
    );
  }


}

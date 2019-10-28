import * as React from 'react';
import { Form, Icon, Button } from 'antd';
import { withFormik, FormikErrors, FormikProps, Field, Form as FForm } from 'formik';
import { Link } from 'react-router-dom';
import { loginSchema } from '@abb/common';

import { InputField } from '../../shared/InputField';

interface FormValues {
  email: string,
  password: string,
}

interface Props {
  submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}

class RegisterComponent extends React.PureComponent<FormikProps<FormValues> & Props> {

  render() {
    return (
      <FForm className="login-form">
        <Field
          name="email"
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="email"
          component={InputField}
        />
        <Field
          name="password"
          type="password"
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="password"
          component={InputField}
        />
        <Form.Item>
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Login
          </Button>
        </Form.Item>
        <Form.Item>
          Or <Link to="/register">register</Link>
        </Form.Item>
      </FForm>
    );
  }
}

export const LoginView = withFormik<Props, FormValues>({
  validationSchema: loginSchema,
  mapPropsToValues: () => ({ email: '', password: '' }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  }
})(RegisterComponent);

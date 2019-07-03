import * as React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { withFormik, FormikErrors, FormikProps } from 'formik';
import yup from 'yup';

interface FormValues {
  email: string,
  password: string,
}

interface Props {
  submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}


class RegisterComponent extends React.PureComponent<FormikProps<FormValues> & Props> {

  render() {
    const { values, handleChange, handleBlur, handleSubmit, touched, errors } = this.props;

    return (
      <form className="login-form" onSubmit={handleSubmit}>
        <Form.Item>
          <Input
            name="email"
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Username"
            onChange={handleChange}
            value={values.email}
            onBlur={handleBlur}
          />
        </Form.Item>
        <Form.Item>
          <Input
            name="password"
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"
            onChange={handleChange}
            value={values.password}
            onBlur={handleBlur}
          />
        </Form.Item>
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
            Register
          </Button>
        </Form.Item>
        <Form.Item>
          Or <a href="">login now!</a>
        </Form.Item>
      </form>
    );
  }
}

const emailNotLongEnough = 'email must be at least 3 characters long';
const passwordNotLongEnough = 'password must be at least 3 characters';
const invalidEmail = 'email must be a valid email';

const registerPasswordValidation = yup
  .string()
  .min(3, passwordNotLongEnough)
  .max(255);

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .min(3, emailNotLongEnough)
    .max(255)
    .email(invalidEmail),
  password: registerPasswordValidation
});

export const RegisterView = withFormik<Props, FormValues>({
  validationSchema: validationSchema,
  mapPropsToValues: () => ({ email: '', password: '' }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  }
})(RegisterComponent);

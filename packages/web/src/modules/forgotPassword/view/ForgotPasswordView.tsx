import * as React from 'react';
import { Form, Icon, Button } from 'antd';
import { withFormik, FormikProps, Field, Form as FForm } from 'formik';
import { NormalizedErrorMap } from '@abb/controller';

import { InputField } from '../../shared/InputField';

interface FormValues {
  email: string,
}

interface Props {
  submit: (values: FormValues) => Promise<NormalizedErrorMap | null>;
}

class ForgotPasswordComponent extends React.PureComponent<FormikProps<FormValues> & Props> {

  render() {
    return (
      <FForm className="login-form">
        <Field
          name="email"
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="email"
          component={InputField}
        />
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Reset Password
          </Button>
        </Form.Item>
      </FForm>
    );
  }
}

export const ForgotPasswordView = withFormik<Props, FormValues>({
  mapPropsToValues: () => ({ email: '' }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  }
})(ForgotPasswordComponent);

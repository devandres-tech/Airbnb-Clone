import * as React from 'react';
import { FieldProps } from 'formik';
import { Form, Input, } from 'antd';


export const InputField: React.SFC<FieldProps<any> & { prefix: JSX.Element, label?: string }> = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  label,
  ...props
}) => {
  const errorMessage = touched[field.name] && errors[field.name];

  return (
    <Form.Item
      label={label}
      help={errorMessage}
      validateStatus={
        errorMessage ? 'error' : undefined
      }
    >
      <Input
        {...field}
        {...props}
      />
    </Form.Item>
  )
} 
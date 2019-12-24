import * as React from 'react';
import { FieldProps } from 'formik';
import { Form, Input, InputNumber, Select } from 'antd';


export const TagField: React.SFC<FieldProps<any> & { prefix: React.ReactNode; label?: string }> = ({
  field: { onChange, onBlur: _, ...field }, // { name, value, onChange, onBlur }
  form: { setFieldValue, touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
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
      <Select
        {...field}
        {...props}
        mode="tags"
        onChange={(newValue: any) => setFieldValue(field.name, newValue)}
      />
    </Form.Item>
  )
} 
import React, { Component } from 'react';
import { Form, Icon, Button } from 'antd';
import { withFormik, FormikProps, Field, Form as FForm, Formik } from 'formik'
import { InputField } from '../../shared/InputField';
import { Link } from 'react-router-dom';

// name: String!
// category: String!
// description: String!
// price: Int!
// beds: Int!
// guests: Int!
// latitude: Float!
// longitude: Float!
// amenities: [String!]!

interface FormValues {
  name: string;
  category: string;
  description: string;
  price: number;
  beds: string;
  guests: string;
  latitude: string;
  longitude: string;
  amenities: string[];
}

const InitialValues = {
  name: "",
  category: "",
  description: "",
  price: 0,
  beds: 0,
  guests: 0,
  latitude: 0,
  longitude: 0,
  amenities: 0
}

export default class CreateListingConnector extends Component {
  submit = (values: any) => {
    console.log('values: ', values);
  }

  render() {
    return (
      <Formik initialValues={InitialValues} onSubmit={this.submit}>
        {
          () => (
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
                >
                  Create Listing
                </Button>
              </Form.Item>
            </FForm>
          )
        }
      </Formik>
    )
  }
}

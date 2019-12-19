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

export default class CreateListingConnector extends Component {
  render() {
    return (
      <Formik>
        {
          () => (
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
              </Form.Item>
            <Form.Item>
              <Link to="/register">register</Link>
            </Form.Item>
            </FForm>
    )
  }
      </Formik>
    )
  }
}

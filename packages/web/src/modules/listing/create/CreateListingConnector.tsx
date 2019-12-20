import React, { Component } from 'react';
import { Form, Icon, Button } from 'antd';
import { withFormik, FormikProps, Field, Form as FForm, Formik } from 'formik'
import { InputField } from '../../shared/InputField';
import { Link } from 'react-router-dom';
import { Page1 } from './view/Page1';
import { Page2 } from './view/Page2';
import { Page3 } from './view/Page3';

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
  amenities: []
}

const pages = [<Page1 />, <Page2 />, <Page3 />];

export default class CreateListingConnector extends Component {
  state = {
    page: 0
  }

  submit = (values: any) => {
    console.log('values: ', values);
  }

  render() {
    return (
      <Formik initialValues={InitialValues} onSubmit={this.submit}>
        {
          () => (
            <FForm className="login-form">
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

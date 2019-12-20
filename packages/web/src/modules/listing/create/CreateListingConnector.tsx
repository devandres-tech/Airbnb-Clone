import React, { Component } from 'react';
import { Form, Icon, Button } from 'antd';
import { withFormik, FormikProps, Field, Form as FForm, Formik } from 'formik'
import { Page1 } from './view/Page1';
import { Page2 } from './view/Page2';
import { Page3 } from './view/Page3';

interface State {
  page: number
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

export default class CreateListingConnector extends Component<{}, State> {
  state = {
    page: 0
  }

  submit = (values: any) => {
    console.log('values: ', values);
  }

  nextPage = () => this.setState(state => ({ page: state.page + 1 }))

  render() {
    return (
      <Formik initialValues={InitialValues} onSubmit={this.submit}>
        {
          () => (
            <FForm className="login-form">
              {pages[this.state.page]}
              <Form.Item>
                {
                  this.state.page === pages.length - 1 ? (
                    <Button
                      type="primary"
                      htmlType="submit"
                    >
                      Create Listing
                    </Button>
                  ) : (
                      <Button type="primary" onClick={this.nextPage}>
                        Next Page
                      </Button>
                    )
                }
              </Form.Item>
            </FForm>
          )
        }
      </Formik>
    )
  }
}

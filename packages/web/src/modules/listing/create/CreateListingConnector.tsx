import React, { Component } from 'react';
import { Form, Button } from 'antd';
import { Form as FForm, Formik } from 'formik'
import { Page1 } from './view/Page1';
import { Page2 } from './view/Page2';
import { Page3 } from './view/Page3';
import { withCreateListing, NewPropsCreateListing } from '@abb/controller';

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

interface FormValues {
  name: string;
  category: string;
  description: string;
  price: number;
  beds: number;
  guests: number;
  latitude: number;
  longitude: number;
  amenities: string[];
}

const pages = [<Page1 />, <Page2 />, <Page3 />];

class C extends Component<{} & NewPropsCreateListing, State> {
  state = {
    page: 0
  }

  submit = (values: FormValues) => {
    this.props.createListing(values);
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
                <div style={{
                  display: 'flex',
                  justifyContent: 'flex-end'
                }}>
                  {
                    this.state.page === pages.length - 1 ? (
                      <div>
                        <Button
                          type="primary"
                          htmlType="submit"
                        >
                          Create Listing
                        </Button>
                      </div>
                    ) : (
                        <Button type="primary" onClick={this.nextPage}>
                          Next Page
                        </Button>
                      )

                  }
                </div>
              </Form.Item>
            </FForm>
          )
        }
      </Formik>
    )
  }
}

export const CreateListingConnector = withCreateListing(C)
import * as React from 'react';
import { Field } from 'formik'
import { InputField } from '../../../shared/InputField';
import { TagField } from '../../../shared/TagField';

export const Page3 = () => (
  <>
    <Field
      label="Latitude"
      name="latitude"
      useNumberComponent={true}
      placeholder="Latitude"
      component={InputField}
    />
    <Field
      label="Longitude"
      useNumberComponent={true}
      name="longitude"
      placeholder="Longitude"
      component={InputField}
    />
    <Field
      name="amenities"
      placeholder="Amenities"
      component={TagField}
    />
  </>
)
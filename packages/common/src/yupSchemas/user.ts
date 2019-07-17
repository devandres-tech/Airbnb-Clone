import * as yup from 'yup';

const emailNotLongEnough = 'email must be at least 3 characters long';
const passwordNotLongEnough = 'password must be at least 6 characters';
const invalidEmail = 'email must be a valid email';

export const registerPasswordValidation = yup
  .string()
  .min(3, passwordNotLongEnough)
  .max(255)
  .required();

export const validationSchema = yup.object().shape({
  email: yup
    .string()
    .min(3, emailNotLongEnough)
    .max(255)
    .email(invalidEmail)
    .required(),
  password: registerPasswordValidation
});
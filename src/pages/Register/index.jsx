import React from 'react';
import { registerFields, registerInitialValues } from './registerFields';
import CustomForm from '../../global/CustomForm';

const Login = () => {
  return (
    <CustomForm
      initialValues={registerInitialValues}
      onSubmit={values => {
        console.log(values);
      }}
      fields={registerFields}
      btnText="Register"
    />
  );
};

export default Login;

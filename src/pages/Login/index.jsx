import React from 'react';
import { loginFields, loginInitialValues } from './loginFields';
import CustomForm from '../../global/CustomForm';

const Login = () => {
  return (
    <CustomForm
      initialValues={loginInitialValues}
      onSubmit={values => {
        console.log(values);
      }}
      fields={loginFields}
      btnText="Sign in"
    />
  );
};

export default Login;

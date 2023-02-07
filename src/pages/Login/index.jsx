import React from 'react';
import { loginFields, loginInitialValues } from './loginFields';
import CustomForm from '../../global/CustomForm';
import Fetch from '../../global/TryCatchFetch';

const Login = () => {
  const onSubmit = async (value, action) => {
    // const {}
    console.log(value);
    const URL = 'http://localhost:3000/login';
    const [res, error] = await Fetch(URL, {
      method: 'POST',
      body: JSON.stringify(value),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    if (error) {
      action.setErrors({ serverError: error });
      return;
    }
    console.log(res);
  };

  return <CustomForm initialValues={loginInitialValues} onSubmit={onSubmit} fields={loginFields} btnText="Sign in" />;
};

export default Login;

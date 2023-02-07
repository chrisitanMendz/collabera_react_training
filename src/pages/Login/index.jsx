import React from 'react';
import { useNavigate } from 'react-router';
import { loginFields, loginInitialValues } from './loginFields';
import CustomForm from '../../global/CustomForm';
import Fetch from '../../global/TryCatchFetch';

const Login = () => {
  const navigate = useNavigate();

  const onSubmit = async (value, action) => {
    const URL = 'http://localhost:3000/signin';
    const [, error] = await Fetch(URL, {
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
    navigate('/dashboard', { replace: true });
  };

  return <CustomForm initialValues={loginInitialValues} onSubmit={onSubmit} fields={loginFields} btnText="Sign in" />;
};

export default Login;

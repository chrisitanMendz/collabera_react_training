import React from 'react';
import { useNavigate } from 'react-router';
import { registerFields, registerInitialValues } from './registerFields';
import CustomForm from '../../global/CustomForm';
import Fetch from '../../global/TryCatchFetch';

const Login = () => {
  const navigate = useNavigate();

  const onSbumit = async (value, actions) => {
    const { confirmPassword, ...rest } = value;
    const URL = 'http://localhost:3000/register';
    const [, error] = await Fetch(URL, {
      method: 'POST',
      body: JSON.stringify(rest),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    if (error) {
      actions.setErrors({ serverError: error });
      return;
    }
    actions.resetForm();
    navigate('dashboard', { replace: true });
  };

  return (
    <CustomForm initialValues={registerInitialValues} onSubmit={onSbumit} fields={registerFields} btnText="Register" />
  );
};

export default Login;

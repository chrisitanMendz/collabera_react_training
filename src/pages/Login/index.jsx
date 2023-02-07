import React, { useContext } from 'react';
import { loginFields, loginInitialValues } from './loginFields';
import CustomForm from '../../global/CustomForm';
import { AuthContext } from '../../contexts/authContext';

const Login = () => {
  const { login } = useContext(AuthContext);
  return <CustomForm initialValues={loginInitialValues} onSubmit={login} fields={loginFields} btnText="Sign in" />;
};

export default Login;

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { loginFields, loginInitialValues } from './loginFields';
import CustomForm from '../../components/CustomForm';

function Login({ login }) {
  return (
    <CustomForm
      initialValues={loginInitialValues}
      onSubmit={login}
      fields={loginFields}
      btnText="Login"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Link
            to="changepassword"
            className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
          >
            Change password
          </Link>
        </div>

        <div className="text-sm">
          <Link
            to="register"
            className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
          >
            Doesn't have an account?
          </Link>
        </div>
      </div>
    </CustomForm>
  );
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default Login;

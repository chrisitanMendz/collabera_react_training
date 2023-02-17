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
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
          <label
            htmlFor="remember-me"
            className="ml-2 block text-sm text-gray-900"
          >
            Remember me
          </label>
        </div>

        <div className="text-sm">
          <Link
            to="register"
            className="font-medium text-indigo-600 hover:text-indigo-500"
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

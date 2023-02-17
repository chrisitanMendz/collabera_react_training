import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { registerFields, registerInitialValues } from './registerFields';
import CustomForm from '../../components/CustomForm';

function Register({ register, resetError }) {
  useEffect(() => {
    resetError();
  }, [resetError]);

  return (
    <CustomForm
      initialValues={registerInitialValues}
      onSubmit={register}
      fields={registerFields}
      btnText="Register"
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
            to="/auth"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Already have an account?
          </Link>
        </div>
      </div>
    </CustomForm>
  );
}

Register.propTypes = {
  register: PropTypes.func.isRequired,
  resetError: PropTypes.func.isRequired,
};

export default Register;

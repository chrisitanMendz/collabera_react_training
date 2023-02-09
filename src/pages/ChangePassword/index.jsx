import React from 'react';
import { Link } from 'react-router-dom';
import {
  changePasswordFields,
  changePasswordInitialValues,
} from './changePasswordField';
import CustomForm from '../../components/CustomForm';
import { useAuthContext } from '../../context/authContext';

function ChangePassword() {
  const { changePassword } = useAuthContext();

  return (
    <CustomForm
      initialValues={changePasswordInitialValues}
      onSubmit={changePassword}
      fields={changePasswordFields}
      btnText="Change Password"
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
            Sign in
          </Link>
        </div>
      </div>
    </CustomForm>
  );
}

export default ChangePassword;

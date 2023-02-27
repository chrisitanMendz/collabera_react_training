import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  changePasswordFields,
  changePasswordInitialValues,
} from './changePassFields';
import CustomForm from '../../components/CustomForm';

function ChangePassword({ changePassword }) {
  return (
    <CustomForm
      initialValues={changePasswordInitialValues}
      onSubmit={changePassword}
      fields={changePasswordFields}
      btnText="Change password"
    >
      <div className="flex items-center justify-between">
        <div className="text-sm ml-auto">
          <Link
            to="/auth"
            className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
          >
            Login page
          </Link>
        </div>
      </div>
    </CustomForm>
  );
}

ChangePassword.propTypes = {
  changePassword: PropTypes.func.isRequired,
};

export default ChangePassword;

import { Field, Form, Formik } from 'formik';
import React from 'react';

const CustomForm = ({ fields, btnText, children, ...props }) => {
  return (
    <Formik {...props}>
      {({ isValid, dirty, isSubmitting, errors }) => (
        <div className="max-w-sm mx-auto">
          {console.log(errors)}
          {errors?.serverError && <p className="text-red-400 text-xs my-3">{errors.serverError}</p>}
          <Form>
            {fields.map(item => (
              <Field key={item.name} {...item} />
            ))}
            {children}
            <button
              type="submit"
              className={`text-sm text-white font-semibold bg-blue-500 px-3 py-1 rounded-md mt-3
              disabled:opacity-25`}
              disabled={!(isValid || dirty) || isSubmitting}
            >
              {btnText}
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default CustomForm;

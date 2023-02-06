import { Field, Form, Formik } from 'formik';
import React from 'react';

const CustomForm = ({ fields, btnText, children, ...props }) => {
  return (
    <Formik {...props}>
      {(isValid, dirty, isSubmitting) => (
        <div className="max-w-sm mx-auto">
          <Form>
            {fields.map(item => (
              <Field key={item.name} {...item} />
            ))}
            {children}
            <button
              type="submit"
              className={`text-sm text-white font-semibold bg-blue-500 px-3 py-1 rounded-md mt-3
              ${!(isValid || dirty || isSubmitting) && 'opacity-25'}`}
              disabled={!(isValid || dirty || isSubmitting)}
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

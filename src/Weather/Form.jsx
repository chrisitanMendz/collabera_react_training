import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';

const Form = forwardRef((props, ref) => (
  <form onSubmit={props.search} className="flex items-center">
    <input
      type="text"
      placeholder="Weather..."
      ref={ref}
      className={`h-8 bg-white rounded-l-md text-xs flex-1 ${props.isLoading && 'opacity-25'}`}
      disabled={props.isLoading}
    />
    <button
      type="submit"
      className={`h-8 text-xs font-semibold px-5 rounded-r-md bg-blue-700 text-white duration-300
        hover:opacity-75
        ${props.isLoading && 'opacity-25 pointer-events-none'}
      `}
      disabled={props.isLoading}
    >
      Search
    </button>
  </form>
));

Form.propTypes = {
  search: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default memo(Form);

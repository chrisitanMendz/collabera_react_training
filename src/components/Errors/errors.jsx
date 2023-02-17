import React from 'react';
import PropTypes from 'prop-types';

function Errors({ errors }) {
  return (
    <div className="fixed left-8 bottom-0 flex flex-col">
      {errors.map((x, i) => (
        <div
          key={i}
          className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 min-w-[320px] mb-3"
          role="alert"
        >
          <p className="font-bold">{x.title}</p>
          <p>{x.message}</p>
        </div>
      ))}
    </div>
  );
}

Errors.propTypes = {
  errors: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      message: PropTypes.string,
      loadingId: PropTypes.number,
    }),
  ).isRequired,
};

export default Errors;

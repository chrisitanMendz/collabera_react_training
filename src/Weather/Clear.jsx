import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Clear = ({ reset }) => (
  <button
    onClick={reset}
    className="text-xs font-semibold bg-red-400 text-white px-5 py-2 mt-8 rounded-md text-center w-fit duration-300 self-center shadow-md
      hover:opacity-75"
  >
    Clear
  </button>
);

Clear.propTypes = {
  reset: PropTypes.func.isRequired,
};

export default memo(Clear);

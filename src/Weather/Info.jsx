import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Info = ({ info }) => (
  <ul className="w-[200px] bg-white shadow-md rounded-md self-center mt-5 p-4">
    <li className="text-sm text-[#4d5156]">ID: {info.id}</li>
    <li className="text-sm text-[#4d5156]">City: {info.city}</li>
    <li className="text-sm text-[#4d5156]">Temperature: {`${info.temp}°${info.tempType}`}</li>
  </ul>
);

Info.propTypes = {
  info: PropTypes.shape({
    id: PropTypes.number,
    city: PropTypes.string,
    temp: PropTypes.number,
    tempType: PropTypes.string,
  }).isRequired,
};

export default memo(Info);

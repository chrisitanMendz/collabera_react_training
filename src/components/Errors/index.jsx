import React from 'react';
import { useErrorContext } from '../../context/errorContext';

function Errors() {
  const { errors } = useErrorContext();
  return (
    <div className="fixed bottom-7 left-10">
      {errors.map((x, i) => (
        <div
          key={i}
          className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 min-w-[320px] mt-3"
          role="alert"
        >
          <p className="font-bold">{x.title}</p>
          <p>{x.message}</p>
        </div>
      ))}
    </div>
  );
}

export default Errors;

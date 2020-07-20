import React from 'react';

const O = props => {
  return (
    <svg {...props} width={'160px'} height={'160px'}>
      <circle cx="80" cy="80" r="60" style={{ fill: 'none', strokeWidth: '10px', stroke: 'black' }} />
    </svg>
  );
};

export default O;
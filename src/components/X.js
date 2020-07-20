import React from 'react';

const X = props => {
  return (
    <svg {...props} width={'160px'} height={'160px'}>
      <line x1="15" y1="15" x2="145" y2="145" style={{ fill: 'black', strokeWidth: '10px', stroke: 'black' }} />
      <line x1="15" y1="145" x2="145" y2="15" style={{ fill: 'black', strokeWidth: '10px', stroke: 'black' }} />
    </svg>
  );
};

export default X;
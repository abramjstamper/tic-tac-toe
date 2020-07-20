import React from 'react';

const WinningLine = props => {
  console.log(props.winningPath);
  if (props.winningPath.length === 3) {
    return (
      <svg x="0px" y="0px" width="480px" height="480px" >
        <line
          x1={(160 * props.winningPath[0].x) + 80}
          y1={(160 * props.winningPath[0].y) + 80}
          x2={(160 * props.winningPath[2].x) + 80}
          y2={(160 * props.winningPath[2].y) + 80}
          style={{ fill: 'red', strokeWidth: '20px', stroke: 'red' }} />
      </svg>
    );
  }

  return null;
};

export default WinningLine;
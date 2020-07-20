import React from 'react';
import X from './X';
import O from './O';

const svgStyle = {
  fill: '#fff',
  fillOpacity: '0',
  strokeWidth: '10px',
  stroke: 'black'
};

const Board = props => {
  return (
    <svg x="0px" y="0px" width="480px" height="480px">
      <g>
        <rect
          x="0px" y="0px"
          width="480px" height="480px"
          style={svgStyle}
        />
        <rect
          x="0px" y="0px"
          width="160px" height="160px"
          style={svgStyle}
          onClick={() => props.onBoxClick(0, 0)}
        />
        <rect
          x="160px" y="0px"
          width="160px" height="160px"
          style={svgStyle}
          onClick={() => props.onBoxClick(1, 0)}
        />
        <rect
          x="320px" y="0px"
          width="160px" height="160px"
          style={svgStyle}
          onClick={() => props.onBoxClick(2, 0)}
        />
        <rect
          x="0px" y="160px"
          width="160px" height="160px"
          style={svgStyle}
          onClick={() => props.onBoxClick(0, 1)}
        />
        <rect
          x="160px" y="160px"
          width="160px" height="160px"
          style={svgStyle}
          onClick={() => props.onBoxClick(1, 1)}
        />
        <rect
          x="320px" y="160px"
          width="160px" height="160px"
          style={svgStyle}
          onClick={() => props.onBoxClick(2, 1)}
        />
        <rect
          x="0px" y="320px"
          width="160px" height="160px"
          style={svgStyle}
          onClick={() => props.onBoxClick(0, 2)}
        />
        <rect
          x="160px" y="320px"
          width="160px" height="160px"
          style={svgStyle}
          onClick={() => props.onBoxClick(1, 2)}
        />
        <rect
          x="320px" y="320px"
          width="160px" height="160px"
          style={svgStyle}
          onClick={() => props.onBoxClick(2, 2)}
        />
      </g>
      <g>
        {props.board[0][0] === 'X' ? <X x='0' y='0' /> : null}
        {props.board[0][0] === 'O' ? <O x='0' y='0' /> : null}
        {props.board[1][0] === 'X' ? <X x='0' y='160' /> : null}
        {props.board[1][0] === 'O' ? <O x='0' y='160' /> : null}
        {props.board[2][0] === 'X' ? <X x='0' y='320' /> : null}
        {props.board[2][0] === 'O' ? <O x='0' y='320' /> : null}

        {props.board[0][1] === 'X' ? <X x='160' y='0' /> : null}
        {props.board[0][1] === 'O' ? <O x='160' y='0' /> : null}
        {props.board[1][1] === 'X' ? <X x='160' y='160' /> : null}
        {props.board[1][1] === 'O' ? <O x='160' y='160' /> : null}
        {props.board[2][1] === 'X' ? <X x='160' y='320' /> : null}
        {props.board[2][1] === 'O' ? <O x='160' y='320' /> : null}

        {props.board[0][2] === 'X' ? <X x='320' y='0' /> : null}
        {props.board[0][2] === 'O' ? <O x='320' y='0' /> : null}
        {props.board[1][2] === 'X' ? <X x='320' y='160' /> : null}
        {props.board[1][2] === 'O' ? <O x='320' y='160' /> : null}
        {props.board[2][2] === 'X' ? <X x='320' y='320' /> : null}
        {props.board[2][2] === 'O' ? <O x='320' y='320' /> : null}
      </g>
    </svg>
  );
};

export default Board;
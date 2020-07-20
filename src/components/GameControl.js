import React from 'react';

const StatusMessage = ({ status }) => {
  if (status.winner === '') {
    if (status.playerOneIsActive) {
      return 'O\'s turn';
    } else {
      return 'X\'s turn';
    }
  } else {
    switch (status.winner) {
      case 'tie': return 'It\'s a tie!';
      case 'X': return 'X has won!';
      case 'O': return 'O has won!';
      default: return null;
    }
  }
};

const GameControl = props => {
  return (
    <div className="level is-mobile">
      <div className="level-item has-text-centered">
        <div>
          <span className='is-size-4'><StatusMessage {...props} /></span>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <button className='button is-warning' onClick={props.resetGame}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default GameControl;
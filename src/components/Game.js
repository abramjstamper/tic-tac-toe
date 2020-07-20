import React from 'react';
import Board from './Board';
import GameControl from './GameControl';

class Game extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      playerOneIsActive: Math.random() >= 0.5,
      board: [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ],
      winner: ''
    };
  }

  onBoxClick = (x, y) => {
    const state = { ...this.state };
    if (state.board[y][x] === '' && state.winner === '') {
      state.board[y][x] = state.playerOneIsActive ? 'O' : 'X';
      state.playerOneIsActive = !state.playerOneIsActive;
    }

    this.setState(state, () => this.checkIfVictoryOrTie());
    console.log(state);
  };

  checkIfVictoryOrTie = () => {
    const state = { ...this.state };

    // Horizontal
    if (state.board[0][0] === state.board[0][1] && state.board[0][1] === state.board[0][2]) {
      state.winner = state.board[0][0];
    }
    if (state.board[1][0] === state.board[1][1] && state.board[1][1] === state.board[1][2]) {
      state.winner = state.board[1][0];
    }
    if (state.board[2][0] === state.board[2][1] && state.board[2][1] === state.board[2][2]) {
      state.winner = state.board[2][0];
    }

    // Vertical
    if (state.board[0][0] === state.board[1][0] && state.board[1][0] === state.board[2][0]) {
      state.winner = state.board[0][0];
    }
    if (state.board[0][1] === state.board[1][1] && state.board[1][1] === state.board[2][1]) {
      state.winner = state.board[0][1];
    }
    if (state.board[0][2] === state.board[1][2] && state.board[1][2] === state.board[2][2]) {
      state.winner = state.board[0][2];
    }

    // Diagonal
    if (state.board[0][0] === state.board[1][1] && state.board[1][1] === state.board[2][2]) {
      state.winner = state.board[1][1];
    }
    if (state.board[0][2] === state.board[1][1] && state.board[1][1] === state.board[2][0]) {
      state.winner = state.board[1][1];
    }

    const numberIndicesUnfilled = state.board.reduce((prev, curr) => {
      return prev + curr.filter(i => i === '').length;
    }, 0);

    if (numberIndicesUnfilled === 0 && state.winner === '') {
      state.winner = 'tie';
    }

    this.setState(state);
  }

  resetGame = () => {
    this.setState({
      playerOneIsActive: Math.random() >= 0.5,
      board: [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ],
      winner: ''
    });
  }

  render() {
    return (
      <div className='container'>
        <div className="columns">
          <div className="column">
            <GameControl status={this.state} resetGame={this.resetGame} />
          </div>
        </div>

        <div className="level">
          <div className="level-item has-text-centered">
            <Board onBoxClick={this.onBoxClick} board={this.state.board} />
          </div>
        </div>
      </div>
    );
  }
}

export default Game;

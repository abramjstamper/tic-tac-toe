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
      winningPath: [],
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
    if (state.board[0][1] !== '' && state.board[0][0] === state.board[0][1] && state.board[0][1] === state.board[0][2]) {
      state.winner = state.board[0][1];
      state.winningPath = [{ y: 0, x: 0 }, { y: 0, x: 1 }, { y: 0, x: 2 }];
    }
    if (state.board[1][1] !== '' && state.board[1][0] === state.board[1][1] && state.board[1][1] === state.board[1][2]) {
      state.winner = state.board[1][1];
      state.winningPath = [{ y: 1, x: 0 }, { y: 1, x: 1 }, { y: 1, x: 2 }];
    }
    if (state.board[2][1] !== '' && state.board[2][0] === state.board[2][1] && state.board[2][1] === state.board[2][2]) {
      state.winner = state.board[2][1];
      state.winningPath = [{ y: 2, x: 0 }, { y: 2, x: 1 }, { y: 2, x: 2 }];
    }

    // Vertical
    if (state.board[1][0] !== '' && state.board[0][0] === state.board[1][0] && state.board[1][0] === state.board[2][0]) {
      state.winner = state.board[1][0];
      state.winningPath = [{ y: 0, x: 0 }, { y: 1, x: 0 }, { y: 2, x: 0 }];
    }
    if (state.board[1][1] !== '' && state.board[0][1] === state.board[1][1] && state.board[1][1] === state.board[2][1]) {
      state.winner = state.board[1][1];
      state.winningPath = [{ y: 0, x: 1 }, { y: 1, x: 1 }, { y: 2, x: 1 }];
    }
    if (state.board[1][2] !== '' && state.board[0][2] === state.board[1][2] && state.board[1][2] === state.board[2][2]) {
      state.winner = state.board[1][2];
      state.winningPath = [{ y: 0, x: 2 }, { y: 1, x: 2 }, { y: 2, x: 2 }];
    }

    // Diagonal
    if (state.board[1][1] !== '' && state.board[0][0] === state.board[1][1] && state.board[1][1] === state.board[2][2]) {
      state.winner = state.board[1][1];
      state.winningPath = [{ y: 0, x: 0 }, { y: 1, x: 1 }, { y: 2, x: 2 }];
    }
    if (state.board[1][1] !== '' && state.board[0][2] === state.board[1][1] && state.board[1][1] === state.board[2][0]) {
      state.winner = state.board[1][1];
      state.winningPath = [{ y: 0, x: 2 }, { y: 1, x: 1 }, { y: 2, x: 0 }];
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
      winningPath: [],
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
            <Board onBoxClick={this.onBoxClick} board={this.state.board} winningPath={this.state.winningPath} />
          </div>
        </div>
      </div>
    );
  }
}

export default Game;

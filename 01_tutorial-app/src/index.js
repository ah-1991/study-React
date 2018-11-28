import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square
      key={i}
      value={this.props.squares[i]}
      onClick={() => this.props.onClick(i)}
    />;
  }

  renderBoardRow(array) {
    return (
      array.map((elm, index) => {
        return this.renderSquare(elm);
      })
    );
  }

  render() {
    const boardRow = Array(3).fill(null).map((_, i) => i);
    const boardRows = boardRow.map((row, index, array) => {
      return (
        <div className="board-row" key={index}>
          {this.renderBoardRow(array.map(elm => elm + index * 3))}
        </div>
      );
    });

    return (
      <div>
        {boardRows}
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
        move: {
          col: null,
          row: null,
        },
      }],
      stepNumber: 0,
      xIsNext: true,
      orderBy: 'src',
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares,
        move: {
          col: i % 3 + 1,
          row: Math.floor(i / 3) + 1
        },
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  orderBy() {
    this.setState({
      orderBy: this.state.orderBy === 'src' ? 'desc' : 'src',
    });
  }

  render() {
    const history = this.state.history;
    const stepNumber = this.state.stepNumber
    const current = history[stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        `Go to move #(${step.move.col},${step.move.row})` :
        'Go to game start';
      return (
        <li key={move}>
          <button
            className={stepNumber === move ? "font-weight-bold" : ""}
            onClick={() => this.jumpTo(move)}>
            {desc}
          </button>
        </li >
      );
    });

    if (this.state.orderBy === 'desc') {
      moves.reverse();
    }

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <div>
            <button
              onClick={() => this.orderBy()}>
              {this.state.orderBy === 'src' ? 'descending order' : 'ascending order'}
            </button>
          </div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

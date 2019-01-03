import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: []
    };
    this.deleteTodo = this.deleteTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }
  // 新規追加
  addTodo(value) {
    // 追加
    this.state.todo.push({
      titele: value
    });
    // 保存
    this.setState({
      todo: this.state.todo
    });
  }
  // 削除機能
  deleteTodo(i) {
    // 削除
    this.state.todo.splice(i, 1);
    // 保存
    this.setState({
      todo: this.state.todo
    });
  }
  render() {
    return (
      <div>
        <h1>TODOアプリ</h1>
        <List todo={this.state.todo} deleteTodo={this.deleteTodo} />
        <Input addTodo={this.addTodo} ref={this.newTitle} />
        <JsonList />
      </div>
    );
  }
}

function List(props) {
  return (
    <ul>
      {props.todo.map((todo, i) => {
        return <li key={i}><input type="button" value="x" onClick={() => props.deleteTodo(i)} /> {todo.titele} </li>
      })}
    </ul>
  )
}

class Input extends Component {
  constructor(props) {
    super(props);
    this.newTitle = React.createRef();
    // 追加
    this.addTodo = this.addTodo.bind(this);
  }
  // 新規追加
  addTodo() {
    this.props.addTodo(this.newTitle.current.value);
    // 初期化
    this.newTitle.current.value = '';
  }
  render() {
    return (
      <>
        <input type="text" ref={this.newTitle} />
        <input type="button" value="追加" onClick={this.addTodo} />
      </>
    )
  }
}

// ajax通信
class JsonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      json: null
    };

    fetch('http://localhost:3001/todos')
      .then(res => res.json())
      .then(res => this.setState({ json: JSON.stringify(res) }));
  }

  render() {
    return (
      <div>
        JsonList:
        {this.state.json}
      </div>
    )
  };

}

export default App;

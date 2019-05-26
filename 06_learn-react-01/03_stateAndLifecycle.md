# stateとライフサイクル

## state
stateはコンポーネントによって管理されるプライベートなもの。


```js
class Sample extends React.Component {
  // 引数としてpropsを受け取り、継承する必要あり
  constructor(props) {
    super(props);
    // stateはコンポーネント内で自由に値を扱える
    this.state = {hoge};
  }

  render() {
    return (
      <div>state = {this.state.hoge}</div>
    );
  }
}
```

## ライフサイクル
要素がDOMに描画されるときをマウントという。  
要素がDOMから削除されるときをアンマウントという。  
コンポーネントであるメソッドを使用することで、マウント時やアンマウント時に処理が行える。ある関数をライフサイクルメソッドという。  

```js
class Sample extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // Reactのデータフローに影響しない値は自由にthisに格納してよい
    this.id = setInterval(
      () => this.setRandomNum(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.id);
  }

  setRandomNum() {
    this.setState({
      randomNum: Math.random()
    });
  }

  render() {
    return (
      <div>randomNum = {this.state.randomNum}</div>
    );
  }
}

```
ローカルデータつまり、stateを更新するには、`this.setState()`を使用する。  

### componentDidMount
要素がDOMにレンダーされた後に実行される。

### componentWillUnmount
要素がDOMから削除される前に実行される。

## stateについて

### stateは直接更新してはならない
コンストラクタ以外で直接更新はしてダメ。

```js
// ×
this.state.hoge = 'hoge';

// o
this.setState({hoge});

```

### stateの更新は非同期


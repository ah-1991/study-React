# コンポーネント

コンポーネントとは再利用できる部品の単位。 

## コンポーネント
二種類の書き方がある。 以下は同じ意味。 

関数コンポーネント。  
```js
function Hello(props) {
  return <h1>hello, {props.hoge}</h1>;
}
```

クラスコンポーネント。
```js
class Hello extends React.Component {
  render() {
    return <h1>hello, {this.props.hoge}</h1>;
  }
}
```
propsを引数として受け取り、react要素を返す。  
**注意**  
propsは読み取り専用。自信のpropsを変更することは許されない。  
同じ入力に対して同じ結果を返さなければならない。  

作成した関数コンポーネントはJSXでユーザ定義コンポーネントとして使用できる。  
JSXの属性をコンポーネントに渡す。これを、propsオブジェクトと呼ぶ。
```js
function Hello(props) {
  return <h1>hello, {props.hoge}</h1>;
}

const elm = <Hello hoge="hoge">;
```
1. renderの際にreactはHelloコンポーネントを呼び出し、propsとして`{hoge:hoge}`を渡す
2. Helloコンポーネントは`<h1>hello, hoge</h1>`を返す

## コンポーネントの再利用

作成したコンポーネントは再利用できる。  
全て独立した要素となる。  
```js
function Hello(props) {
  return <h1>hello, {props.name}</h1>;
}

const elm1 = <Hello name="Abe">;
const elm2 = <Hello name="Tanaka">;
const elm3 = <Hello name="Saito">;
```

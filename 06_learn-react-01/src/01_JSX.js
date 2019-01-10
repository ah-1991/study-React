// html風な書き方をするが、javaScript
// 式であるためループの中や返り値にも書ける
// 内部ではReact.createElement()を呼んでいる
// 結果React elementを返す 

// JSX
const helloElm = <h1>Hello</h1>;

// jsを扱うときは中括弧を使う
const variable = 'aaa';
function fn1(arg) {
	return <p>arg</p>;
}
const elm = <div>{fn1(variable)}</div>;

// 属性の付け方
const elm2 = <div id='id'>id</div>;
const className = 'class';
const elm3 = <div className={className}>id</div>;

// 空要素は閉じる
const img = <img src='src' />;

// 子要素
// 慣習的に（）で囲う
const elm4 = (
<div>
	<p>pppp</p>
</div>
);
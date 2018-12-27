// 関数式には二種類ありほぼ同じ意味となる
const hoge = function () {
	console.log('hoge!');
};

// アロー関数
const fuga = () => {
	console.log("fuga!");
};

// ルール
// 仮引数がないときは括弧が必要
const fn1 = () => { };
// 仮引数が１つの時は括弧の省略が可能
const fn2 = x => { console.log(x); };
// 仮引数が２つ以上の時は括弧が必要
const fn3 = (x, y) => { console.log(x); console.log(x); };
// 処理が１行なら中括弧の省略が可能
const fn4 = x => x * 2;

// アロー関数と通常の関数との違いは静的か動的か
// 通像の関数はコールオブジェクトを参照する
// アロー関数はスコープの外を参照する

// 違いの検証
const person = {
  name: "hoge"
};

const fn1 = function() {
  console.log("fn1:" + this.name);
};

const fn2 = () => {
  console.log("fn2:" + this.name);
};

fn1.call(person, null); // => fn1:hoge

fn2.call(person, null); // => fn2:undefined

//------------------------------------------------------

const numberObj = {
  numbers: [2, 3, 6, 8],
  decoration: "!!!!",
  showNumbers1() {
    return this.numbers.forEach(function(elm) {
      console.log(elm + this.decoration);
    });
  },
  showNumbers2() {
    return this.numbers.forEach(elm => {
      console.log(elm + this.decoration);
    });
  }
};

numberObj.showNumbers1(); // => NaN ...
numberObj.showNumbers2(); // => 2!!!! 3!!!! ...

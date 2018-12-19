// シンプルな動作確認

async function resolveFn() {
  return 'hello';
}

// これと同じ
// function resolveFn() {
//   return Promise.resolve("hello");
// }

async function rejectFn() {
  throw new Error('err!!');
}

resolveFn().then(value => {
  console.log(value);
  return rejectFn();
}).then(value => {
  console.log('fin');
}).catch(err => {
  console.log(err);
});

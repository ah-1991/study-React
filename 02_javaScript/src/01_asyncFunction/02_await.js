function hoge(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data) {
        resolve({result: 'ok'});
      }
      reject(new Error('Error!'));
    });
  }, 1000 * 3);
}

async function fuga() {
  const results = [];
  const a = await hoge('a');
  results.push(a);
  const b = await hoge();
  results.push(b);

  return results;
}

fuga().then((data) => {
  console.log(data);
}).then((data) => {
  console.log(data);
}).catch((err) => {
  console.log(err);
});
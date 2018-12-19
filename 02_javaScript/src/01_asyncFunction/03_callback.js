class AsyncStorage {
  constructor() {
    this.dataMap = new Map();
  }
  async save(key, value) {
    return new Promise(resolve => {
      setTimeout(() => {
        this.dataMap.set(key, value);
        resolve();
      }, 100);
    });
  }
  async load(key) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.dataMap.get(key));
      }, 50);
    });
  }
}

// Async Storageを作成する
const storage = new AsyncStorage();

// 1. AsyncStorageにデータを保存する
// コールバックにawaitを宣言しても、外側の処理は止まらないためundefindになる
async function saveUsers(users) {
  // console.log("1. saveUsers関数開始");
  users.forEach(async (user) => {
    await storage.save(user.id, user);
    // console.log(`3. UserId:${user.id}を保存しました`);
  });
  // console.log("2. saveUsers関数終了");
}

// 解決案1 直列
async function saveUsersA(users) {
  for (const user of users) {
    await storage.save(user.id, user);
  } 
}

// 解決案2 並列
async function saveUsersB(users) {
  const promises = users.map(async user => {
    await storage.save(user.id, user);
  });
  await Promise.all(promises);
}

// 2. AsyncStorageからデータを読み取る
async function loadUser(userId) {
  return storage.load(userId);
}

async function main() {
  const users = [{id: 1, name: "John"}, {id: 5, name: "Smith"}, {id: 7, name: "Ayo"}];
  await saveUsers(users);
  const user = await loadUser(5);
  console.log(user); // => undefined

  const users2 = [{id: 8, name: "Aya"}, {id: 9, name: "Bya"}, {id: 10, name: "Cya"}];
  await saveUsersA(users2);
  const user2 = await loadUser(8);
  console.log(user2); 

  const users3 = [{id: 11, name: "Bob"}, {id: 12, name: "Bab"}, {id: 13, name: "Beb"}];
  await saveUsersB(users3);
  const user3 = await loadUser(11);
  console.log(user3);
}

main();
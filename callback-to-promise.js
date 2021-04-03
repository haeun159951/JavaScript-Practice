"use strict";

function printImmediately(print) {
  print();
}

//Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}

//비동기 적인 실행 방법

console.log("1");
setTimeout(function () {
  console.log("2");
}, 1000);

console.log("3");

printImmediately(() => console.log("hello"));
printWithDelay(() => console.log("async callback"), 2000); // 브라우저 요청

//Callback Hell revision using promise example
class UserStorage {
  delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async loginUser(id, password) {
    await this.delay(3000);

    if (
      (id === "ellie" && password === "dream") ||
      (id === "coder" && password === "academy")
    ) {
      return id;
    } else {
      throw new Error("no access");
    }
  }
  async getRoles(user) {
    await this.delay(1000);
    if (user === "ellie") {
      return { name: "ellie", role: "admin" };
    } else {
      throw new Error("no access");
    }
  }

  // ADDED FOR THE HOME WORK
  async getUserWithRole(user, password) {
    const user = await this.loginUser(user, password);
    const role = await this.getRoles(user);
    return role;
  }
}

// HOME WORK WITH ASYNC AWAIT VER 1
const userStorage = new UserStorage();
const id = prompt("enter your id: ");
const password = prompt("enter your pwd");
userStorage.getUserWithRole(id, password).catch(console.log).then(console.log);

//  HOME WORK WITH ASYNC AWAIT VER 2
// async function dreamCoding(id, password) {
//   try {
//     const loginUser = await userStorage.loginUser(id, password);
//     const user = await userStorage.getRoles(loginUser);
//     return `Hello ${user.name}, you have a ${user.role} role`;
//   } catch {
//     return alert("not Found"); // ALERT NONO
//   }
// }

// dreamCoding(id, password).then(console.log);

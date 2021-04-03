// "use strict";

// console.log("1");

// // call back function
// setTimeout(() => console.log("2"), 1000); //1 초뒤에 실행해줘

// console.log("3"); //1 - 3 - 2

// // Sybchronous call back  / argument: print하는 콜백을 받는다
// function printImmediately(print) {
//   print();
// }

// printImmediately(() => console.log("hello"));

// function printWithDelay(print, timeout) {
//   setTimeout(print, timeout);
// }

// printWithDelay(() => console.log("async callback"), 2000);

// //Callback Hell example

// class UserStorage {
//   loginUser(id, password, onSuccess, onError) {
//     setTimeout(() => {
//       if (
//         (id === "ellie" && password === "dream") ||
//         (id === "coder" && password === "academy")
//       ) {
//         onSuccess(id);
//       } else {
//         onError(new Error("not found"));
//       }
//     }, 2000);
//   }

//   getRoles(user, onSuccess, onError) {
//     setTimeout(() => {
//       if (user === "ellie") {
//         onSuccess({ name: "ellie", role: "admin" });
//       } else {
//         onError(new Error("not access")); //error object
//       }
//     }, 1000);
//   }
// }

// //1.id password
// //login
// // roles

// // 매우 매우 체인이 길어질수록 문제 분석 하기 어려움
// // 콜백 지옥 !!!
// const userStorage = new UserStorage();
// const id = prompt("enter your id: ");
// const password = prompt("enter your pwd");
// userStorage.loginUser(
//   id,
//   password,
//   (user) => {
//     userStorage.getRoles(
//       user,
//       (userWithRole) => {
//         alert(
//           `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
//         );
//       },
//       (error) => {
//         console.log(error);
//       }
//     );
//   },
//   (error) => {
//     console.log(error);
//   }
// );

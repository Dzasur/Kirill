// /* 
// Операторы сравнения: >, <, =, <=, >=, ==, ===, !=, !==
// */
// let value;
// value = 1 == '1';
// value = 1 === '1';
// console.log(value);
// //  if, else, else if
// let inn = 1
// if(inn < 4) {
//     console.log(inn)
// }
// /* 
// Тернарный оператор ?
// */

// let a = 2;
// let b = 0;

// b = a > 0 ? a : b + 1;
// // б = если а > 0, то(?) а = б, иначе(:) б + 1

// /*
// Switch case
// */

// let color = 'pink';
// switch(color) {
//     case 'white':
//         console.log('white');
//     break;
//     case 'black':
//         let c = 1;
//         if(c > 0) {
//             console.log('true');
//         } else {
//             console.log('false');
//         }
//     break;
// }
// /* 
// циклы while(пока), for of, do while, for(для), for in
// */
// // let i = 0;
// // while(i++ <= 10) {
// //     console.log(i)
// // }
// // do{
// //     console.log('do while')
// // } while(i > 1)
// for(let i = 1; i > 6; i++) {
//     console.log('kaneki ken')
// }
// let kk = 1000;
// while(kk > 1) {
//     console.log(kk - 7)
// }

// const user ={
//     name: 'Pain',
//     age: 18
// }

// /*  for in    */

// for(let key in user) {
//     console.log(user[key])
// }

// /*  for of    */

// for(let kay of user) {
//     console.log(kay)
// }


// /*
// Функции высшего порядка(callback)
// */

// const names = ['Pain', 'Itachi', 'Hinata'];

// let res = [];
// function mapArray(arr, fn) {
// for(let i = 0; i < arr.length; i++) {
//     res.push(fn(arr[i]))
// }
// return res
// }
// function nameLength(el) {
//     console.log(el)
//     return el.length
// }
// let full = mapArray(names, nameLength);
// console.log(full)

// /*
//     This
// */

// function getThis(){
// console.log(this)
// }
// getThis()

// /*
//     Arrow function
// */

// const moreAction = (a, b) => {
//     a *= 4;
//     b *= 7;
//     return a / b;
// }
// const moreObj = (str = '') => {
//     return {
//         value: str, 
//         length: str.length
//     }
// }
// moreObj('Hi')

// let s = 1;
// if(s > 0 && s < 5) {
//     alert('true')
// } else{
//     alert('false')
// };
// let num = 1;
// let result;
// switch(num){
//     case 1:
//         result = 'зима'
//         break
//     case 2:
//         result = 'весна'
//         break
//     case 3:
//         result = 'лето'
//         break
//     case 4:
//         result = 'осень'
//         break
// }
// console.log(result)



/*
    решение задач
 */
// let inn;
// for(inn = 11; inn <= 15; inn++) {
//     console.log(inn)
// }
// const arr = [1, 2, 3, 4, 5]
// for(let i = 0; i <= arr.length; i++) {
//     console.log(arr)
// }
// var obj = {green: 'зеленый', red: 'красный', blue: 'голубой'};
// for( var key in obj) {
//     console.log(key + obj[key])
// }

//Map

const users = [
    {
        name: firstMan,
        age: 66
    },
    {
        name: secondName,
        age: 4
    }
]

const userMap = users.map(users => users.name);
const userMap2 = users.map(users ({name: users.name, age: users.age}));
console.log(userMap2);


//filter

const userFilter = users.filter(users => users.age < 90)
console.log(userFilter);

/*- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль*/

let arr=[`Olivia`, `William`, `Benjamin`, `Lucas`, `Henry`, `Theodore`, `Mia`, `Charlotte`, `Emma`, `Sophia`];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

/*- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.*/

let b1={
    title: `Night circus`,
    pageCount: 70,
    genre: `fantasy`,
}
let b2={
    title: `Love`,
    pageCount: 400,
    genre: `romance`,
}
let b3={
    title: `The box`,
    pageCount:13,
    genre: `mystery`,
}
console.log(b1);
console.log(b2);
console.log(b3);

/*- Створити 3 об'єкти які описують книги.
Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age*/

b1.authors=[`Erin Mongerstern`, 39];
console.log(b1)
b2.authors=[`Roman Roman`, 30];
console.log(b2)
b3.authors=[`Maureen Johnson`, 59]
console.log(b3)

/*- Створити масив з 10 об'єктами які описують сутніть "користувач".
 Поля: name, username,password. Вивести в консоль пароль кожного користувача*/

let users=[
    {name: `name1`, username: `uname1`, password: `kutjm`},
    {name: `name2`, username: `uname2`, password: `kugtjm`},
    {name: `name3`, username: `uname3`, password: `kutpdsjm`},
    {name: `name4`, username: `uname4`, password: `kutjmasd`},
    {name: `name5`, username: `uname5`, password: `qwekutjm`},
    {name: `name6`, username: `uname6`, password: `mnkutjm`},
    {name: `name7`, username: `uname7`, password: `nkutjm`},
    {name: `name8`, username: `uname8`, password: `kusstjm`},
    {name: `name9`, username: `uname9`, password: `pkutjm`},
    {name: `name10`, username: `uname10`, password: `ffkutjm`},
]
console.log(users[0]);
console.log(users[1]);
console.log(users[2]);
console.log(users[3]);
console.log(users[4]);
console.log(users[5]);
console.log(users[6]);
console.log(users[7]);
console.log(users[8]);
console.log(users[9]);


//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function x (a,b){
    return a*b
}
console.log(x(3,6))
//- створити функцію яка обчислює та повертає площу кола з радіусом r
function y(r){
    return 3.14*r**2
}
console.log(y(3));
//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//S=2пr(h+r)
function z(r,h) {
    return 2*3.14*(h+r)
}
console.log(z(2,4));
//- створити функцію яка приймає масив та виводить кожен його елемент
function l(x) {
    for (let i of x){
        console.log(i)
    }
}
l([5456,7565,4567,9876,987])
//- створити функцію яка створює параграф з текстом. Текст задати через аргумент
function p(xxx){
    document.write(`<p>${xxx}</p>`);
}
p(`створити функцію яка створює параграф з текстом. Текст задати через аргумент`)
//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ul(text){
    document.write(`<ul>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`</ul>`);
}
ul(`Текст li задати через аргумент всім однаковий`)
//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function list(a,b,c,d,e) {
    document.write(`<ol>
<li>${a}</li>
<li>${b}</li>
<li>${c}</li>
<li>${d}</li>
<li>${e}</li>
</ol>`)
}
list(35, `Lviv`, true, 28, 9);
list(`Kyiv`, 46, false, 20, 6)
//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
function f1(id, n, age) {
    document.write(`<div>
<h3>${id}</h3>
<h4>${n}, ${age}</h4>
</div>`);
}
f1(55, `Maria`, 32)
f1(48, `Daria`, 15)
//- створити функцію яка повертає найменьше число з масиву
function min(a,b,c){
    if (a<b && a<c){
        console.log(a)
    }else if (b<a && b<c){
        console.log(b)
    }else if (c<a && c<b){
        console.log(c)
    }
}
min(35,58,89)
//- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
function f(...arr) {
    return arr[0]+arr[1]+arr[2]+arr[3]
}
console.log(f(2,2,2,2)
)
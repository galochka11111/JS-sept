/*- Є змінна х, якій ви надаєте довільне числове значення.
    Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
    Перевірте  скрипт при a, що дорівнює 1, 0, -3
 */
let x=+prompt(`x`);
if(x!==0){
    console.log(`Вірно`)
}else {
    console.log(`Невірно`)
}
/*- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
(в першу, другу, третю или четверту частину години*/
let time=36;
if(time>=0 && time<15){
    console.log(`Це перша чверть`);
}else if(time>=15 && time<30){
    console.log(`Це друга чверть`);
}else if(time>=30 && time<45) {
    console.log(`Це третя чверть`);
}else if(time>=45 && time<61) {
    console.log(`Це четверта чверть`);
}else {
    console.log(`Помилка`);
}
/*- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
 (у першу, другу чи третю).*/
let day=16;
if(day>0 && day<=10){
    console.log(`Це перша декада`);
}else if (day>10 && day<=20){
    console.log(`Це друга декада`);
}else if(day>20 && day<=31){
    console.log(`Це третя декада`);
}else {
    console.log(`Помилка`);
}
/*- Скласти розклад на тиждень за домопоги switch.
Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
(можна замість плану на день, назву дня англійською).*/

let asd=+prompt(`порядковий номер дня`)
    switch (asd){
    case `1`:document.write(`<ul>
<li>Я досліджую світ
<li>Математика
<li>Англійська мова
<li>Фізична культура
<li>Українська мова</ul>`);
    break;
    case `2`:document.write(`<ul>
<li>Образотворче мистецтво
<li>Математика
<li>Англійська мова
<li>Фізична культура
<li>Українська мова</ul>`);
    break;
    case`3`:document.write(`<ul>
<li>Англійська мова
<li>Математика
<li>Англійська мова
<li>Фізична культура
<li>Українська мова</ul>`);
    break;
    case`4`:document.write(`<ul>
<li>Фізична культура
<li>Математика
<li>Основи християнської етики
<li>Фізична культура
<li>Українська мова</ul>`);
    break;
    case`5`:document.write(`<ul>
<li>Виховна година
<li>Математика
<li>Основи християнської етики
<li>Фізична культура
<li>Англійська мова</ul>`);
    break;
    case`6`:document.write(`Вихідний`);
    break;
    case `7`:document.write(`Вихідний`);
    break;
    default:document.write(`Помилка`)
}

/*- Користувач вводить або має два числа.
        Потрібно знайти та вивести максимальне число з тих двох .
        Також потрібно врахувати коли введені рівні числа.*/
let a=13;
let b=3;
if (a>b){
    console.log(a);
}else if(b>a){
    console.log(b);
}else if(a===b){
    console.log(`a=b`);
}else {
    console.log(`Помилка`)
}
/* - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
Напишіть код який, за допомоги  оператора || буде присвоювати змінній х значення "default"
якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)*/
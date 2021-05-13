var calc_display = document.querySelector('#no-zero');
console.log(calc_display);
// global variable for the calc_display.innerHTML
main_screen = calc_display.textContent;
console.log(typeof('main_screen'));



const clear = document.querySelector('#clear');
clear.addEventListener('click',function () {
    let y = clear.textContent;
    calc_display.textContent = "";
 })
console.log(clear);

const dot = document.querySelector('#dot');
dot.addEventListener('click',function () {
    let y = dot.textContent;
    calc_display.textContent += y;
 })
console.log(dot);

const no_zero = document.getElementById('zero');
no_zero.addEventListener('click',function () {
    let y = no_zero.textContent;
    calc_display.textContent += y;
 })
console.log(no_zero);

const one = document.querySelector('#one');
one.addEventListener('click',function () {
    let y = one.textContent;
    calc_display.textContent += y; 
    })

const two = document.querySelector('#two');
two.addEventListener('click',function () {
    let y = two.textContent;
    calc_display.textContent += y; 
 })
console.log(two);

const three = document.querySelector('#three');
three.addEventListener('click',function () {
    let y = three.textContent;
    calc_display.textContent += y; 
 })
console.log(three);

const four = document.querySelector('#four');
four.addEventListener('click',function () {
    let y = four.textContent;
    calc_display.textContent += y; 
 })
console.log(four);

const five = document.querySelector('#five');
five.addEventListener('click',function () {
    let y = five.textContent;
    calc_display.textContent += y; 
 })
console.log(five);

const six = document.querySelector('#six');
six.addEventListener('click',function () {
    let y = six.textContent;
    calc_display.textContent += y; 
 })
console.log(six);

const seven = document.querySelector('#seven');
seven.addEventListener('click',function () {
    let y = seven.textContent;
    calc_display.textContent += y; 
 })
console.log(seven);

const eight = document.querySelector('#eight');
eight.addEventListener('click',function () {
    let y = eight.textContent;
    calc_display.textContent += y; 
 })
console.log(eight);

const nine = document.querySelector('#nine');
nine.addEventListener('click',function () {
    let y = nine.textContent;
    calc_display.textContent += y; 
 })
console.log(nine);

const multiplyOperator = document.querySelector('#multiplyOperator');
multiplyOperator.addEventListener('click',function () {
    let y = multiplyOperator.textContent;
    calc_display.textContent += y; 
 })
console.log(multiplyOperator);

const divideOperator = document.querySelector('#divideOperator');
divideOperator.addEventListener('click',function () {
    let y = divideOperator.textContent;
    calc_display.textContent += y;
 })
console.log(divideOperator);

const addOperator = document.querySelector('#addOperator');
addOperator.addEventListener('click',function () {
    let y = addOperator.textContent;
    calc_display.textContent += y;
 })
console.log(addOperator);

const subtractionOperator = document.querySelector('#subtractionOperator');
subtractionOperator.addEventListener('click',function () {
    let y = subtractionOperator.textContent;
    calc_display.textContent += y;
 })
console.log(subtractionOperator);

const equalsOperator = document.querySelector('#equalsOperator');
equalsOperator.addEventListener('click',function () {
//    read the display
    let y = calc_display.textContent;
// 
    
 })
//  when = is pressed, let the dislay be read and parsed into a var, which will display a value
console.log(equalsOperator);

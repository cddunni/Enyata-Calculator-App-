//declaration of variable
let output = document.querySelector('.inputBox');
let numBtn = document.querySelectorAll('.num');
console.log(numBtn);
let operatorBtn = document.querySelectorAll('.operator');
console.log(operatorBtn)
let deleteBtn = document.querySelector('#del');
let resetBtn = document.querySelector('#reset');
let equalsBtn = document.querySelector('#equal');
let dotBtn = document.querySelector('#dot');

let display= ''
let lastOperation=''
let result= null
let haveDot = false;

//add eventlistners to each number button
numBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        console.log(btn.innerText);
        if (e.target.innerText === '.'  && !haveDot){
            haveDot = true;
        } else if (e.target.innerText === '.' && haveDot ) {
            return;
        }
        display += e.target.innerText;
        output.innerText = display;
    })
})
operatorBtn.forEach(operator => {
    operator.addEventListener('click', (e) => {
        console.log(operator.innerText)
        if (!display) result;
        haveDot= false;
        const action = e.target.innerText;
        if ()
    })
})



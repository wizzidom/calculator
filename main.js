const screen = document.getElementById('text');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');

let previousValue = '';
let operate = '';
let currentValue = '';

numbers.forEach(number => {
    number.addEventListener('click', (e)=>{
        showNumber(e.target.textContent);
        screen.textContent = currentValue;
    })
    
});

operators.forEach(op => {
    op.addEventListener('click', (e)=>{
        operation(e.target.textContent);
        screen.textContent = currentValue;
    })
})

function equals(){
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if (operate ==="+"){
        previousValue += currentValue;
    }
    else if(operate === "-"){
        previousValue -= currentValue;
    }
    else if(operate === "/"){
        previousValue /= currentValue;
    }
    else{
        previousValue *= currentValue;
    }



    previousValue = Math.round(previousValue *100)/100;
    console.log(previousValue);
    console.log(currentValue)

    previousValue = previousValue.toString();
    currentValue = previousValue.toString();

}
function showNumber(num){
    currentValue += num;
}

function clears(){
    screen.textContent = '';
    previousValue = '';
    currentValue = '';
    operate = '';
}

function deletee(){
    screen.textContent = (screen.textContent).slice(0,-1)
}
function operation(op){
    operate = op;
    previousValue = currentValue;
    currentValue = '';

}
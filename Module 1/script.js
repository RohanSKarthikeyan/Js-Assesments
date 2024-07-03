
var operator = 1;
var a = 10;
var b = 20;


var calcWelc = `Use this Calculator Manual:-
1 for addition
2 for subtraction
3 for multiplication
4 for division
5 for Remainder
6 for exponential\n`


function calculator(){

    console.log(calcWelc);

    if(isNaN(a) || isNaN(b)){
        console.log("Invalid Input");
        calculator();
    }else{
            choiceSelect(operator)
    }

    
}

function choiceSelect(choice){
    switch(choice){
        case 1:
            Add();
            break;
        case 2:
            Sub();
            break;
        case 3:
            Mul();
            break;
        case 4:
            Div();
            break;
        case 5:
            Mod();
            break;
        case 6:
            Pow();
            break;
        default:
            console.log("Invalid Operator")
    }
}


function Add(){
    console.log(`Value is ${a+b}`);
}

function Sub(){
    console.log(`Value is ${a-b}`);
}

function Mul(){
    console.log(`Value is ${a*b}`);
}

function Div(){
    if(b==0){
        console.log("0 can't be a divisor")
    }else{
        console.log(`Value is ${a/b}`);
    }
    
}

function Mod(){
    console.log(`Value is ${a%b}`);
}

function Pow(){
    console.log(`Value is ${a**b}`);
}


calculator();

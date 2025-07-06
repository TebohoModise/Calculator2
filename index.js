
var newLine = true;
var value1;
var currentOperator;
const textBox=document.getElementById("textBox1");
const InchToCm = document.getElementById("InchToCm");
const CmToInch = document.getElementById("cmToInch");
const result= document.getElementById("result");
let length;
const KgToLb = document.getElementById("KgToLb");
const LbToKg = document.getElementById("LbToKg");
let mass;
const CtoF = document.getElementById("CtoF");
const FtoC = document.getElementById("FtoC");
let Temp;
//Function to handle the digits numbers
function digitBtnPressed(button){

    if (newLine){
        document.getElementById("inputbox").value= button;  
        newLine= false;    
    }
    else{ var currentValue = document.getElementById("inputbox").value;
    document.getElementById("inputbox").value=currentValue + button;
}

}

//Function to handle the All clear button
// This function clears the input box and resets the newLine flag
function btnACPressed(){
    document.getElementById("inputbox").value = 0;
    newLine = true;
}

function oprBtnPressed(operator){
    currentOperator = operator;
    value1 = parseFloat(document.getElementById("inputbox").value);
newLine= true;
}
    //function to handle the equal button
function btnEqualPressed(){
    var value2 = parseFloat(document.getElementById("inputbox").value);
    var result;

    switch(currentOperator){
case"+":
    result = value1 + value2;
    break;
    case "-":
        result = value1 - value2;
        break;
        case "/":
            result= value1/value2;
            break;
            case"*":
            result= value1 * value2
            break;
    }
    document.getElementById("inputbox").value = result;


}
function delBtnPressed(){
   
    let inputBox = document.getElementById("inputbox");
    inputBox.value = inputBox.value.slice(0, -1);


}
function btnSquarePressed(){
    let inputBox = document.getElementById("inputbox");
    let value = parseFloat(inputBox.value);
    if (!isNaN(value)) {
        inputBox.value = value * value;
    } else {
        inputBox.value = "Error";
    }
    newLine = true;
}

function convBtnPressed(){
    window.open("converter.html", "_self")
}

function homeLink() {
    window.open("index.html", "_self");
}
function convertLength(){
if (InchToCm.checked){
    length=Number(textBox.value);
    length= length * (2.54);
    result.textContent= length.toFixed(2) + " cm"
}
else if(CmToInch.checked){
length=Number(textBox.value);
    length= length * (0.3937007874);
    result.textContent= length.toFixed(2) + " in"
   
}
else{
    result.textContent="Select a conversion"
}
}
function convertMass() {
    if (KgToLb.checked) {
        mass = Number(textBox.value);
        mass = mass * 2.20462; // Convert kilograms to pounds
        result.textContent = mass.toFixed(2) + " lb";
    }
    else if (LbToKg.checked) {
        mass = Number(textBox.value);
        mass = mass / 2.20462; // Convert pounds to kilograms
        result.textContent = mass.toFixed(2) + " kg";
    } else {
        result.textContent = "Select a conversion";
    }
}

function btnSqrtPressed() {
    let inputBox = document.getElementById("inputbox");
    let value = parseFloat(inputBox.value);
    if (!isNaN(value) && value >= 0) {
        inputBox.value = Math.sqrt(value);
    } else {
        inputBox.value = "Error";
    }
    newLine = true;
}

function convertTemp() {

    if (CtoF.checked) {
        Temp = Number(textBox.value);
        Temp = (Temp * 9/5) + 32; // Convert Celsius to Fahrenheit
        result.textContent = Temp.toFixed(2) + " °F";
    } else if (FtoC.checked) {
        Temp = Number(textBox.value);
        Temp = (Temp - 32) * 5/9; // Convert Fahrenheit to Celsius
        result.textContent = Temp.toFixed(2) + " °C";
    } else {
        result.textContent = "Select a conversion";
    }
}
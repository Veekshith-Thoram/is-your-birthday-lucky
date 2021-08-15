const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-button");
const outputText = document.querySelector("#output-text");

function checkBirthDateIsLucky(){
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if(dob&&luckyNumber.value)
        compareValues(sum,luckyNumber.value);
    else
        outputText.innerText = "Please enter both the fields!!😠😠"
}

function compareValues(sum, lucky){
    if(sum%lucky === 0){
        outputText.innerText = "Your Birthday is Lucky 🤑"
    } else{
        outputText.innerText = "Your Birthday is'nt lucky!!😑"
    }
}

function calculateSum(dob){
    dob = dob.replaceAll("-","");
    let sum = 0;
    for(let i=0;i<dob.length;i++){
        sum = sum+Number(dob.charAt(i))
    }
    return sum;
}

checkButton.addEventListener("click", checkBirthDateIsLucky);
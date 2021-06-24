var btnSubmit = document.querySelector("#btn-submit");
var bday = document.querySelector("#birthday");
var lucky = document.querySelector("#lucky-number");
var luckyText = document.querySelector("#lucky-text")


const clickHandler = () => {
    //converting the date into string
    var empty = bday.value.toString();
    //replacing the - with an empty space
    var empty = empty.replace(/-/g, "")
    //converting the string back to integer
    var empty = parseInt(empty);
    console.log(empty);
    //summing up the date integer
    var result = sum(empty);
    console.log(result);
    isLucky(result);
}

function sum(number){
    var value = 0;
    while(number != 0){
        value += number%10;
        number = Math.floor(number/10);
    }
    return value;
}

const isLucky = (value) => {
    if(value%lucky.value === 0 ){
        return luckyText.innerText = "You are a lucky person";
    } else {
        return luckyText.innerText = "You aren't lucky person";
    }
}

btnSubmit.addEventListener("click", clickHandler)
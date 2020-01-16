const pi = 3.14;
const kwart = 0.25;
let datumtijd = document.getElementById('1');
let changethis = document.getElementById('2');
let changethis2 = document.getElementById('3');

function getanswer(answers) {
   
   var input = document.getElementById("input").value;
   var answered = input*pi;
   console.log(answered)
    changethis.innerText = answered;
   let antwoord2 = input*input*pi*kwart;
   console.log(antwoord2);
    changethis2.innerText = antwoord2;
}

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;

console.log(dateTime);
datumtijd.innerText = dateTime;
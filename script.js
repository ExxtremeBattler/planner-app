$(document).ready(function () {
    
let currentDay = document.getElementById("currentDay")
var currentHour = moment().hour();

function getCurrentDay () {

    return moment().format('MMMM Do YYYY');    
}

currentDay.append(getCurrentDay())
console.log(currentHour);

})
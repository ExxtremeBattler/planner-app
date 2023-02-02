$(document).ready(function () {
    
let currentDay = document.getElementById("currentDay")
var currentHour = moment().hour();
let timeblockArr = document.getElementsByClassName("timeblock")

function getCurrentDay () {

    return moment().format('MMMM Do YYYY');    
}

currentDay.append(getCurrentDay())
console.log(currentHour);
console.log(timeblockArr[0].getAttribute('id'))

timeblockArr.forEach(element => {
    var timeblockHour = element.getAttribute('id')

    if (timeblockHour < currentHour) {
        element.classList.remove('present')
        element.classList.remove('future')
        element.classList.add('past')
    }
    else if (timeblockHour > currentHour) {
        element.classList.remove('present')
        element.classList.add('future')
        element.classList.remove('past')
    }
    else {
        element.classList.add('present')
        element.classList.remove('future')
        element.classList.remove('past')
    }
    
});
})
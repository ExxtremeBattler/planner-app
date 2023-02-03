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
console.log(timeblockArr[0].firstElementChild)

for (let index = 0; index < timeblockArr.length; index++) {

    var element = timeblockArr[index]
    
    var timeblockHour = timeblockArr[index].getAttribute('id')

    if (timeblockHour < currentHour) {
        element.firstElementChild.classList.remove('present')
        element.firstElementChild.classList.remove('future')
        element.firstElementChild.classList.add('past')
    }
    else if (timeblockHour > currentHour) {
        element.firstElementChild.classList.remove('present')
        element.firstElementChild.classList.add('future')
        element.firstElementChild.classList.remove('past')
    }
    else {
        element.firstElementChild.classList.add('present')
        element.firstElementChild.classList.remove('future')
        element.firstElementChild.classList.remove('past')
    }
    
}

})
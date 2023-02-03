$(document).ready(function () {
    
let currentDay = document.getElementById("currentDay")
var currentHour = moment().hour();
let timeblockArr = document.getElementsByClassName("timeblock")
let saveButtons = document.querySelectorAll(".saveBtn")

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

saveButtons.forEach(element => {

    element.addEventListener("click", function (event) {
        const targetBtn = event.target
        console.log(targetBtn.previousElementSibling.value)
        
        let targetTime = targetBtn.parentElement.id
        let targetText = targetBtn.previousElementSibling.value
    
        localStorage.setItem(targetTime, targetText)
    
        console.log(localStorage.getItem("9"))
    
    
        
    })
    
});

})
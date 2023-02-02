let currentDay = document.getElementById("currentDay")

function getCurrentDay () {

    return moment().format('MMMM Do YYYY');
    
}

currentDay.append(getCurrentDay())
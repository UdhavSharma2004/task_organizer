let today = new Date();
let dateobj = document.getElementById("htime");
let dayvalue, monthvalue;
switch (today.getUTCDay()) {
    case 0:
        dayvalue = "Sunday"
        break;
    case 1:
        dayvalue = "Monday"
        break;
    case 2:
        dayvalue = "Tuesday"
        break;
    case 3:
        dayvalue = "Wednesday"
        break;
    case 4:
        dayvalue = "Thrusday"
        break;
    case 5:
        dayvalue = "Friday"
        break;
    case 6:
        dayvalue = "Saturday"
        break;
}
switch (today.getUTCMonth()) {
    case 0:
        monthvalue = "January"
        break;
    case 1:
        monthvalue = "Feburary"
        break;
    case 2:
        monthvalue = "March"
        break;
    case 3:
        monthvalue = "April"
        break;
    case 4:
        monthvalue = "May"
        break;
    case 5:
        monthvalue = "June"
        break;
    case 6:
        monthvalue = "July"
        break;
    case 7:
        monthvalue = "August"
        break;
    case 8:
        monthvalue = "September"
        break;
    case 9:
        monthvalue = "October"
        break;
    case 10:
        monthvalue = "November"
        break;
    case 11:
        monthvalue = "December"
        break;
}
dateobj.innerText = dayvalue + ", " + (today.getUTCDate()) + " " + monthvalue + " " + today.getUTCFullYear();
console.log(dateobj);
let taskarray = [];
function add() {
    let task = document.getElementById("editor");
    let val = task.value;
    if (val == "") {
        alert("No Task Found to be added !!");
    }
    else {
        //input made empty
        taskarray.push(val.trim());
        task.value = '';
        displayArr();
    }
}
function displayArr() {
    let taski = '';
    for (let i = 0; i < taskarray.length; i++) {
        taski += "<li>" + (i + 1) + ". " + "<button onclick='removeList(" + i + "),playaudio()' class='dele'>Done</button >" + taskarray[i] + "</li>"
    }
    document.getElementById("task").innerHTML = taski;
}
function removeList(index) {
    taskarray.splice(index, 1);
    displayArr();
}
let audio = document.getElementById("bell_sound");
function playaudio() {
    audio.play();
}
let addaud = document.getElementById("added")
function addaudio() {
    addaud.play();
}
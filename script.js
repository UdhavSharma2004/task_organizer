let headobj=prompt("Welcome to Task Organizer prepared by Udhav Sharma, Thanks for choosing this application.\n\nCan you please share your name as user.")
if(headobj==null||headobj==""){
    headobj="Unknown"
}
document.getElementById("headingid").innerText+=headobj;
document.getElementsByClassName("checkbox1")
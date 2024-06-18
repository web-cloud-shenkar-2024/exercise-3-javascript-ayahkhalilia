var array_name= ["A","y","a","h","K","h","a","l","i","l","i","a"];
var curr_arr_count=0;
var colors = ["#98FB98", "#63C5DA", "blue", "#33B864"];
var curr_color_count=0;
let save=" ";
var rectangles_count=0;
var rectangle=0;
window.onload = () => {
    for (let i = 0; i< 12; i++){
        addRectangle();
     }
}

function initRectangles() {
}

function initSongs() {
}

function chooseRectangleColor() {
}

function addRectangle() {
    const black_rectangle=document.getElementById("black_rectangle");
    var new_rectangle=document.createElement("div");
    new_rectangle.className="small_rectangles";

    new_rectangle.style.backgroundColor=chooseRectangleColor();
    new_rectangle.innerHTML=initRectangles();
        rectangles_count++;
    black_rectangle.appendChild(new_rectangle);

    
}

function subtractRectangle() {
}

function switchRectanglesSongs() {
}

function populateSongsInList() {
}

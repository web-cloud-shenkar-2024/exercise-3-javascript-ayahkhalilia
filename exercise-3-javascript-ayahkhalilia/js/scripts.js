window.onload = () => {
    fetch("data/music.json")
          .then(Response =>Response.json())
          .then(data => console.log(data));
}

function initRectangles() {
    
}

function initSongs() {
}

function chooseRectangleColor() {
}

function addRectangle() {
    var black_rectangle=document.getElementById("black_rectangle");
    var new_rectangle=document.createElement("div");
    new_rectangle.className="small_rectangles";
    new_rectangle.style.backgroundColor=chooseRectangleColor();
    new_rectangle.innerHTML=initRectangles();
    black_rectangle.appendChild(new_rectangle);
}

function subtractRectangle() {
}

function switchRectanglesSongs() {
}

function populateSongsInList() {
}

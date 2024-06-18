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
        const element=curr_arr_count;
        curr_arr_count=(curr_arr_count+1)%array_name.length;
        return array_name[element];
}

function initSongs() {
    fetch("data/music.json")
          .then((response) =>response.json())
          .then((data) => {
  
            const songslist=document.getElementById("black_rectangle");
            const title=document.createElement("h1");
            title.innerHTML=data.category;
            songslist.appendChild(title);
            const list=document.createElement("ul");
         data.songs.forEach(song => {
        const li=document.createElement("li");
        li.innerHTML=`${song.id} - ${song.artist} - ${song.name}`;
        list.appendChild(li);});
        songslist.appendChild(list);

        });
}

function chooseRectangleColor() {
    
    const color = colors[curr_color_count];
    curr_color_count = (curr_color_count + 1) % colors.length; 
    return color;
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
    const black_rec = document.getElementById("black_rectangle");
    rectangles_count = rectangles_count - 1;
    if (black_rec.lastChild) {
        black_rec.removeChild(black_rec.lastChild);

    }
    if(!black_rec.lastChild){
        curr_arr_count=0;
        curr_color_count=0;
        rectangles_count=0;
    }
}

function switchRectanglesSongs() {
    const switch_to= document.getElementById("switch_btn");
    const songslist = document.getElementById("songs_list");
    var black_rec=document.getElementById("black_rectangle");
    if(switch_to.textContent=="Switch to songs"){
        rectangle=rectangles_count;
        switch_to.innerHTML="Switch to rectangles";
        document.getElementById("plus_btn").onclick=null;
        document.getElementById("minus_btn").onclick=null;
         while(black_rec.firstChild){
                    subtractRectangle();  

         }          
         curr_arr_count=0;
         curr_color_count=0;
        populateSongsInList();
    }else if(switch_to.textContent=="Switch to rectangles") {
                 switch_to.innerHTML="Switch to songs"; 
                 document.getElementById("plus_btn").onclick=addRectangle;
                 document.getElementById("minus_btn").onclick=subtractRectangle;
                 black_rec.innerHTML = "";
                 for(let i=0;i<rectangle;i++){
                    addRectangle();
                }

               }
}

function populateSongsInList() {
   
        initSongs();
    
}

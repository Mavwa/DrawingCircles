var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d")
var color = "red"
var mouse_event = ""
canvas.addEventListener("mousedown",click);
function click(e){
    mouse_event = "mousedown"
    console.log(mouse_event)
    color= document.getElementById("c").value;
}
canvas.addEventListener("mouseup",up);
function up(e){
    mouse_event = "mouseup"
    console.log(mouse_event);

}
canvas.addEventListener("mouseleave",leave);
function leave(e){
    mouse_event = "mouseleave"
    console.log(mouse_event)
}

var lastx,lasty;
canvas.addEventListener("mousemove",move);
function move(e){
    
    currentx = e.clientX-canvas.offsetLeft
    currenty = e.clientY-canvas.offsetTop
    if (mouse_event == "mousedown"){
        ctx.beginPath()
        ctx.strokeStyle = color
        ctx.lineWidth = 5
       
        ctx.arc(currentx,currenty,20,0,2 * Math.PI)
        ctx.stroke()

    }
    lastx = currentx
    lasty = currenty;
}




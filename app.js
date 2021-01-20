const canvas = document.getElementById("jsCanvas");

let painting = false;

function stopPainting(){
    painting = false;
}


function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;

    console.log(x,y);
}

function onMouseDown(event){
    painting = true;
    console.log(event);
}

function onMouseUp(event){
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}
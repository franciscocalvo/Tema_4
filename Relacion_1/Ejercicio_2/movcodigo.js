function movimiento(e){
    var x = e.clientX;
    var y = e.clientY;
    var coor = "Cord X:" + x + " Cord Y: " + y;
    document.getElementById("Prueba").innerHTML=coor;
    
}

document.onmousemove = function() {movimiento(event)};
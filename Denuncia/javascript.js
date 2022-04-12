
var c = 0;
var morti=0;
function move() {
    c=0;
    var elem = document.getElementById("myBar");
    var width = 0;
    var id = setInterval(frame, 400);
    function frame() {
        document.getElementById("cont").innerHTML = c;
        document.getElementById("contmorti").innerHTML = morti;
        c = c + 1;
        document.getElementById("cont");
        document.getElementById("contmorti");
        if (width == 100) {
            morti++;
        clearInterval(id);
        move();
        } else {
         width++;
         elem.style.width = width + "%";
        }
    }
}




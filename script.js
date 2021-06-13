
var colorGrid = [
    [], [], [], [], []
]



var colorArr = ["#BB0000", "#BB0000", "#BB0000", "#BB0000", "#98F5FF", "#98F5FF", "#98F5FF", "#98F5FF", "#F3FF00", "#F3FF00", "#F3FF00", "#F3FF00", "#0CC800", "#0CC800", "#0CC800", "#0CC800", "#C700C1", "#C700C1", "#C700C1", "#C700C1", "#390000", "#390000", "#390000", "#390000"];
function randomColor() {
    for (var i = 1; i < 10; ++i) {
        var x = Math.floor(Math.random() * 24);
        document.getElementById(`tile${i}`).style.backgroundColor = colorArr[x];
    }
    
        for(var j=24; j>=0; j--){
            var x = Math.floor(Math.random() * j);
            document.getElementById(`btn${j}`).style.backgroundColor = colorArr[x];
            colorArr.splice(x,1);
        }

}

var count = 0;
function timer() {
    count += 1;
    document.getElementById('times').innerHTML = "Time: " + count;
}

document.getElementById("play").addEventListener("click", function () { setInterval(timer, 1000) });



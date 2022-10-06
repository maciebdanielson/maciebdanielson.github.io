document.getElementById("b1").addEventListener('click', onClick);
function onClick () {
    var a = Number(document.getElementById("input1").value);   
    var b = Number(document.getElementById("input2").value);
    var c = Number(document.getElementById("input3").value);
    var d = Number(document.getElementById("input4").value);
    var e = d-c;

var f;
 if (d<=c) {
    f=d*a;
} else {
    f=((e*b)+(c*a));
}
document.getElementById("output").innerHTML = f + " dollars.";
}
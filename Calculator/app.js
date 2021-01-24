
function add() {
    var a = document.getElementById("num1").value;
    var b = document.getElementById("num2").value;
    
    a = parseFloat(a);
    b = parseFloat(b);

    var c = (a + b);
    document.getElementById("data").innerHTML=c;


}


function sub() {
 var a =  document.getElementById("num1").value;
 var b =  document.getElementById("num2").value;

 a = parseInt(a);
 b = parseInt(b);

 var c = (a-b);

 document.getElementById("data").innerHTML=c;
    
}

function mul() {

    var a = document.getElementById("num1").value
    var b = document.getElementById("num2").value

    a = parseInt(a);
    b = parseInt(b);

    var c = (a*b);

    document.getElementById("data").innerHTML=c;
    
}


function div() {
        var a = document.getElementById("num1").value;
        var b = document.getElementById("num2").value;
        
        
        var c = (a/b);
        
        a = parseInt(a);
        b = parseInt(b);


        document.getElementById("data").innerHTML=c;
    }
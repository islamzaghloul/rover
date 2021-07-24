var x;
var y;
var heading;
var command = "";
function follow(){
         x = document.getElementById("x-axis").value;
         y = document.getElementById("y-axis").value;
          x=parseInt(x,10);
          y=parseInt(y,10);
             
         heading = document.getElementById("heading").value;
        command = document.getElementById("command").value;
        String(command);
        String(heading);
           alert("x value is " + x + y + heading + command);    
             console.log("heaaaaar");
    }      


const addx = {
    add:function movaddx() {
"use strict";
x = x + 5;
 alert("jkwrnre value is " + x );
    
  
}
}

const addy ={
add:function movaddy() {

y = y + 5;
//     /alert("y value is " + "yes" );
}
    
}

class moving
{
    movfor (head){
        head.add();
        
    }
}

const move = new moving();
const xaxis = new addx();
const yaxis = new addy();
move.movfor(xaxis);
move.movfor(yaxis);
//onst westmove = new movewest ();
//const mov = new moving ();
//const package = {direction: "east", weight:1.5};
//mov.setdire(estmove);
//console.log (mov.calculate(package));
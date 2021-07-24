
var x;
var y;
var heading;
var command = "";
const obstx = [1,3,7];
const obsty = [4,5,4];

function follow()
{
         x = document.getElementById("x-axis").value;
         y = document.getElementById("y-axis").value;
          x=parseInt(x,10);
          y=parseInt(y,10);
         //parsing here as it act as a string before parsing    
         heading = document.getElementById("heading").value;
        command = document.getElementById("command").value;
        String(command);
        String(heading);
    //parsing here here as command.length doesnot work without it 
}       

function movaddx() {
x = x + 1;
}
function movaddy() {
y = y + 1;     
}

function movsubx() {
x = x - 1;
}
function movsuby() {
y = y - 1;
}
             


var fowordmov = {
east: movaddx,
north: movaddy,
west:movsubx,
south: movsuby
};


var backwordmov = {
east:movsubx,//movsubx
north: movsuby, 
west: movaddx,
south: movaddy};



var rotleftdirc = {
"east" : "north",
"north": "west",
"west" : "south",
"south" : "east"};

var rotrightdirc = { 
"east" : "south",
"south": "west", 
"west": "north",
"north": "west"};
//F -> Move forward on current heading
//B -> Move backwards on current heading
//L -> Rotate left by 90 degrees
//R -> Rotate right by 90 degrees
function forword() {
   switch (heading)
    {
    case "east": {
        fowordmov.east();
        break;
    }
    case 'west' : {
       fowordmov.west();
        break;
        
    }
    case 'north' : {
        fowordmov.north();
        break;
    }
    case  'south' : {
        fowordmov.south();
        break;
    }
        
        
    }
}
function bacword()
{
    switch (heading)
    {
    case 'east': {
        backwordmov.east();
        break;
    }
    case 'west' : {
        backwordmov.west ();
        break;
        
    }
    case 'north' : {
        backwordmov.north();
        break;
    }
    case  'south' : {
        backwordmov.south();
    }
        
        
    }
}
function rotateleft()
{
  
     heading=rotleftdirc[heading];
    
}
function rotateright()
{
    heading=rotrightdirc[heading];
       
}
var excutecommand = {
F:forword,
B:bacword,
L:rotateleft,
R:rotateright };


function end (){

     follow();
for(let z= 0 ;command.length >z ; z++)
{ 

var func = command[z];
var xper = x;
var yper = y;
var ber = false;
 switch (func)
     {
         case 'F' :
             {
                 excutecommand.F();
                 break;
             }
         case 'B' :
            {
             excutecommand.B();
                break;
            }
         case 'L'  :
             {
                 excutecommand.L();
                 break;
             }
         case 'R' :
             {
                 excutecommand.R();
                 break;
             }
             
     }

           /*for(let i = 0 ;obstx.length > i ;i++)
            {
            if(obstx[i] == x || obsty[i] == y)
            {
                x = xper;
                y = yper;
                z = command.length;
                ber=true;
                break;
                alert("stopped");
            }*/
        
         //   }//scoop of sec loop
   // if(ber){break;}
    
//}
   

}//scoop of first loop
var finalrecord = "["+ x.toString() + "," + y.toString() + "]," + heading ; 
   alert(finalrecord);
}//scoop of function end


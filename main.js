
var last_x, last_y;

var new_height=screen.height-300;
var new_width=screen.width-70;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

    if(screen.width < 992){
        document.body.style.overflow="hidden";
        document.getElementById("myCanvas").width=new_width;
        document.getElementById("myCanvas").height=new_height;

    }

    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)

    {
        console.log("touchstart");
        last_x=e.touches[0].clientX-canvas.offsetLeft;
        last_y=e.touches[0].clientY-canvas.offsetTop;
        //Addictonal Activity start
        //color = document.getElementById("color").value;
       // width_of_line = document.getElementById("width_of_line").value;
        //Addictonal Activity ends

    
    }

    
    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {

         current_x = e.touches[0].clientX - canvas.offsetLeft;
         current_y = e.touches[0].clientY - canvas.offsetTop;

        
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_x + "y = " + last_y);
        ctx.moveTo(last_x, last_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_x + "y = " + current_y);
        ctx.lineTo(current_x, current_y);
        ctx.stroke();
        

        last_x = current_x; 
        last_y = current_y;
    }


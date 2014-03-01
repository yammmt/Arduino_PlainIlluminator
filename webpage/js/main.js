var DevicePort = "COM26";

var illumi = function() {
    //alert("loop now");

    if(document.getElementById) {
        //var arduino = document.arduino;
        //var reading = arduino.analogRead(0);
        var reading = Math.floor(Math.random()*500);
        var voltage = (reading*5000)/1024;
        var microamp = (voltage*1000)/1000;
        var lx = microamp/(290/100);
                
        document.getElementById("print_lx").innerHTML = lx.toFixed(3) + " [lx]<br>"; 
        
        if(lx>1500) {
            document.getElementById("print_status").innerHTML = "<br>too bright! lol<br>"; 
        }
        else if(lx>750) {
            document.getElementById("print_status").innerHTML = "<br>like an office.<br>";
        }
        else if(lx>300) {
            document.getElementById("print_status").innerHTML = "<br>like a PC room.<br>"; 
        }
        else if(lx>150) {
            document.getElementById("print_status").innerHTML = "<br>like an elevator.<br>";
        }
        else if(lx>75) {
            document.getElementById("print_status").innerHTML = "<br>like a warehouse.<br>";
        }
        else {
            document.getElementById("print_status").innerHTML = "<br>too gloomy! ><<br>";
        }

        setTimeout(illumi, 1000);
    }
    else {
        alert("your Firefox MUST be updated!");
    }
}


$(document).ready(function() {
            
    if(document.arduino) {
        /*
        // デバッグの為に一時的にフリーパスに
        var arduino = document.arduino;
        
        try { 
            arduino.open(DevicePort); 
        } catch(e) { 
            alert('WRONG devise port!'); 
        };

        arduino.pinMode(0, false); // true=output, false=input
        */        
        illumi();
    }
    else {
        alert("arduino.js hasn't been installed!");
    }
            
});
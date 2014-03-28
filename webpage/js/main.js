var DevicePort = "COM4";

var illumi = function() {

    if(document.getElementById) {
        var arduino = document.arduino;
        var reading = arduino.analogRead(0);
        var voltage = (reading*5000)/1024;
        var microamp = (voltage*1000)/1000;
        var lx = microamp/(290/100);
                
        document.getElementById("print_lx").innerHTML = lx.toFixed(3) + " [lx]<br>"; 

        if(lx>1100) {
            document.getElementById("print_status").innerHTML = "<br>too bright to measure. It already reached its limits.<br>"; 
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
};

function setup() {
    if(document.arduino) {
        var arduino = document.arduino;
        try{
	        arduino.open(DevicePort);
            arduino.pinMode(0, false);
	        illumi();
        } catch(e) {
	        alert("Connection failed!");
        }
    }
    else {
	    alert("NO arduino.js!");
    }
};

$(function () {
    setup();
});

function changeDevicePort(){
    DevicePort = $('#devPort').val();
    setup();
};
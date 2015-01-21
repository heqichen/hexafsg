var fsp = require("./hexafsp");
var serialport = require("serialport");
var SerialPort = serialport.SerialPort;

fsp.rotatePlatform(10, 0, 0);
console.log(fsp.getServosAngle());

var sp = new SerialPort("/dev/ttyUSB0", {baudrate:9600}, false);

var ddd = function() {
	sp.write("60,60,60,60,60,60,360\n");
};

sp.on("open", function(){
	console.log(sp.path + " opened");

	sp.write("\n\n");



	setTimeout(ddd, 2000);

});
sp.open();


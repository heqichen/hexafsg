"use strict"

var Point3D = require("./point-3d");
var Algorithm = require("./algorithm");

var ARM_LENGTH = 22.3;
var ROD_LENGTH = 109.90;

var PI = 3.1415926535897932384626433832795;
var DEG_TO_RAD = PI / 180.0;

var MOVING_POINT_OFFSET_X = 6.055;
var MOVING_POINT_OFFSET_Y = 68.49;
var MOVING_POINT_OFFSET_Z = 99.3160892976448;
var SERVO_OFFSET_X = 9.777;
var SERVO_OFFSET_Y = 79.840;


//setup Moving Points
var mp0 = new Point3D(-MOVING_POINT_OFFSET_X, MOVING_POINT_OFFSET_Y, MOVING_POINT_OFFSET_Z);
var mp1 = new Point3D(MOVING_POINT_OFFSET_X, MOVING_POINT_OFFSET_Y, MOVING_POINT_OFFSET_Z).rotate(0, 0, 120);
var mp2 = new Point3D(-MOVING_POINT_OFFSET_X, MOVING_POINT_OFFSET_Y, MOVING_POINT_OFFSET_Z).rotate(0, 0, 120);
var mp3 = new Point3D(MOVING_POINT_OFFSET_X, MOVING_POINT_OFFSET_Y, MOVING_POINT_OFFSET_Z).rotate(0, 0, 240);
var mp4 = new Point3D(-MOVING_POINT_OFFSET_X, MOVING_POINT_OFFSET_Y, MOVING_POINT_OFFSET_Z).rotate(0, 0, 240);
var mp5 = new Point3D(MOVING_POINT_OFFSET_X, MOVING_POINT_OFFSET_Y, MOVING_POINT_OFFSET_Z).rotate(0, 0, 0);

//setup Servo Axis
var sa0 = new Point3D(SERVO_OFFSET_X, SERVO_OFFSET_Y, 0).rotate(0, 0, 60);
var sa1 = new Point3D(-SERVO_OFFSET_X, SERVO_OFFSET_Y, 0).rotate(0, 0, 60);
var sa2 = new Point3D(SERVO_OFFSET_X, SERVO_OFFSET_Y, 0).rotate(0, 0, 180);
var sa3 = new Point3D(-SERVO_OFFSET_X, SERVO_OFFSET_Y, 0).rotate(0, 0, 180);
var sa4 = new Point3D(SERVO_OFFSET_X, SERVO_OFFSET_Y, 0).rotate(0, 0, 300);
var sa5 = new Point3D(-SERVO_OFFSET_X, SERVO_OFFSET_Y, 0).rotate(0, 0, 300);

var SA = new Point3D(SERVO_OFFSET_X, SERVO_OFFSET_Y, 0);

console.log(mp0.toString());
console.log(mp1.toString());
console.log(mp2.toString());
console.log(mp3.toString());
console.log(mp4.toString());
console.log(mp5.toString());

console.log(sa0.toString());
console.log(sa1.toString());
console.log(sa2.toString());
console.log(sa3.toString());
console.log(sa4.toString());
console.log(sa5.toString());


var hexafspHelper = {
	tempP: new Point3D(),
	DEFAULT_SERVO0: new Point3D(SERVO_OFFSET_X + ARM_LENGTH, SERVO_OFFSET_Y, 0).rotate(0, 0, 60), 
	calculateRodLength: function(height) {
		return hexafspHelper.tempP.moveTo(-MOVING_POINT_OFFSET_X, MOVING_POINT_OFFSET_Y, height).diff(hexafspHelper.DEFAULT_SERVO0);
	},

	calculateDefaultHeight: function() {
		return Algorithm.binarySearch(0, 200, hexafspHelper.calculateRodLength, ROD_LENGTH);
	}
};

var angle = 0;
angle *= DEG_TO_RAD;
sa0.moveTo(SA).translate(ARM_LENGTH*Math.cos(angle), 0, ARM_LENGTH*Math.sin(angle)).rotate(0, 0, 60);
console.log(sa0.toString());


"use strict"

var Point3D = require("./point-3d");
var Algorithm = require("./algorithm");

var ARM_LENGTH = 22.3;
var ROD_LENGTH = 109.00;



//setup Moving Points
var mp0 = new Point3D(-6.055, 69.82, 0);
var mp1 = new Point3D(6.055, 69.82, 0).rotate(0, 0, 120);
var mp2 = new Point3D(-6.055, 69.82, 0).rotate(0, 0, 120);
var mp3 = new Point3D(6.055, 69.82, 0).rotate(0, 0, 240);
var mp4 = new Point3D(-6.055, 69.82, 0).rotate(0, 0, 240);
var mp5 = new Point3D(6.055, 69.82, 0).rotate(0, 0, 0);

//setup Servo Axis
var sa0 = new Point3D(9.777, 79.840, 0).rotate(0, 0, 60);
var sa1 = new Point3D(-9.777, 79.840, 0).rotate(0, 0, 60);
var sa2 = new Point3D(9.777, 79.840, 0).rotate(0, 0, 180);
var sa3 = new Point3D(-9.777, 79.840, 0).rotate(0, 0, 180);
var sa4 = new Point3D(9.777, 79.840, 0).rotate(0, 0, 300);
var sa5 = new Point3D(-9.777, 79.840, 0).rotate(0, 0, 300);

var SA = new Point3D(9.777, 79.840, 0);

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


var foo = function(val) {
	return val;
}


var result = Algorithm.binarySearch(0, 10, foo, 2.22);
console.log("result is : " + result);

result = Algorithm.binarySearch(5, 10, foo, 2.22);
console.log("result is : " + result);

var p = SA.clone();
p.translate(1,2,2);
console.log(SA.toString());
console.log(p.toString());
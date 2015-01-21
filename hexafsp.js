"use strict"

var Point3D = require("./point-3d");

//setup Moving Points
var mp0 = new Point3D(-6.055, 69.82, 0);
var mp1 = new Point3D(6.055, 69.82, 0).rotate(0, 0, 120);
var mp2 = new Point3D(-6.055, 69.82, 0).rotate(0, 0, 120);
var mp3 = new Point3D(6.055, 69.82, 0).rotate(0, 0, 240);
var mp4 = new Point3D(-6.055, 69.82, 0).rotate(0, 0, 240);
var mp5 = new Point3D(6.055, 69.82, 0).rotate(0, 0, 0);

console.log(mp0.toString());
console.log(mp1.toString());
console.log(mp2.toString());
console.log(mp3.toString());
console.log(mp4.toString());
console.log(mp5.toString());

"use strict"

var Point3D = require("./point-3d");

var p = new Point3D(1, 2, 3);



console.log(p.toString());

console.log(p.translate(1, 2, 3).toString());

console.log(p.translate(p).toString());

var p2 = new Point3D(1, 2, 3);
p2.rotate(90, 0, 0).rotate(45, 0, 0);

console.log(p2.toString());

var p3 = new Point3D(1, 2, 3);
console.log(p3.toString());
console.log(p3.rotate(0, 90, 0).toString());
console.log(p3.rotate(0, -180, 0).toString());
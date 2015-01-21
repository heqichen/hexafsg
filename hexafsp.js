"use strict"

var Point3D = require("./point-3d");

var p = new Point3D(1, 2, 3);



console.log(p.toString());

console.log(p.translate(1, 2, 3).toString());

console.log(p.translate(p).toString());
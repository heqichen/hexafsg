"use strict"

var PI = 3.1415926535897932384626433832795;

var Point3D = function(sx, sy, sz) {

var self = this;

this.x = 0.0;
this.y = 0.0;
this.z = 0.0;

if (sx) {
	self.x = sx;
}

if (sy) {
	self.y = sy;
}

if (sz) {
	self.z = sz;
}

var translateDimension = function(px, py, pz) {
	self.x += px;
	self.y += py;
	self.z += pz;
}

this.toString = function() {
	return "(" + self.x + ", " + self.y + ", " + self.z + ")";
};

this.translate = function(p1, p2, p3) {
	if (p2 === undefined && p3 === undefined) {
		translateDimension(p1.x, p1.y, p1.z);
	} else {
		translateDimension(p1, p2, p3);
	}

	return self;
};

var rotateX = function(angle) {
	angle = angle * PI / 180.0;
	var temp = self.y;
	self.y = self.y * Math.cos(angle) - self.z*Math.sin(angle);
	self.z = temp * Math.sin(angle) + self.z * Math.cos(angle);
}

this.rotate = function (p1, p2, p3) {
	var angleX = 0;
	var angleY = 0;
	var angleZ = 0;
	if (p2===undefined && p3===undefined) {
		angleX = p1.x;
		angleY = p1.y;
		angleZ = p1.z
	} else {
		angleX = p1;
		angleY = p2;
		angleZ = p3;
	}

	rotateX(angleX);

	return self;
};


};

module.exports = Point3D;
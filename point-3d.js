"use strict"

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
		return self;
	} else {
		translateDimension(p1, p2, p3);
		return self;
	}
}


};

module.exports = Point3D;
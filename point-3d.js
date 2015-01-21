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


this.toString = function() {
	return "(" + self.x + ", " + self.y + ", " + self.z + ")";
};


};

module.exports = Point3D;
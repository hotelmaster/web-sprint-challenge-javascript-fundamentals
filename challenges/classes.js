// 1. Copy and paste your prototype in here and refactor into class syntax.

// convert to class notation: cuboidMaker ctor function, l,w,h properties as object param, volume and SA methods
class CuboidMaker {
    // constructor within class
    constructor(attrs) {
        // implicit binding
        this.length = attrs.length;
        this.width = attrs.width;
        this.height = attrs.height;
    }
    // volume method
    volume(this.length, this.width, this.height) {
        return this.length * this.width * this.height;
    }
    // surface area method
    surfaceArea(this.length, this.width, this.height) {
        return 2 * (this.length * this.width + this.height * this.length + this.width * this.height);
    }
}

// new binding to make cuboid with any measures
const cuboid = new CuboidMaker({ length: 4, width: 5, height: 5 });

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create 
// those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
    // child constructor here
    constructor(babyAttrs) {
        // only need the parent properties of l, w, h
        super(babyAttrs);
    }
    // these methods will be for a cube now
    // you really only need one because the l = w = h
    volume(this.length) {
        // v = s^3 using Math.pow() method
        return Math.pow(this.length, 3);
    }
    surfaceArea(this.length) {
        // SA = 6*(area of one face) = 6 * s^2
        return 6*Math.pow(this.length, 2);
    }
}
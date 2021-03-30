class Courses {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getName() {
        return this.name;
    }
}

var phpCourses = new Courses('PHP', 2010);
var javaCourses = new Courses('Java', 3000);
console.log(`Khóa học ${phpCourses.name} có giá ${phpCourses.price}`);
console.log(`Khóa học ${javaCourses.name} có giá ${javaCourses.price}`);


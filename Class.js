// Tính độ tuổi cho xe
class Car{
    constructor(name,year){
        this.name = name;
        this.year = year;
    }
    age() {
        var date = new Date();
        return date.getFullYear() - this.year;
    }
}

var myCar = new Car('BMW', 2010);
document.getElementById('class').innerHTML = myCar.name+ " có tuổi thọ là: "+ myCar.age() + " tuổi";
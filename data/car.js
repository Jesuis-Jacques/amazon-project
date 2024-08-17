class Car {
  brand;
  model;
  speed = 0;
  isTrunkOpen = true || false;

  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  displayInfo() {
    console.log(`${this.brand} ${this.model}, Speed: ${this.speed} km/h`);
  }

  go() {
    this.speed += 5;
    if (this.speed > 200) {
      this.speed = 200;
    };

    if (this.isTrunkOpen === true) {
      this.speed += 0;
    };
  }

  brake() {
    this.speed -= 5;
    if (this.speed < 0) {
      this.speed = 0;
    };
  }

  openTrunk() {
    this.isTrunkOpen = true;
    if (speed >= 0) {
      !openTrunk();
    };
  }

  closeTrunk() {
    this.isTrunkOpen = false;
  }
}

class RaceCar extends Car {
  acceleration;

  
}

const car = new Car('Toyota', 'Corolla');
const car2 = new Car('Tesla', 'Model 3');

car.go();
car2.brake();

car.displayInfo();
car2.displayInfo();

car.go();
car2.go();

car.displayInfo();
car2.displayInfo();

car.go();
car2.go();

car.displayInfo();
car2.displayInfo();

car.brake();
car2.go();

car.displayInfo();
car2.displayInfo();
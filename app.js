class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  honk() {
    return "Beep";
  }

  toString() {
    return `The vehicle is a ${this.make} ${this.model} from ${this.year}`;
  }
}

class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 4;
  }
}

class Motorcycle extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 2;
  }
  revEngine() {
    return "VROOM";
  }
}

class Garage {
  constructor(capacity) {
    this.vehicles = [];
    this.capacity = capacity;
  }
  add(vehicle) {
    if (!(vehicle instanceof Vehicle)) {
      return "only vehicles are allowed in here!";
    }
    if (this.vehicles.length === 2) {
      return "sorry, we're full!";
    } else {
      this.vehicles.push(vehicle);
      return "Vehicle added!";
    }
  }
}

let garage = new Garage(2);
garage.add("Taco");
garage.add(new Car("Hyundai", "Elantra", 2015));
garage.add(new Car("Honda", "civic", 2013));
garage.add(new Car("Toyota", "Corolla", 2010));

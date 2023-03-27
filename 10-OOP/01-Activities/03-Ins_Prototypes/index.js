// Prototype methods on constructor function

function Dog(name, age, breed) {
  this.name = name;
  this.age = age;
  this.breed = breed;
}

Dog.prototype.nap = function () {
  console.log(`${this.name} is ${this.age} years old. ${this.name} is a ${this.breed} but he is sleeping`);
};

const dog = new Dog('Rex', 2, 'Bulldog');

dog.nap();

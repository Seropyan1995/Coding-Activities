 /**
 *! Inheritance
 *! The extends keyword is used in class declarations or class expressions to create a class as a child of another constructor (either a class or a function).
 */

class Animal {
    constructor(name) {
      this.name = name;
    }

    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }

  class Dog extends Animal {
    constructor(name) {
      super(name); // call the super class constructor and pass in the name parameter
    }

    speak() {
      console.log(`${this.name} barks.`);
    }
  }

  const d = new Dog("Mitzie");
  d.speak(); // Mitzie barks.
 /**
 *! If there is a constructor present in the subclass, it needs to first call super() before using this. The super keyword can also be used to call corresponding methods of super class.
 */

 class Cat {
    constructor(name) {
      this.name = name;
    }

    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }

  class Lion extends Cat {
    speak() {
      super.speak();
      console.log(`${this.name} roars.`);
    }
  }

  const l = new Lion("Fuzzy");
  l.speak();
  // Fuzzy makes a noise.
  // Fuzzy roars.

  /**
 *! Binding this with instance and static methods
 *! When a static or instance method is called without a value for this, such as by assigning the method to a variable and then calling it, the this value will be undefined inside the method. This behavior is the same even if the "use strict" directive isn't present, because code within the class body is always executed in strict mode.
 */

 class Animal {
    speak() {
      return this;
    }
    static eat() {
      return this;
    }
  }

  const obj = new Animal();
  obj.speak(); // the Animal object
  const speak = obj.speak;
  speak(); // undefined

  Animal.eat(); // class Animal
  const eat = Animal.eat;
  eat(); // undefined

/**
 *! If we rewrite the above using traditional function-based syntax in non–strict mode, then this method calls are automatically bound to globalThis. In strict mode, the value of this remains as undefined
 */
 function Animal() {}

 Animal.prototype.speak = function () {
   return this;
 };

 Animal.eat = function () {
   return this;
 };

 const obj = new Animal();
 const speak = obj.speak;
 speak(); // global object (in non–strict mode)

 const eat = Animal.eat;
 eat(); // global object (in non-strict mode)

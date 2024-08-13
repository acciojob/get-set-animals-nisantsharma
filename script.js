// Animal class definition
class Animal {
  constructor(species) {
    this._species = species;
  }

  // Getter for species
  get species() {
    return this._species;
  }

  // Method to log the sound an animal makes
  makeSound() {
    console.log(`The ${this.species} makes a sound`);
  }
}

// Dog class definition, extending Animal
class Dog extends Animal {
  // Method to log the sound a dog makes
  bark() {
    console.log("woof");
  }
}

// Cat class definition, extending Animal
class Cat extends Animal {
  // Method to log the sound a cat makes
  purr() {
    console.log("purr");
  }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;

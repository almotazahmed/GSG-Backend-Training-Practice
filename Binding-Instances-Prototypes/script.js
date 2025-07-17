// Binding Instances and Prototypes in JavaScript
// This script demonstrates how JavaScript handles instances, prototypes, and method binding.
// It includes examples of creating instances, using prototypes, and binding methods to instances.
// Example of creating an object with a method that uses 'this' to refer to the instance
// and how to bind methods to instances to ensure the correct context is maintained.

function createAnimal() {
  return {
    speak() {
      return "Some sound";
    },
  };
}

function createDog() {
  const animal = createAnimal();
  console.log(animal);
  return {
    ...animal,
    speak() {
      console.log(animal);
      return "Woof!";
    },
  };
}

let dog = createDog(); // Create a dog instance
console.log(dog.speak()); // Outputs: Woof!
console.log(dog.animal); // This will be undefined since 'animal' is not a property of 'dog'\\

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a sound`; // 'this' will refer to the calling instance
  }

  talk = () => {
    return `${this.name} talks`; // Arrow function keeps 'this' context
  };
}

const dog2 = new Animal("Rex");
const cat = new Animal("Whiskers");

console.log(dog2); // Outputs: Animal { name: 'Rex' }
console.log(Object.getPrototypeOf(dog2)); // Outputs: Animal.prototype
console.log(Object.getPrototypeOf(Animal)); // Outputs: Animal.prototype
console.log(Animal.prototype); // Outputs: Animal.prototype
console.log(dog2.__proto__); // Outputs: Animal.prototype

let speakInstance = dog2.speak;
console.log(speakInstance.call(dog2));
let talkInstance = dog2.talk;
console.log("hhhh " + talkInstance());
console.log(talkInstance.call(dog2)); // Outputs: Rex talks
// console.log(speakInstance()); // Outputs: undefined makes a sound, since 'this' is not bound to 'dog2'
console.log(talkInstance()); // Outputs: Rex talks, since 'this' is bound correctly in the arrow function
// console.log(Animal.prototype.talk.call(dog2)); // Outputs: error
console.log(Animal.prototype.speak.call(dog2)); // Outputs: Rex makes a sound, since 'this' is bound correctly in the method
console.log(dog2);

import { Animal } from "./Animal";
import { Dog } from "./Dog";
import { Lion } from "./Lion";

let animal1 = new Dog();
console.log(animal1);
animal1.makeSound();

let animal2 = new Lion();
console.log(animal2);
animal2.makeSound();


import { Shape } from "./Shape";
import { Rectangle } from "./Rectangle";
import { Square } from "./Square";

let rectangle:Shape = new Rectangle(10,20);
let square:Shape = new Square(10);

let shapes:Shape[] = [];
shapes.push(rectangle);
shapes.push(square);

for(let shape of shapes){
    console.log(shape.calculateArea());
}
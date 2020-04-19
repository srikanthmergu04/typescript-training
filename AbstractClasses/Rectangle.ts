import { Shape } from "./Shape";

export class Rectangle extends Shape{

    constructor(private width:number,private length:number){
        super();
    }

    calculateArea():number{
        return this.width*this.length;
    }
}
import { Coach } from "./Coach";

export class SwimmingCoach implements Coach{
    getDailyWorkOut():void{
        console.log('practice swimming....');
    }
}
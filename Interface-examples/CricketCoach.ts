import { Coach } from "./Coach";

export class CricketCoach implements Coach{
    getDailyWorkOut():void{
        console.log('practice batting...')
    }
}
import { Coach } from "./Coach";
import { SwimmingCoach } from "./SwimmingCoach";
import { CricketCoach } from "./CricketCoach";

let swimmingCoach:Coach = new SwimmingCoach();

let cricketCoach:Coach = new CricketCoach();

let coaches:Coach[] = [];

coaches.push(swimmingCoach);
coaches.push(cricketCoach);

for(let Coach of coaches){
    Coach.getDailyWorkOut();
}


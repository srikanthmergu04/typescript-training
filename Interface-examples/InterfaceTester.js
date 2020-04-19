"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SwimmingCoach_1 = require("./SwimmingCoach");
var CricketCoach_1 = require("./CricketCoach");
var swimmingCoach = new SwimmingCoach_1.SwimmingCoach();
var cricketCoach = new CricketCoach_1.CricketCoach();
var coaches = [];
coaches.push(swimmingCoach);
coaches.push(cricketCoach);
for (var _i = 0, coaches_1 = coaches; _i < coaches_1.length; _i++) {
    var Coach = coaches_1[_i];
    Coach.getDailyWorkOut();
}

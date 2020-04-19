let numbers:number[] = [1,2,3,4,5];

for(let i = 0;i < numbers.length ; i++){
    console.log(numbers[i]);
}

let sports:string[] = ['cricket','volleyball','basketball','kabaddi'];

for(let sport of sports){
    console.log(sport);
}

// Arrays in TypeScript are Dynamic
sports.push('football');
sports.push('hockey');

console.log('After Adding Sports Dynamically');

for(let sport of sports){
    console.log(sport);
}

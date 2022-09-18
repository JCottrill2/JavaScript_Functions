console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count){
    if (count <0){
        count = count * -1;
    }
    for (let i = 0; i<= count; i++){
        if (i % 2 != 0){
            console.log(i);
        }
    }
}
printOdds(-20);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(age, userName){
    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry, ${userName}, but you need to be 16 to drive`;
    if (age >= 16) {
        console.log(aboveSixteen);
    }else {
        console.log(belowSixteen);
    }

}
checkAge(33, "Jessica Cottrill")

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function whichQuadrant(x, y) {
    if (x > 0 && y >0){
    console.log(`${x}, ${y} is in Alpha Quadrant`);
}else if (x < 0 && y > 0) {
    console.log(`${x}, ${y} is in Beta Quadrant`); 
}else if (x < 0 && y < 0) {
    console.log(`${x}, ${y} is in Delta Quadrant`);
}else if (x > 0 && y< 0){
    console.log(`${x}, ${y} is in Gamma Quadrant`);
}else if (x == 00 && y!= 0){
    console.log(`${x}, ${y} is on the x axis`);
}else if (x != 00 && y== 0){
    console.log(`${x}, ${y} is on the y axis`);
}else{
    (`${x}, ${y} is on the x origin`);
}
}
whichQuadrant(0, 2);
whichQuadrant(1, 2);
whichQuadrant(-6, 18);
whichQuadrant(0, 0);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
function typeOfTriangle(side1, side2, side3) {
    let isValid = false;
    if (side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2) {
        isValid= true;
    }
    if (isValid){
        if(side1 == side2 && side2 == side3) {
            console.log(`Sides ${side1}, ${side2}, 
            ${side3} form and equilateral triangle`);
        }else if (side1 == side2 || side2 == side3){
            console.log(`Sides ${side1}, ${side2}, 
            ${side3} form and isosceles triangle`);
        } else {
            console.log("Sorry, not a valid triangle.");
        }
        }
}
typeOfTriangle(2, 2, 2);
typeOfTriangle(1, 2, 2);
typeOfTriangle(1, 1, 2);
typeOfTriangle(2, 3, 4);


// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
function dataPlan(planLimit, day, usage) {
    let daysLeftOnPlan = 30 - day;
    let averageDailyUse = usage/ day;
    let suggestedAverageUse = planLimit / 30;
    let howMuchDataLeft = planLimit - usage;
    let projectedUsage = Math.abs(planLimit - (averageDailyUse * 30));
    let suggestedUsage = howMuchDataLeft / daysLeftOnPlan;

    if (averageDailyUse > suggestedAverageUse) {
        console.log(`${day} day(s) used, ${daysLeftOnPlan} day(s) remaining
        Average daily use: ${averageDailyUse.toFixed(2)} GB/ day.
        You are EXCEEDING your average daily use (${suggestedAverageUse.toFixed(2)} GB/ day),
        continuing this high usage, you'll exceed your data plan by
        ${projectedUsage} GB.
        To stay below your data plan, use no more than ${suggestedUsage.toFixed(2)} GB/ day.`);
    }
    else if (averageDailyUse < suggestedAverageUse) {
        console.log (`${day} days used, ${daysLeftOnPlan} days remaining
        Average daily use: ${averageDailyUse.toFixed(2)}
        You are UNDER your average daily use (${averageDailyUse.toFixed(2)} GB/day),
        continuing this usage, you'll be under your data plan by
        ${projectedUsage} GB.`);
    }
    else {
        console.log(`Your average daily use is ${averageDailyUse.toFixed(2)} GB/ day. You
        are on target with your plan.`);
    }

}
dataPlan(50, 12, 25);
dataPlan(20, 30, 30);
dataPlan(15, 6, 3);


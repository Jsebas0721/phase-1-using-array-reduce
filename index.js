const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

let initValue = 0;
let totalBatteries = batteryBatches.reduce((element, currentValue) => element + currentValue, initValue);


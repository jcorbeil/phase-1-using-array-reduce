const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

function batteries(arr) {
  return arr.reduce((total, assembly) => total + assembly, 0);
}

const totalBatteries = batteries(batteryBatches);
console.log(totalBatteries); // Output: 31

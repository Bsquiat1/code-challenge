// Prompt user to input student mark
let studentMark = prompt("Enter student mark (0-100):");

// Convert input to a number
studentMark = Number(studentMark);

// Check if input is valid
if (isNaN(studentMark) || studentMark < 0 || studentMark > 100) {
  console.log("Invalid input. Please enter a number between 0 and 100.");
} else {
  // Calculate grade based on input
  let grade;
  if (studentMark > 79) {
    grade = "A";
  } else if (studentMark >= 60) {
    grade = "B";
  } else if (studentMark >= 50) {
    grade = "C";
  } else if (studentMark >= 40) {
    grade = "D";
  } else {
    grade = "E";
  }

  // Output grade
  console.log(`Grade: ${grade}`);
}


// Prompt user to input car speed
let carSpeed = prompt("Enter car speed (km/h):");

// Convert input to a number
carSpeed = Number(carSpeed);

// Check if input is valid
if (isNaN(carSpeed) || carSpeed < 0) {
  console.log("Invalid input. Please enter a positive number.");
} else {
  // Calculate demerit points based on input
  let demeritPoints = 0;
  if (carSpeed <= 70) {
    console.log("Ok");
  } else {
    demeritPoints = Math.floor((carSpeed - 70) / 5);
    if (demeritPoints > 12) {
      console.log(`Points: ${demeritPoints}. License suspended.`);
    } else {
      console.log(`Points: ${demeritPoints}`);
    }
  }
}


// Define constants
const KRA_THRESHOLD = 24000;
const KRA_RATES = [0.1, 0.15, 0.2, 0.25, 0.3];
const NHIF_RATES = [150, 300, 400, 500, 600, 750];
const NSSF_RATE = 0.06;

// Get user inputs
let basicSalary = parseFloat(prompt("Enter your basic salary: "));
let benefits = parseFloat(prompt("Enter your benefits: "));

// Calculate gross salary
let grossSalary = basicSalary + benefits;

// Calculate payee (tax) based on KRA tax brackets
let payee = 0;
let taxableIncome = grossSalary - KRA_THRESHOLD;
if (taxableIncome > 0) {
  let bracket = Math.floor(taxableIncome / 40000);
  if (bracket >= KRA_RATES.length) {
    payee = 22400 + (taxableIncome - 160000) * KRA_RATES[KRA_RATES.length - 1];
  } else {
    payee = (taxableIncome - bracket * 40000) * KRA_RATES[bracket];
    for (let i = 0; i < bracket; i++) {
      payee += 4000 * KRA_RATES[i];
    }
  }
}

// Calculate NHIF deduction based on income brackets
let nhif = 0;
for (let i = 0; i < NHIF_RATES.length; i++) {
  if (grossSalary <= (i + 1) * 5000) {
    nhif = NHIF_RATES[i];
    break;
  }
}

// Calculate NSSF deduction
let nssf = grossSalary * NSSF_RATE;

// Calculate net salary
let netSalary = grossSalary - payee - nhif - nssf;

// Print results
console.log(`Gross Salary: ${grossSalary.toFixed(2)}`);
console.log(`PAYE (Tax): ${payee.toFixed(2)}`);
console.log(`NHIF Deduction: ${nhif.toFixed(2)}`);
console.log(`NSSF Deduction: ${nssf.toFixed(2)}`);
console.log(`Net Salary: ${netSalary.toFixed(2)}`);

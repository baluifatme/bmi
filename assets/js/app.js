"use strict";
function calculateBMI(event) {
  event.preventDefault();

  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;

  if (!weight || !height || weight <= 0 || height <= 0) {
    document.getElementById("message").innerHTML = "Please enter valid values!";
    return;
  }
  const bmi = (weight * 10000) / height ** 2;

  document.getElementById("heading").innerHTML = "YOUR BMI IS:";
  document.getElementById("bmi-output").innerHTML = bmi.toFixed(2);

  if (bmi < 18.5) {
    document.getElementById("message").innerHTML = "You are underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    document.getElementById("message").innerHTML = "You are healthy";
  } else {
    document.getElementById("message").innerHTML = "You are overweight";
  }
}
function clearoutput() {
  document.getElementById("heading").textContent = "";
  document.getElementById("bmi-output").textContent = "";
  document.getElementById("message").textContent = "";
}

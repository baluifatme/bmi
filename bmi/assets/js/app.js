function calculateBMI(event) {
  // خانوم طبری: این دستور جلوگیری میکنه از رفرش دوباره صفحه و قتی رفرش انجام نشود اطلاعات نتیجه باقی میماند
  event.preventDefault();

  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;

  if (!weight || !height || weight <= 0 || height <= 0) {
    document.getElementById("message").innerHTML = "Please enter valid values.";
    return;
  }

  let bmi = (weight / (height ** 2)) * 703;

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
const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');
const calculateBtn = document.getElementById('calculate-btn');
const resultDiv = document.getElementById('result');

calculateBtn.addEventListener('click', () => {
  const height = parseFloat(heightInput.value);
  const weight = parseFloat(weightInput.value);

  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    resultDiv.textContent = 'Please enter valid values for height and weight.';
    return;
  }

  const bmi = calculateBMI(height, weight);
  const bmiCategory = getBMICategory(bmi);

  resultDiv.textContent = `Your BMI is ${bmi.toFixed(2)}, which is ${bmiCategory}.`;
});

function calculateBMI(height, weight) {
  return weight / ((height / 100) ** 2); // Convert centimeters to meters by dividing by 100
}

function getBMICategory(bmi) {
  if (bmi < 18.5) {
    return 'Underweight';
  } else if (bmi < 25) {
    return 'Normal';
  } else if (bmi < 30) {
    return 'Overweight';
  } else {
    return 'Obese';
  }
}

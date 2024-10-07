const celcius = document.querySelector('#celius');
const kelvin = document.querySelector('#kelvin');
const farenheit = document.querySelector('#farenheit');

// Celsius to Fahrenheit and Kelvin
celcius.addEventListener('input', function() {
    let c = parseFloat(celcius.value);
    let f = (c * 9 / 5) + 32;
    let k = c + 273.15;
    farenheit.value = f;
    kelvin.value = k;
});

// Fahrenheit to Celsius and Kelvin
farenheit.addEventListener('input', function () {
    let f = parseFloat(farenheit.value);
    let c = (f - 32) * 5 / 9;  // Correct formula
    let k = c + 273.15;        // Kelvin from Celsius
    celcius.value = c;         // Assign c to celcius
    kelvin.value = k;
});

// Kelvin to Celsius and Fahrenheit
kelvin.addEventListener('input', function() {
    let k = parseFloat(kelvin.value);
    let c = k - 273.15;
    let f = (k - 273.15) * 9 / 5 + 32;
    celcius.value = c;
    farenheit.value = f;
});

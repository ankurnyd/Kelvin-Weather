const kelvin = 0;
//The forecast today is 293 Kelvin.
const celsius = kelvin - 273;
//converting Kelvin to Celsius by subtracting 273 from the kelvin variable. Storing it in celsius variable.
let fahrenheit = celsius * (9/5) +32;
//Use this equation to calculate Fahrenheit, then store the answer in a variable named fahrenheit Fahrenheit = Celsius * (9/5) + 32
fahrenheit = Math.floor(fahrenheit); //Using the .floor() method from the built-in Math object to round down the Fahrenheit temperature.
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
let newton = celsius * (33/100);
newton = Math.floor(newton); //Using console.log and string interpolation to log the temperature in newton to the console
console.log(`The temperature is ${newton} degrees Newton.`);

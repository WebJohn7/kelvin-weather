var kelvin = 293
// Weather forecast is 293 K

celsius = kelvin - 273
// Kelvin to celsius 

fahrenheit = celsius * (9/5) + 32
// Celsius to fahrenheit 

fahrenheit = Math.floor(fahrenheit);
/*When you convert from Celsius to Fahrenheit, you often get a decimal number.

Use the .floor() method from the built-in Math object to round down the Fahrenheit temperature. Save the result to the fahrenheit variable.*/

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
/*
By using variables, your program should work for any Kelvin temperature — just change the value of kelvin and run the program again.

What’s 0 Kelvin in Fahrenheit?*/

//Extra practice 
// Convert to Newton
let newton = celsius * (33 / 100);

// Round down
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`);

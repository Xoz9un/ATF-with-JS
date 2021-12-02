//Perform addition of various types
//(string + boolean, string + number,number + boolean)
console.log("4" + true, '3' + 4, 3 + !true )
console.log('4' + !!0, 'name' + 4, 3 + !false)

//Perform multiplication of various types
//(string * boolean, string * number, number * boolean)
console.log('Js' * false, 'str' * 4, 5 * true)
console.log('Js' * true, '4' * 4,5 * false )

// Perform division of various types
// (string/boolean, string/number, number/Boolean)
console.log("str" / false, "str2" / 4,5 / false)
console.log("str" / true, "10"/ 5, 5 / true)

//Perform explicit conversion (number, string, boolean)
number = ("30");
number = Number(number);
console.log(typeof number);

number2 = '30' / '5';
console.log(typeof number2)

number3 = true + false;
console.log(typeof number3);

string = (false);
string = String(string);
console.log(typeof string);

string2 = true + 'true';
console.log(typeof string2);

boolean = 321;
boolean = Boolean('23');
console.log(typeof boolean);
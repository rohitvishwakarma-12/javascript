const name = "rohit"
const repoCount = 50

// console.log(name + repoCount + "value");

console.log(`Hello my name is ${name} and MY repo count is ${repoCount}`);

const gameName = new String('rohit-hc-com')

// console.log(gameName[2]);
// console.log(gameName.__proto__);

//*****for string length and size conversion */
// console.log(gameName.length);
// console.log(gameName.toUpperCase());

/********to locate the character in string and their index value */

console.log(gameName.charAt(4));
console.log(gameName.indexOf('t'));

//********splitting of string****** */
const newString = gameName.substring(0,1)
console.log(newString);

const anotherString = gameName.slice(-5,1)
console.log(anotherString);


// ********** trimming and replace in string************/

const newStringOne = "     rohit    "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://rohit.com/rohit%20vishwakarma"

console.log(url.replace('%20','-'));

console.log(url.includes('sundar')); // for checking the sring present in the given string or ur

console.log(gameName.split('-')); // for spliting the string based on some criteria










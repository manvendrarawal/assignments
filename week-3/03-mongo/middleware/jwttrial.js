const jwt = require("jsonwebtoken");



//decode,verify and generate


const value = {
    name : "Manvendra",
    accountNumber : 1234567
}

const value1 = {
    name : "Rawal",
    accountNumber : 123456789
}

//secret is the key that helps the 
const token = jwt.sign(value , "secret");
console.log(token);

const newToken = jwt.sign(value1 , "hello");

const newToken2 = jwt.sign(value, "12345r");
console.log(newToken2);

const verifyvalue = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTWFudmVuZHJhIiwiYWNjb3VudE51bWJlciI6MTIzNDU2NywiaWF0IjoxNzM1MzAxNDEyfQ.8WiXLBh15FhR_PW2eKZ7vvFPyZuqvH-pnfEaDPwTdSA", "hello");
console.log(verifyvalue);
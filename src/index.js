const prompt = require('prompt-sync')();
var AES = require('crypto-js/aes');
var KEY = 'ayden';
var text = prompt('Please input plaintext here');
var encrypted = AES.encrypt(text, KEY).toString();
console.log(encrypted);
const fs = require('fs');

// fs.writeFileSync("./test.text","Ram Ram");
const result =fs.readFile("./contact.txt","utf-8");
console.log(result);
fs.
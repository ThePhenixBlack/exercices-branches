const fs = require('fs');
const filepath = 'data.json';

const content = fs.readFileSync(filepath, {encoding: 'utf8', flag: 'r'});
const data = JSON.parse(content);
// write your code bellow
let age = 0
for(let i = 0 ; i< data.length ; i ++)
{
  age += data[i].age
}
age /= data.length
console.log(age)

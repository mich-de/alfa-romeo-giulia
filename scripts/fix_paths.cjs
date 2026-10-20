const fs = require('fs');
let data = fs.readFileSync('d:/alfa-giulia/src/data/wallpapers.js', 'utf8');
data = data.replace(/\/alfa-romeo-giulia\//g, '');
fs.writeFileSync('d:/alfa-giulia/src/data/wallpapers.js', data);
console.log('Fixed paths!');

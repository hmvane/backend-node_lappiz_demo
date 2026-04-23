const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/people.json');

const readData = () => {
  const data = fs.existsSync(filePath)
    ? fs.readFileSync(filePath, 'utf-8')
    : '[]';

  return JSON.parse(data);
};

const writeData = (data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

module.exports = {
  readData,
  writeData
};
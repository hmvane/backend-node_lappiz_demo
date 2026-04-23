const fs = require('fs');

const readFile = (path) => {
    const data = fs.readFileSync(path);
    return JSON.parse(data);
};

const writeFile = (path, data) => {
    fs.writeFileSync(path, JSON.stringify(data, null, 2));
};

module.exports = {
    readFile,
    writeFile
};
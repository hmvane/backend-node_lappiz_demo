const path = require('path');
const { readFile } = require('../utils/file.utils');
const { writeFile } = require('fs');

const FILE = path.join(__dirname, '../data/people.json');


const getPeople = () => {
  return readFile(FILE);
};

const addPerson = (person) => {
    if(!person.name || !person.email){
        throw new Error('Nombre y email son requeridos');
    }

    const people = readFile(FILE);

    if(people.some((p) => p.email === person.email)){
        throw new Error('El email ya existe');
    }

    people.push(person);
    writeFile(FILE, people);

    return person;
};

module.exports = {
    getPeople,
    addPerson
};
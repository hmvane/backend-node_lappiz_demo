const { readData, writeData } = require('../utils/file.utils');

const createPerson = (person) => {
  const people = readData();

  const exists = people.find(p => p.email === person.email);

  if (exists) {
    throw new Error('Email already exists');
  }

  const newPerson = {
    id: Date.now(),
    name: person.name,
    email: person.email
  };

  people.push(newPerson);
  writeData(people);

  return newPerson;
};

const fetchPeople = () => {
  return readData();
};

module.exports = {
  createPerson,
  fetchPeople
};
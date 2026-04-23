const {
  createPerson,
  fetchPeople
} = require('../services/people.service');

const addPerson = (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ message: 'Name and email are required' });
    }

    if (!email.includes('@')) {
      return res.status(400).json({ message: 'Invalid email' });
    }

    const newPerson = createPerson({ name, email });

    return res.status(201).json({
      message: 'Person created successfully',
      data: newPerson
    });

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getPeople = (req, res) => {
  try {
    const people = fetchPeople();
    return res.status(200).json(people);
  } catch (error) {
    if (error.message === 'Email already exists') {
      return res.status(400).json({ message: error.message });
    }

    return res.status(500).json({ message: error.message });

  };

  module.exports = {
    addPerson,
    getPeople
  };
}

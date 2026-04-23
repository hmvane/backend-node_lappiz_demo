const service = require('../services/people.service');

const getPeople = (req, res) =>{
    const data = service.getPeople();
    res.json(data);
};

const addPerson = (req, res) =>{
    try {
        const person = service.addPerson(req.body);
        res.json({ message: 'Persona agregada correctamente', person });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    getPeople,
    addPerson
}   
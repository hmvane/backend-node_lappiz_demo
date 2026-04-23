const express = require('express');
const cors = require('cors');
const peopleRoutes = require('./routes/people.routes');

const app = express();

app.use(cors({
  origin: ["http://localhost:3001"],
  methods: ["GET", "POST"],
  credentials: true
}));

app.use(express.json());

// rutas
app.use('/people', peopleRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
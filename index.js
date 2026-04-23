const express = require('express');
const cors = require('cors');
const peopleRoutes = require('./routes/peopleRoutes');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/people', peopleRoutes);

app.get('/', (req, res) => {
  res.send('API is running');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.listen(30001, () => {
  console.log('Server is running on port 30001');
}); 
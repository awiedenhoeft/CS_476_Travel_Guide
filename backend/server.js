const express = require('express');
const cors = require('cors');
require('dotenv').config();

const experienceRoutes = require('./routes/experienceRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/experiences', experienceRoutes);
app.use('/api/users', userRoutes);

// Testing to see if the backend is working.
app.get('/', (req, res) => {
    res.send('Backend is running');
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
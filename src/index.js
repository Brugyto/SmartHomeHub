// index.js

const express = require('express');
const bodyParser = require('body-parser');
const deviceRoutes = require('./routes/deviceRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Welcome Route
app.get('/', (req, res) => {
  res.send('Bienvenido a SmartHomeHub');
});

// Device Routes
app.use('/devices', deviceRoutes);

// User Routes
app.use('/users', userRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal');
});

// Start the server
app.listen(PORT, () => {
  console.log(`SmartHomeHub server is running on port ${PORT}`);
});

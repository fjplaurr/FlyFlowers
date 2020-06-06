require('dotenv').config({ path: `${__dirname}/.env` });
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const flowersRoutes = require('./routes/flowersRoutes');
const port = process.env.PORT || 5000;

const app = express();

mongoose.connect(process.env.MLAB_URI, {
  keepAlive: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Middlewares
app.use(cors());
app.use(express.json());

// Routers
app.use('/api/flowers', flowersRoutes);

// Error handling
function errorHandler(error, request, response, next) {
  return response.status(error.status || 500).json({
    error: {
      message: error.message || 'Something broke!',
    },
  });
}
app.use(errorHandler);

// Server listening
app.listen(port);
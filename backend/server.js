require('dotenv').config({ path: `${__dirname}/.env` });
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const flowersRoutes = require('./routes/flowersRoutes');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Mongoose connection
mongoose.connect(process.env.MLAB_URI, {
  keepAlive: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Middlewares
app.use(cors());
app.use(express.json());
const buildFolder = path.join(__dirname, '..', '/frontend', '/build');
app.use(express.static(buildFolder));
app.get('*', (req, res) => {
  res.sendFile(path.join(buildFolder, 'index.html'));
});

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
app.listen(PORT);

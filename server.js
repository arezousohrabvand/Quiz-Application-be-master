const cors = require('cors');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config({ path: './config/config.env' });

// Connect to database
connectDB();

// Load route files
const questions = require('./routes/questions');

// Inatantiate application
const app = express();
app.use(cors());
app.options('*', cors());

// Include body parser
app.use(express.json());

// Dev loggin
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Mount routes
app.use('/api/v1/questions', questions);

// set port to listen on from environment or use default
const PORT = process.env.PORT || 5000;

// Start listening on port
const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
);

// Global promise rejection handler
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server and exit process
  server.close(() => process.exit(1));
});

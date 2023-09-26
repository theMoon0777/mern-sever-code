const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb://localhost/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});
app.use(cors());
app.use(express.json());
const apiRouter = require('./routes/api');
app.use('/api', apiRouter);

const port = 8000;
app.listen(port, "localhost", () => {
    // Info
    console.log(`server is running ${port}`);    
  });
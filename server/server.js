const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const test = require('./services/testService');

const port = process.env.PORT || 5000;

const app = express();
const options = {};

let crs = {}
crs.credentials = true;

app.use(cors(crs));
app.use(bodyParser.urlencoded({ extended: true, limit: '1mb' }));
app.use(bodyParser.json({ limit: '1mb' }));

const testSvc = new test.TestService(options);

app.use('/api/test/', testSvc.router);

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
  
  module.exports = app;

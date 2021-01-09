//Install express server
const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve only the static files form the dist directory
app.use(express.static(__dirname + './dist/spaceX-launch-programs/'));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + './dist/spaceX-launch-programs/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
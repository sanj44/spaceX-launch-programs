
const express = require('express');
const path = require('path');
const ngApp = express();
ngApp.use(express.static('./dist/spaceX-launch-programs'));
ngApp.get('/*', function (request, response) {
    response.sendFile(path.join(__dirname, '/dist/spaceX-launch-programs/index.html'));
});
ngApp.listen(process.env.PORT || 8080);
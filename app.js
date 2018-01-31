const express = require('express');
const path = require('path');

let app = express();

//middleware

//serve static client side files
app.use(express.static('./client/dist'));

let port = 1234;

app.listen(1234, () => console.log('listening on port ' + port));
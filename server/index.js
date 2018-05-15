const express = require('express');
const mongoose = require('mongoose');

var app = express();

var port = process.env.port || 3000
app.listen(port, () => console.log(`now listening on ${port}`));

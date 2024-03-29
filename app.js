'use strict';

const express = require('express');

const PORT = 8000;
const HOST = process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
    res.send('Hello world!\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

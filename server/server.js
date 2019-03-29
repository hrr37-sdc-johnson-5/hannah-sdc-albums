const express = require('express');
const parser = require('body-parser');
const app = express();
const port = 3001;

app.listen(port, () => console.log(`Listening on port ${port}!`));

app.use(parser.json());

app.use(express.static('client/dist'));

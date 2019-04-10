const express = require('express');
const parser = require('body-parser');
const app = express();
const path = require('path');
const port = 3001;
const router = require('./router.js');
const cors = require('cors')

app.use(cors());

app.use(parser.json());

app.use('/*', express.static('client/dist'));

app.use('/api', router);

app.listen(port, () => console.log(`Listening on port ${port}!`));
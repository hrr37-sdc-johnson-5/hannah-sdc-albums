const express = require('express');
const parser = require('body-parser');
const cors = require('cors');
const path = require('path');
const router = require('./router.js');

const app = express();
const port = 3001;

app.use(cors());
app.use(parser.json());
app.use('/', express.static(path.join(__dirname, '/../client/dist')));
app.use('/:id', express.static(path.join(__dirname, '/../client/dist')));
app.use('/api', router);


app.listen(port, () => console.log(`Listening on port ${port}!`));

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const db = require('../db/index.js');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '/../client/dist')));
app.use('/:id', express.static(path.join(__dirname, '/../client/dist')));

app.get('/api/albums/:id', (req, res) => {
  const album_id = req.params.id;
  db.getAlbumsByAlbumId(album_id, (albums) => {
    res.send(albums);
  });
});

// app.get('/api/albums/:id', (req, res) => {
//   const album_id = req.params.id;
//   db.getAlbumsByAlbumId(album_id, (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.json(result);
//     }
//   })
// });

app.post('/api/albums/:id', (req, res) => {
  const album_id = req.params.id;
  const { name, artist, image, tags, description } = req.body;

  db.addAlbum(album_id, name, artist, image, tags, description)
    .then(addedAlbum => res.json(addedAlbum))
    .catch(err => console.log(err, 'ERROR: Could not add new album'));
});

app.put('/api/albums/:id', (req, res) => {
  const { id } = req.body; // primary key id of recommended album
  const toUpdate = req.body;
  db.updateAlbum(id, toUpdate)
    .then(updatedAlbum => res.json(updatedAlbum))
    .catch(err => console.log('ERROR: Could not update album'));
});

app.delete('/api/albums/:id', (req, res) => {
  const { id } = req.body; // primary key id of recommended album
  db.deleteAlbum(id)
    .then(deletedAlbum => res.json(deletedAlbum))
    .catch(err => console.log('ERROR: Could not delete album'));
});


app.listen(port, () => console.log(`Listening on port ${port}!`));

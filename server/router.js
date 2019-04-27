const express = require('express');
const db = require('../db/index.js');

const app = express();

app.get('/api/albums/:id', (req, res) => {
  const { id } = req.params; // album_id
  db.getAlbumsById(id)
    .then(albums => res.json(albums))
    .catch(err => console.log('ERROR: Could not get albums'));
});

app.post('/api/albums/:id', (req, res) => {
  const { id } = req.params; // album_id
  const { name, artist, image, tags, description } = req.body;

  db.addAlbum(id, name, artist, image, tags, description)
    .then(addedAlbum => res.json(addedAlbum))
    .catch(err => console.log('ERROR: Could not add new album'));
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

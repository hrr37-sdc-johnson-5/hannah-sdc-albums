require('newrelic');
const { pool } = require('./config.js');

// READ
const getAlbumsByAlbumId = (album_id, callback) => {
  pool.query('select * from albums where album_id = $1', [album_id])
    .then((albums) => {
      callback(albums);
    })
    .catch((err) => {
      console.log(err, 'Error getting all albums');
      callback(err);
    });
};

// CREATE
const addAlbum = (album_id, name, artist, image, tags, description, callback) => {
  const params = [album_id, name, artist, image, tags, description];
  pool.query('insert into albums values ($1, $2, $3, $4, $5, $6)', params)
    .then((newAlbum) => {
      callback(newAlbum);
    })
    .catch((err) => {
      console.log(err, 'Error adding new album');
      callback(err);
    });
};

// UPDATE
const updateAlbum = (id, toUpdate, value, callback) => {
  pool.query(`update albums set ${toUpdate}= $1 where id = $2`, [value, id])
    .then((updatedAlbum) => {
      callback(updatedAlbum);
    })
    .catch((err) => {
      console.log(err, 'Error updating album');
      callback(err);
    });
};

// DELETE
const deleteAlbum = (id, callback) => {
  pool.query('delete from albums where id = $1', id)
    .then((deletedAlbum) => {
      callback(deletedAlbum);
    })
    .catch((err) => {
      console.log(err, 'Error deleting album');
      callback(err);
    });
};


module.exports = {
  getAlbumsByAlbumId,
  addAlbum,
  updateAlbum,
  deleteAlbum,
};

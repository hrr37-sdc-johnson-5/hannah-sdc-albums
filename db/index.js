const pool = require('./config.js');

pool.connect()
  .then(() => console.log('successfully connected'))
  .catch(err => console.log(err, 'error connecting'));


// READ
const getAlbumsById = (album_id) => {
  pool.query(`select * from albums where album_id = ${album_id}`)
    .then((albums) => {
      console.log(albums);
      return albums;
    })
    .catch(err => console.log(err, 'Error getting all albums'));
};

// CREATE
const addAlbum = (album_id, name, artist, image, tags, description) => {
  const params = [album_id, name, artist, image, tags, description];
  pool.query('insert into albums values ($1, $2, $3, $4, $5, $6)', params)
    .then((newAlbum) => {
      console.log(newAlbum);
      return newAlbum
    })
    .catch(err => console.log(err, 'Error adding new album'));
};

// UPDATE
const updateAlbum = (id, toUpdate) => {
  pool.query(`update albums set ${toUpdate}= $1 where id = $2`, [id, toUpdate])
    .then((updatedAlbum) => {
      console.log(updatedAlbum);
      return updatedAlbum;
    })
    .catch(err => console.log(err, 'Error updating album'));
};

// DELETE
const deleteAlbum = (id) => {
  pool.query('delete from albums where id = $1', id)
    .then((deletedAlbum) => {
      console.log(deletedAlbum);
      return deletedAlbum;
    })
    .catch(err => console.log(err, 'Error deleting album'));
};

module.exports = {
  getAlbumsById,
  addAlbum,
  updateAlbum,
  deleteAlbum,
};

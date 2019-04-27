const { pool } = require('./config.js');

// READ
const getAlbumsByAlbumId = (album_id, callback) => {
  pool.query('select * from albums where album_id = $1', [album_id])
    .then((albums) => {
      console.log(albums);
      callback(albums);
    })
    .catch(err => console.log('Error getting all albums'));
};


// const getAlbumsByAlbumId = (album_id) => {
//   return new Promise((resolve, reject) => {
//     pool.query('select * from albums where album_id = $1', [album_id], (err, result) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(result.rows[0]);
//       }
//     });
//   });
// };


// const getAlbumById = (id) => {
//   return new Promise((resolve, reject) => {
//     pool.query('select * from albums where id = $1', [id], (err, result) => {
//       if (err) { reject(err); }
//       resolve(result);
//     });
//   });
// };

// CREATE
// const addAlbum = (album_id, name, artist, image, tags, description) => {
//   const params = [album_id, name, artist, image, tags, description];
//   pool.query('insert into albums values ($1, $2, $3, $4, $5, $6)', params)
//     .then((newAlbum) => {
//       console.log(newAlbum);
//       return newAlbum
//     })
//     .catch(err => console.log(err, 'Error adding new album'));
// };


const addAlbum = (album_id, name, artist, image, tags, description) => {
  return new Promise((resolve, reject) => {
    const params = [album_id, name, artist, image, tags, description];
    pool.query('insert into albums values ($1, $2, $3, $4, $5, $6)', params, (err, result) => {
      if (err) { reject(err); }
      resolve(result);
    });
  });
};

// UPDATE
// const updateAlbum = (id, toUpdate) => {
//   pool.query(`update albums set ${toUpdate}= $1 where id = $2`, [id, toUpdate])
//     .then((updatedAlbum) => {
//       console.log(updatedAlbum);
//       return updatedAlbum;
//     })
//     .catch(err => console.log(err, 'Error updating album'));
// };

const updateAlbum = (id, toUpdate, value) => {
  return new Promise((resolve, reject) => {
    pool.query(`update albums set ${toUpdate}= $1 where id = $2`, [value, id], (err, result) => {
      if (err) { reject(err); }
      resolve(result);
    });
  });
};

// DELETE
// const deleteAlbum = (id) => {
//   pool.query('delete from albums where id = $1', id)
//     .then((deletedAlbum) => {
//       console.log(deletedAlbum);
//       return deletedAlbum;
//     })
//     .catch(err => console.log(err, 'Error deleting album'));
// };

const deleteAlbum = (id) => {
  return new Promise((resolve, reject) => {
    pool.query('delete from albums where id = $1', id, id, (err, result) => {
      if (err) { reject(err); }
      resolve(result);
    });
  });
};

module.exports = {
  getAlbumsByAlbumId,
  // getAlbumById,
  addAlbum,
  updateAlbum,
  deleteAlbum,
};

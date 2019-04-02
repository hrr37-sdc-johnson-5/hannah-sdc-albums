const router = require('express').Router();
const model = require('../database/db.js');


var getAlbumsFromDb = (callback) => {
  model.Album.
    find({}).
    exec(callback);
}

var getAlbumByID = (id, callback) => {
  model.Album.
    findOne({ id }).
    exec(callback);
}


router.get('/albums/:id', (req, res) => {
  getAlbumsFromDb((err, results) => {
    if (err) return err;
    var currentID = req.params.id;
    getAlbumByID(currentID, (err, result) => {
      if (err) return err;
      var albumTags = result.tags.split(',');
      var relatedAlbums = results.filter(album => {
        if (album.id === currentID) {
          return false;
        }
        for (var i = 0; i < albumTags.length; i++) {
          if (album.tags.includes(albumTags[i])) {
            return true;
          }
        }
        return false;
      });
      res.status(200).send(relatedAlbums);
    });
  })
})


module.exports = router

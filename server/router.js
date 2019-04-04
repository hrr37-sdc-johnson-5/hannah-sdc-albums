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
    var currentID = Number(req.params.id);
    getAlbumByID(currentID, (err, result) => {
      if (err) return err;
      var albumTags = result.tags.split(',');
      var relatedAlbums = results.filter(album => {
        currentTags = album.tags.split(',');
        for (var i = 0; i < albumTags.length; i++) {
          if (currentTags.includes(albumTags[i]) && album.id !== currentID) {
            return true;
          }
        }
        return false;
      });
      var finalResults = relatedAlbums.slice(0, 7);
      res.status(200).send(finalResults);
    });
  });
});

router.get('/album/:id', (req, res) => {
  var currentID = req.params.id;
  getAlbumByID(currentID, (err, result) => {
    if (err) return err;
    console.log(result)
    res.status(200).send(result);
  });
});

module.exports = router

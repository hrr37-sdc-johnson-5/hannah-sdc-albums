const mongoose = require('mongoose');
const connection = mongoose.connect('mongodb://localhost/fetcher');

let fakeDataSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  albumName: String,
  artist: String,
  albumArt: String,
  tags: String,
  description: String
});

let Album = mongoose.model('Album', fakeDataSchema);

module.exports.Album = Album;
module.exports.connection = connection;
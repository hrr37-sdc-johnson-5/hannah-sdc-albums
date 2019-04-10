var faker = require('faker');
const mongoose = require('mongoose');
const model = require('./db.js');
mongoose.connect('mongodb://localhost/fetcher');




var fakeTags = () => {
  var tags = [];
  var genres = ['Art Punk', 'Alternative Rock', 'Indie Rock', 'Classic Blues', 'Swamp Blues', 'Sing-Along', 'Baroque', 'Impressionist', 'Symphonic', 'Novelty', 'Country Rock', 'Honky Tonk', 'Progressive', 'Deep House', 'Trance', 'Background', '8bit', 'Ambient', 'Vaporwave', 'Folk', 'Indie Pop', 'Gospel', 'K-Pop', 'Latin Jazz', 'Bebop', 'Bossa Nova', 'Disco', 'Contemporary R&B', 'Soul', 'Ska', 'Psychedelic', 'Glam Rock', 'Indie Folk', 'Soundtrack', 'World', 'Adult Alternative', 'Emo', 'Screamo', 'Spoken Word', 'Blues Rock', 'Electro', 'Dance', 'Lo-fi', 'Grunge', 'New Wave', 'Twee Pop', 'Memphis Blues', 'Cantata', 'Gregorian Chant', 'Renaissance', 'Americana', 'Bluegrass', 'Dreampop', 'Zydeco', 'Lounge', 'Dubstep', 'Trap', 'Rap', 'Hip-hop', 'Crunk', 'Freak Folk', 'Noise', 'Instrumental', 'Big Band', 'Hard Bop', 'Soft Rock', 'Synth Pop', 'Reggae', 'Art Rock', 'Math Rock'];
  while(tags.length < 3) {
    var index = Math.floor(Math.random() * genres.length);
    if (!tags.includes(genres[index])) {
      tags.push(genres[index]);
    };
  }
  return tags.join(', ');
}



var makeData = () => {
  var dataArr = [];
  for (var i = 0; i < 100; i++) {
    var singleEntry = {};
    singleEntry.id = i;
    singleEntry.albumName = `${faker.commerce.color()} ${faker.lorem.word()}`;
    singleEntry.artist = `${faker.name.firstName()}`;
    singleEntry.albumArt = `https://loremflickr.com/120/120/abstract?random=${i}`;
    singleEntry.tags = fakeTags();
    singleEntry.description = faker.lorem.sentences(2);
    dataArr.push(singleEntry);
  }
  return dataArr;
}

var dataEntries = makeData();

// to drop collection, uncomment:
// model.Album.remove({}, function(err) {
//   console.log('collection removed')
// });

model.Album.insertMany(dataEntries, function (err, docs) {
  if (err) return err;
});
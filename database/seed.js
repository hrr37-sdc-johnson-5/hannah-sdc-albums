var faker = require('faker');
const mongoose = require('mongoose');
const model = require('./db.js');
mongoose.connect('mongodb://localhost/fetcher');


//loop to make an array 100 fake entries
var makeData = () => {
  var dataArr = [];
  for (var i = 0; i < 100; i++) {
    var singleEntry = {};
    singleEntry.id = i;
    singleEntry.albumName = `${faker.commerce.color()} ${faker.lorem.word()}`;
    singleEntry.artist = `${faker.name.jobType()}  ${faker.random.word()}`;
    singleEntry.albumArt = faker.random.image();
    singleEntry.tags = `${faker.commerce.color()}, ${faker.company.catchPhraseDescriptor()}, ${faker.company.catchPhraseAdjective()}`;
    singleEntry.description = faker.lorem.paragraph();
    dataArr.push(singleEntry);
  }
  return dataArr;
}

var dataEntries = makeData();


//insertMany to DB

model.Album.insertMany(dataEntries, function (err, docs) {
  if (err) return err;
  // saved!
});
var faker = require('faker');


var createTags = () => {
  var tags = [];
  var numOfTags = faker.random.number({'min': 1, 'max': 3});
  var genres = ['Art Punk', 'Alternative Rock', 'Indie Rock', 'Classic Blues', 'Swamp Blues', 'Sing-Along', 'Baroque', 'Impressionist', 'Symphonic', 'Novelty', 'Country Rock', 'Honky Tonk', 'Progressive', 'Deep House', 'Trance', 'Background', '8bit', 'Ambient', 'Vaporwave', 'Folk', 'Indie Pop', 'Gospel', 'K-Pop', 'Latin Jazz', 'Bebop', 'Bossa Nova', 'Disco', 'Contemporary R&B', 'Soul', 'Ska', 'Psychedelic', 'Glam Rock', 'Indie Folk', 'Soundtrack', 'World', 'Adult Alternative', 'Emo', 'Screamo', 'Spoken Word', 'Blues Rock', 'Electro', 'Dance', 'Lo-fi', 'Grunge', 'New Wave', 'Twee Pop', 'Memphis Blues', 'Cantata', 'Gregorian Chant', 'Renaissance', 'Americana', 'Bluegrass', 'Dreampop', 'Zydeco', 'Lounge', 'Dubstep', 'Trap', 'Rap', 'Hip-hop', 'Crunk', 'Freak Folk', 'Noise', 'Instrumental', 'Big Band', 'Hard Bop', 'Soft Rock', 'Synth Pop', 'Reggae', 'Art Rock', 'Math Rock'];

  while(tags.length < numOfTags) {
    var index = Math.floor(Math.random() * genres.length);
    if (!tags.includes(genres[index])) {
      tags.push(genres[index]);
    };
  }
  return tags.join(', ');
}

const createAlbum = () => ({
  name: faker.commerce.word(2),
  artist: faker.name.firstName(),
  tags: createTags(),
  image: faker.image.abstract(),
  description: faker.lorem.sentences(2),
});

const createAllAlbums = () => {
  var albums = [];
  for (var i = 0; i < 10000000; i++) {
    let newAlbum = createAlbum();
    albums.push(newAlbum);
  }
  return albums;
}

var dataEntries = createAllAlbums();


const fs = require('fs');
const csvWriter = require('csv-write-stream');
const faker = require('faker');

const writer = csvWriter();

const createTags = () => {
  const tags = [];
  const numOfTags = faker.random.number({ min: 1, max: 3 });
  const genres = ['Art Punk', 'Alternative Rock', 'Indie Rock', 'Classic Blues', 'Swamp Blues', 'Sing-Along', 'Baroque', 'Impressionist', 'Symphonic', 'Novelty', 'Country Rock', 'Honky Tonk', 'Progressive', 'Deep House', 'Trance', 'Background', '8bit', 'Ambient', 'Vaporwave', 'Folk', 'Indie Pop', 'Gospel', 'K-Pop', 'Latin Jazz', 'Bebop', 'Bossa Nova', 'Disco', 'Contemporary R&B', 'Soul', 'Ska', 'Psychedelic', 'Glam Rock', 'Indie Folk', 'Soundtrack', 'World', 'Adult Alternative', 'Emo', 'Screamo', 'Spoken Word', 'Blues Rock', 'Electro', 'Dance', 'Lo-fi', 'Grunge', 'New Wave', 'Twee Pop', 'Memphis Blues', 'Cantata', 'Gregorian Chant', 'Renaissance', 'Americana', 'Bluegrass', 'Dreampop', 'Zydeco', 'Lounge', 'Dubstep', 'Trap', 'Rap', 'Hip-hop', 'Crunk', 'Freak Folk', 'Noise', 'Instrumental', 'Big Band', 'Hard Bop', 'Soft Rock', 'Synth Pop', 'Reggae', 'Art Rock', 'Math Rock'];

  while (tags.length < numOfTags) {
    const index = Math.floor(Math.random() * genres.length);
    if (!tags.includes(genres[index])) {
      tags.push(genres[index]);
    }
  }
  return tags.join(', ');
};

const createAlbum = () => ({
  name: faker.random.word() + faker.lorem.word(),
  artist: faker.name.firstName(),
  image: faker.image.abstract(),
  tags: createTags(),
  description: faker.lorem.sentences(2),
});

const createAllAlbums = () => {
  writer.pipe(fs.createWriteStream('db/data.csv'));
  for (let i = 0; i <= 1000000; i++) {
    const album = createAlbum();

    writer.write({
      name: album.name,
      artist: album.artist,
      image: album.image,
      tags: album.tags,
      description: album.description,
    });
  }
  writer.end();
  console.log('DONE');
};

createAllAlbums();

module.exports = {
  createAllAlbums,
};

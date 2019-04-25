const fs = require('fs');
const csvWriter = require('csv-write-stream');
const faker = require('faker');

const writer = csvWriter();

// function to generate 1-3 tags that are randomly selected
const createTags = () => {
  const tags = [];
  const numOfTags = faker.random.number({ min: 1, max: 3 });
  const genres = ['Art Punk', 'Alternative Rock', 'Indie Rock', 'Classic Blues', 'Swamp Blues', 'Sing-Along', 'Baroque', 'Impressionist', 'Symphonic', 'Novelty', 'Country Rock', 'Honky Tonk', 'Progressive', 'Deep House', 'Trance', 'Background', '8bit', 'Ambient', 'Vaporwave', 'Folk', 'Indie Pop', 'Gospel', 'K-Pop', 'Latin Jazz', 'Bebop', 'Bossa Nova', 'Disco', 'Contemporary R&B', 'Soul', 'Ska', 'Psychedelic', 'Glam Rock', 'Indie Folk', 'Soundtrack', 'World', 'Adult Alternative', 'Emo', 'Screamo', 'Spoken Word', 'Blues Rock', 'Electro', 'Dance', 'Lo-fi', 'Grunge', 'New Wave', 'Twee Pop', 'Memphis Blues', 'Cantata', 'Gregorian Chant', 'Renaissance', 'Americana', 'Bluegrass', 'Dreampop', 'Zydeco', 'Lounge', 'Dubstep', 'Trap', 'Rap', 'Hip-hop', 'Crunk', 'Freak Folk', 'Noise', 'Instrumental', 'Big Band', 'Hard Bop', 'Soft Rock', 'Synth Pop', 'Reggae', 'Art Rock', 'Math Rock'];

  while (tags.length < numOfTags) {
    const tagIndex = Math.floor(Math.random() * genres.length);
    if (!tags.includes(genres[tagIndex])) {
      tags.push(genres[tagIndex]);
    }
  }
  return tags.join(', ');
};


// const createAlbum = () => ({
//   name: faker.lorem.word(2),
//   artist: faker.name.firstName(),
//   image: faker.image.abstract(),
//   tags: createTags(),
//   description: faker.lorem.sentences(2),
// });

const createAllAlbums = () => {
  console.time('timing seed');
  writer.pipe(fs.createWriteStream('db/data.csv'));
  for (let i = 0; i < 10000000; i++) {
    const album = {
      album_id: faker.random.number({ min: 1, max: 10000000 }),
      name: faker.lorem.word(2),
      artist: faker.name.firstName(),
      image: faker.image.abstract(),
      tags: createTags(),
      description: faker.lorem.sentences(2),
    };
    writer.write(album);
  }
  writer.end();
  console.log('DONE');
  console.timeEnd('timing seed');
};

createAllAlbums();

module.exports = {
  createAllAlbums,
};

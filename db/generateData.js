const fs = require('fs');
const csvWriter = require('csv-write-stream');
const faker = require('faker');

const writer = csvWriter({ headers: ['album_id', 'artist', 'name', 'image', 'tags', 'description'] });

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

const createAlbum = i => ({
  album_id: i,
  name: faker.lorem.word(2),
  artist: faker.name.firstName(),
  image: faker.image.imageUrl(),
  tags: createTags(),
  description: faker.lorem.sentences(2),
});


const recommendedAlbums = (i) => {
  const albumsArr = [createAlbum(i), createAlbum(i), createAlbum(i), createAlbum(i), createAlbum(i)];
  return albumsArr;
};

const createAllAlbums = () => {
  console.time('timing generation');

  writer.pipe(fs.createWriteStream('db/data.csv'));
  for (let i = 1; i < 11; i++) {
    // const album = createAlbum();
    const albums = recommendedAlbums(i);
    albums.forEach((album) => {
      writer.write(album);
    });
  }

  for (let i = 11; i < 10000000; i++) {
    const album = createAlbum(i);
    writer.write(album);
  }

  writer.end();
  console.log('DONE');
  console.timeEnd('timing generation');
};

createAllAlbums();

module.exports = {
  createAllAlbums,
};


// const recommendedAlbums = () => (
//   [createAlbum(), createAlbum(), createAlbum(), createAlbum(), createAlbum()]
// );

// const createAllAlbums = () => {
//   console.time('timing seed');
//   writer.pipe(fs.createWriteStream('db/data.csv'));
//   for (let i = 0; i < 10000000; i++) {
//     const albums = recommendedAlbums();
//     albums.join(', ');
//     writer.write(albums);
//   }
//   writer.end();
//   console.log('DONE');
//   console.timeEnd('timing seed');
// };

drop keyspace if exists bandland;
create keyspace bandland with replication = {'class': 'SimpleStrategy', 'replication_factor': 3};

use bandland;

CREATE TABLE albums(
  album_id int PRIMARY KEY,
  name text,
  artist varchar,
  image varchar,
  tags varchar,
  description varchar
);


COPY albums(album_id, name, artist, image, tags, description) FROM 'db/data.csv' WITH HEADER=TRUE;


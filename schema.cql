drop keyspace if exists bandland;
create keyspace bandland with replication = {'class': 'SimpleStrategy', 'replication_factor': 5};

use bandland;

CREATE TABLE albums(
  id int PRIMARY KEY,
  name text,
  artist text,
  image text,
  tags text,
  description text
);


COPY albums(id, name, artist, image, tags, description) FROM 'db/data.csv' WITH DELIMITER=',' AND HEADER=TRUE AND NUMPROCESSES=25 AND CHUNKSIZE=5000 AND MAXBATCHSIZE=20;


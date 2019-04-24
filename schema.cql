drop keyspace if exists bandland;
create keyspace bandland with replication = {'class': 'SimpleStrategy', 'replication_factor': 3};

use bandland;

CREATE TABLE albums(
  id int PRIMARY KEY,
  name text,
  artist text,
  image text,
  tags text,
  description text
);


COPY albums(id, name, artist, image, tags, description) FROM 'db/data.csv' WITH DELIMITER=',' AND HEADER=TRUE;


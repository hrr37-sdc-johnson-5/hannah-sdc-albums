drop keyspace if exists bandland;
create keyspace bandland with replication = {'class': 'SimpleStrategy', 'replication_factor': 2};

use bandland;

CREATE TABLE albums(
  id int primary key,
  name text,
  artist text,
  image text,
  tags text,
  description text
);

COPY albums(name, artist, image, tags, description) FROM 'db/data.csv' WITH DELIMITER=',' AND HEADER=TRUE;
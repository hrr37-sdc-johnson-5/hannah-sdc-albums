drop database if exists bandland;
create database bandland;
\connect bandland;

CREATE TABLE albums(
  id int generated always as identity,
  album_id int not null,
  name varchar(100) not null,
  artist varchar(100) not null,
  image varchar(1000) not null,
  tags varchar(500) not null,
  description varchar(1000) not null
);

\copy albums(album_id, name, artist, image, tags, description) FROM 'db/data.csv' DELIMITER ',' CSV HEADER;

create index album_index on albums(album_id);








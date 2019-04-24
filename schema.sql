drop database if exists bandland;
create database bandland;
\connect bandland;

CREATE TABLE albums(
  id int primary key,
  name varchar(100) not null,
  artist varchar(100) not null,
  image varchar(500) not null,
  tags varchar(100) not null,
  description varchar(1000) not null
);

\copy albums(id, name, artist, image, tags, description) FROM 'db/data.csv' DELIMITER ',' CSV HEADER;




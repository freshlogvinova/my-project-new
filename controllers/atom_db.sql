DROP DATABASE IF EXISTS atom_db;
CREATE DATABASE atom_db;
\c atom_db;

CREATE TABLE developers (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  surname VARCHAR,
  position VARCHAR,
  img VARCHAR
);

INSERT INTO developers (name, surname, position, img)
  VALUES ('Julia', '', 'Full Stack developer', '');

CREATE TABLE comments (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  email VARCHAR,
  text VARCHAR,
  show BOOLEAN
);

INSERT INTO comments (name, email, text, show)
VALUES ('Julia', 'logvinova87@yandex.ru', 'Great, Love it', true);

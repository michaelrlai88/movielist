CREATE DATABASE movielist;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users(
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

INSERT INTO users (email, password) VALUES ('bob@gmail.com','bob'), ('tom@gmail.com','tom');


CREATE TABLE movie_saves(
  id BIGSERIAL PRIMARY KEY,
  user_id uuid NOT NULL REFERENCES users(id),
  movie_id INT NOT NULL
);

insert into movie_saves (user_id, movie_id) values ('f3bea6b2-0013-438b-9bda-540921e8bc25', 5);
CREATE TABLE movies (
    movie_id SERIAL PRIMARY KEY,
    title VARCHAR(40) NOT NULL,
    year INT NOT NULL,
    image_url TEXT NOT NULL
);
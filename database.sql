CREATE DATABASE "giphy_search_favorites";

-- You'll need a table for storing each giphy image favorite
-- Each favorite image can be assigned 1 of the following categories as a Foreign Key

-- Category table
CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL
);

-- Default categories. You may change them :)
INSERT INTO "category" ("name")
VALUES ('funny'), ('cohort'), ('cartoon'), ('nsfw'), ('meme');

CREATE TABLE "favorites" (
	"id" SERIAL PRIMARY KEY,
	"category" VARCHAR(100),
	"url" VARCHAR(250) NOT NULL
);

INSERT INTO "favorites" ("category", "url")
VALUES ('funny', 'https://media0.giphy.com/media/rguj35cTYIH5u/giphy.gif?cid=dbf71e3evm3fqo734ylhrt8uj8qfn9v6xg6l58k3nn99fhdz&rid=giphy.gif&ct=g')
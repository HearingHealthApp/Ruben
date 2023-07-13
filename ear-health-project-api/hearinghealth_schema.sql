CREATE TABLE IF NOT EXISTS users (
    user_id         SERIAL PRIMARY KEY,
    username        TEXT NOT NULL,
    email           TEXT NOT NULL UNIQUE CHECK (POSITION('@' IN email) > 1),
    password        TEXT NOT NULL,
    first_name      TEXT NOT NULL,
    last_name       TEXT NOT NULL,
    is_doctor       BOOLEAN,
    created_at      TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS doctors (
    user_id                 INTEGER,
    specialties             TEXT [],
    registration_number     TEXT NOT NULL,
    description             TEXT,
    verified                BOOLEAN
    );

CREATE TABLE IF NOT EXISTS posts (
    post_id                 SERIAL PRIMARY KEY,
    user_id                 INT NOT NULL,
    title                   TEXT NOT NULL,
    content                 TEXT,
    category                TEXT [],
    created_at              TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS comments (
    comment_id              SERIAL PRIMARY KEY,
    post_id                 INT,
    user_id                 INT,
    content                 TEXT NOT NULL,
    created_at              TIMESTAMP NOT NULL DEFAULT NOW()

);
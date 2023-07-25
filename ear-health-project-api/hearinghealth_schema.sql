CREATE TABLE IF NOT EXISTS users (
    user_id         SERIAL PRIMARY KEY,
    username        TEXT NOT NULL,
    email           TEXT NOT NULL UNIQUE CHECK (POSITION('@' IN email) > 1),
    password        TEXT NOT NULL,
    first_name      TEXT NOT NULL,
    last_name       TEXT NOT NULL,
    description     TEXT,
    conditions      TEXT [],
    is_doctor       BOOLEAN  NOT NULL DEFAULT false,
    created_at      TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS doctors (
    user_id                 INTEGER,
    specialties             TEXT [],
    registration_number     TEXT NOT NULL,
    description             TEXT,
    verified                BOOLEAN DEFAULT false
    );

CREATE TABLE IF NOT EXISTS posts (
    post_id                 SERIAL PRIMARY KEY,
    user_id                 INT NOT NULL,
    username                TEXT,
    title                   TEXT NOT NULL,
    content                 TEXT,
    category                TEXT,
    is_anonymous            BOOLEAN NOT NULL DEFAULT false,
    from_doctor             BOOLEAN DEFAULT FALSE NOT NULL
    created_at              TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS comments (
    comment_id              SERIAL PRIMARY KEY,
    post_id                 INT,
    user_id                 INT,
    username                TEXT,
    content                 TEXT NOT NULL,
    is_anonymous            BOOLEAN NOT NULL DEFAULT false,
    from_doctor             BOOLEAN DEFAULT FALSE NOT NULL
    created_at              TIMESTAMP NOT NULL DEFAULT NOW()

);

CREATE TABLE IF NOT EXISTS notifications (
    notification_id         SERIAL PRIMARY KEY,
    user_id                 INT NOT NULL,
    post_id                 INT,
    comment_id              INT,
    message                 TEXT NOT NULL,
    view_status             BOOLEAN DEFAULT FALSE NOT NULL,
    created_at              TIMESTAMP NOT NULL DEFAULT NOW()
)
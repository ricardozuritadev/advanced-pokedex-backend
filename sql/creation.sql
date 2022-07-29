DROP TABLE IF EXISTS trainers;

CREATE TABLE IF NOT EXISTS trainers (  
    id SERIAL PRIMARY KEY,  
    email TEXT UNIQUE NOT NULL,
    nickname TEXT UNIQUE NOT NULL,
    gendre TEXT,
    password TEXT NOT NULL,
    password_confirm TEXT NOT NULL
);
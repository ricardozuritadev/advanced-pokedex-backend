DROP TABLE IF EXISTS trainers;

CREATE TABLE IF NOT EXISTS trainers (  
    id SERIAL PRIMARY KEY,  
    email TEXT UNIQUE NOT NULL, 
    fisrtname TEXT UNIQUE NOT NULL,
    secondname TEXT UNIQUE NOT NULL,
    nickname TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL  
);
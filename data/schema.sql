DROP DATABASE IF EXISTS friendfinder_DB;

CREATE database friendfinder_DB;

USE friendfinder_DB;

CREATE TABLE IF NOT EXISTS profiles (
   name VARCHAR(25),
   photo VARCHAR(255),
   scores VARCHAR(25)
);

SELECT * FROM profiles;
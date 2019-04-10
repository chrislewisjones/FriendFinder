DROP DATABASE IF EXISTS friendfinder_DB;

CREATE database friendfinder_DB;

USE friendfinder_DB;

CREATE TABLE IF NOT EXISTS profiles (
   id not null auto_increment,
   name VARCHAR(25) not null,
   photo VARCHAR(255),
   scores VARCHAR(50),
   Primary KEY (id)
);

SELECT * FROM profiles;
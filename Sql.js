CREATE DATABASE electronics_db;
USE electronics_db;

CREATE TABLE devices (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100),
    brand VARCHAR(100),
    category VARCHAR(50),
    price DOUBLE,
    PRIMARY KEY (id)
);

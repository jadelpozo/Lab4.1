CREATE DATABASE IF NOT EXISTS PeliculaDB;
use PeliculaDB;
DROP TABLE IF EXISTS Peli;
CREATE TABLE Peli (
    idPeli int(12) NOT NULL AUTO_INCREMENT,
    Nombre varchar(45) NOT NULL,
    Genero varchar(15) not null,
    PRIMARY KEY (idPeli)
);

insert into Peli (Nombre, Genero) values ('Los Increibles', 'Infantil');
insert into Peli  (Nombre, Genero)  values ('Batman', 'Accion');
insert into Peli  (Nombre, Genero)  values ('Avengers', 'Accion');

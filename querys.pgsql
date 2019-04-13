create table combobox.Pais(
idpais serial not null primary key,
nombrepais varchar(50) not null); 
insert into combobox.Pais(nombrepais) values
('Chile'),('Argentina'),('Perú');

create table combobox.Ciudad(
idciudad serial not null primary key,
idpais int,
nombreciudad varchar(50),
constraint fk_pais 
foreign key(idpais)
references combobox.Pais(idpais)
);
insert into combobox.Ciudad(idpais, nombreciudad)
values
(1,'Santiago'),(1,'Viña del mar'),
(1,'Rancagua'),(2,'Mendoza'),
(2,'Buenos Aires'),(2,'Rosario'),
(3,'Lima'),(3,'Tacna');

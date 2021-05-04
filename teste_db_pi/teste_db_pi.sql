-- Criar Banco de Dados
CREATE DATABASE IF NOT EXISTS db_biblioteca;

-- Mostrar todos os bancos criados
SHOW DATABASES;

-- Setar o banco
USE db_biblioteca;

-- Select Database
SELECT DATABASE();

-- Criar Tabela
CREATE TABLE IF NOT EXISTS tbl_livro (
ID_Livro smallint AUTO_INCREMENT PRIMARY KEY,
Nome_Livro Varchar(50) NOT NULL,
ISBN Varchar(30) NOT NULL,
ID_Autor smallint NOT NULL,
Data_Pub DATE NOT NULL,
Preco_Livro decimal NOT NULL);

-- Mostrar Tabela 
SHOW TABLES;

-- Criar Banco de Dados
CREATE DATABASE IF NOT EXISTS db_biblioteca;

-- Mostrar todos os bancos criados
SHOW DATABASES;

-- Setar o banco
USE db_biblioteca;

-- Select Database
SELECT DATABASE();

-- Criar Tabela
CREATE TABLE IF NOT EXISTS tbl_livro (
ID_Livro smallint AUTO_INCREMENT PRIMARY KEY,
Nome_Livro Varchar(50) NOT NULL,
ISBN Varchar(30) NOT NULL,
ID_Autor smallint NOT NULL,
Data_Pub DATE NOT NULL,
Preco_Livro decimal NOT NULL);

-- Mostrar Tabela 
SHOW TABLES;
-- Criar Banco de dados
CREATE DATABASE IF NOT EXISTS db_biblioteca;

-- Mostrar todos os bancos criados
SHOW DATABASES;

-- Setar o banco
USE db_biblioteca ;

-- Select Database
SELECT DATABASE();

-- Criar Tabela
CREATE TABLE IF NOT EXISTS tbl_livro (
ID_Livro smallint AUTO_INCREMENT PRIMARY KEY,
Nome_Livro Varchar(50) NOT NULL,
ISBN Varchar (30) NOT NULL,
ID_Autor smallint NOT NULL,
Data_Pub DATE NOT NULL,
Preco_Livro decimal NOT NULL);

-- Criar tabela 2
CREATE TABLE tbl_autores (
ID_Autor SMALLINT PRIMARY KEY,
Nome_Autor VARCHAR(50),
Sobrenome_Autor VARCHAR (60));

-- Criar tabela 3
CREATE TABLE tbl_editoras (
ID_Editora SMALLINT PRIMARY KEY AUTO_INCREMENT,
Nome_Editora VARCHAR(50) NOT NULL
);

-- Mostrar Tabela
SHOW TABLES;

-- Select tabela
SELECT * FROM tbl_editoras;

-- Bad Way
INSERT INTO tbl_editoras (ID_Editora, Nome_Editora)
VALUES (1, 'Teste_editora');

-- Good Way
INSERT INTO tbl_editoras (Nome_Editora)
VALUES ('Junho');

show databases;




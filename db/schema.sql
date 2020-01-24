DROP DATABASE IF EXISTS FECDescription;

CREATE DATABASE FECDescription;

USE FECDescription;

CREATE TABLE productDescription (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  product_Id int,
  productName VARCHAR(255),
  productDescription VARCHAR(255),
  price int,
  category_id int,
  imgUrls text
);

	INSERT INTO [table name] (Host, User, Password) VALUES('%','user',PASSWORD('password'));
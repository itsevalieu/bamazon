CREATE DATABASE bamazonDB;
USE bamazonDB;

CREATE TABLE products (
item_id INTEGER(30) AUTO_INCREMENT,
product_name VARCHAR(50) NOT NULL,
department_name VARCHAR(50) NOT NULL,
price DECIMAL(10,2) NOT NULL,
stock_quantity INTEGER(30),
PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Running Shoes", "Shoe", 59.99, 25);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Fedora", "Clothing", 9.99, 30);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Red Scarf", "Clothing", 4.99, 25);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Final Fantasy X", "Video Games", 29.99, 50);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Frozen: Remastered", "Entertainment", 99.99, 1);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Toshiba Laptop", "Electronics", 399.99, 50);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("JavaScript for Dummies", "Book", 19.99, 20);

SELECT * FROM products
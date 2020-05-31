CREATE DATABASE lw11;
USE lw11;
CREATE TABLE profiles
(
    id INT AUTO_INCREMENT NOT NULL,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    country VARCHAR(255) NOT NULL,
    gender VARCHAR(255) NOT NULL,
    message VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
) DEFAULT CHARACTER SET utf8
  COLLATE `utf8_unicode_ci`
  ENGINE = InnoDB
;

INSERT INTO profiles (username, email, country, gender, message) 
VALUES 
    ('Dima', 'darkadvent@mail.ru', 'Россия', 'Мужской', 'Hello, my friend!'),
    ('Sasha', 'sasha123@mail.ru', 'Украина', 'Мужской', 'How do you do?'),
    ('Elena', 'lenka@yandex.ru', 'Азерот', 'Женский', 'I am elf!');
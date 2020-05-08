CREATE DATABASE university;

USE university;

CREATE TABLE faculty
(
    id INT NOT NULL AUTO_INCREMENT,
    faculty_name VARCHAR(255) NOT NULL,
    faculty_head VARCHAR(255),
    PRIMARY KEY(id)
);

CREATE TABLE university_groups
(
    group_id INT NOT NULL AUTO_INCREMENT,
    group_name VARCHAR(255) NOT NULL,
    learning_year TINYINT UNSIGNED NOT NULL,
    group_faculty INT NOT NULL,
    PRIMARY KEY(group_id)
);

CREATE TABLE students
(
    id INT AUTO_INCREMENT NOT NULL,
    surname VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    middle_name VARCHAR(255),
    age TINYINT UNSIGNED,
    sex VARCHAR (6) NOT NULL,
    student_group INT NOT NULL,
    PRIMARY KEY(id)
);

INSERT INTO faculty set faculty_name = 'Economics and management', faculty_head = 'Starcev U.A.';
INSERT INTO faculty set faculty_name = 'Physics and astronomy', faculty_head = 'Ivanov P.E.';
INSERT INTO faculty set faculty_name = 'Engineering', faculty_head = 'Petrov I.N.';

INSERT INTO university_groups set group_name = 'Economics', learning_year = 1, group_faculty = 1;
INSERT INTO university_groups set group_name = 'Finance and credit', learning_year = 2, group_faculty = 1;
INSERT INTO university_groups set group_name = 'Management', learning_year = 3, group_faculty = 1;

INSERT INTO university_groups set group_name = 'Applied mathematics and physics', learning_year = 3, group_faculty = 2;
INSERT INTO university_groups set group_name = 'Physics', learning_year = 2, group_faculty = 2;
INSERT INTO university_groups set group_name = 'Astronomy', learning_year = 1, group_faculty = 2;

INSERT INTO university_groups set group_name = 'Engineering', learning_year = 2, group_faculty = 3;
INSERT INTO university_groups set group_name = 'Technological machines and equipment', learning_year = 1, group_faculty = 3;
INSERT INTO university_groups set group_name = 'Applied mechanics', learning_year = 3, group_faculty = 3;

/*Economics and management*/
INSERT INTO students set surname = 'Ivanov', name = 'Andrey', middle_name = 'Viktorovich', age = 18, sex = 'Male', student_group = 1;
INSERT INTO students set surname = 'Petrov', name = 'Pavel', middle_name = 'Leonidovich', age = 17, sex = 'Male', student_group = 1;
INSERT INTO students set surname = 'Astahova', name = 'Valentina', middle_name = 'Sergeevna', age = 18, sex = 'Female', student_group = 1;
INSERT INTO students set surname = 'Babushkina', name = 'Ulia', middle_name = 'Semenovna', age = 17, sex = 'Female', student_group = 1;
INSERT INTO students set surname = 'Frolova', name = 'Vera', middle_name = 'Dmitrievna', age = 18, sex = 'Female', student_group = 1;

INSERT INTO students set surname = 'Sidorov', name = 'Andrey', middle_name = 'Stanislavovich', age = 18, sex = 'Male', student_group = 2;
INSERT INTO students set surname = 'Lermontov', name = 'Pavel', middle_name = 'Leonidovich', age = 19, sex = 'Male', student_group = 2;
INSERT INTO students set surname = 'Hlebova', name = 'Valentina', middle_name = 'Igorevna', age = 19, sex = 'Female', student_group = 2;
INSERT INTO students set surname = 'Hrustaleva', name = 'Ulia', middle_name = 'Semenovna', age = 18, sex = 'Female', student_group = 2;
INSERT INTO students set surname = 'Romanova', name = 'Nadezda', middle_name = 'Ivanovna', age = 18, sex = 'Female', student_group = 2;

INSERT INTO students set surname = 'Markov', name = 'Saveliy', middle_name = 'Stanislavovich', age = 19, sex = 'Male', student_group = 3;
INSERT INTO students set surname = 'Tochilov', name = 'Gennadiy', middle_name = 'Valentinovich', age = 20, sex = 'Male', student_group = 3;
INSERT INTO students set surname = 'Shustova', name = 'Alena', middle_name = 'Igorevna', age = 20, sex = 'Female', student_group = 3;
INSERT INTO students set surname = 'Perova', name = 'Galla', middle_name = 'Viktorovna', age = 20, sex = 'Female', student_group = 3;
INSERT INTO students set surname = 'Skvortsova', name = 'Anna', middle_name = 'Ivanovna', age = 19, sex = 'Female', student_group = 3;

/*Physics and astronomy*/
INSERT INTO students set surname = 'Fedukov', name = 'Aleksandr', middle_name = 'Alekseevich', age = 19, sex = 'Male', student_group = 4;
INSERT INTO students set surname = 'Omoylov', name = 'Georgiy', middle_name = 'Eduardovich', age = 20, sex = 'Male', student_group = 4;
INSERT INTO students set surname = 'Sidorkina', name = 'Tatyana', middle_name = 'Igorevna', age = 20, sex = 'Female', student_group = 4;
INSERT INTO students set surname = 'Ladushkina', name = 'Marina', middle_name = 'Romanovna', age = 20, sex = 'Female', student_group = 4;
INSERT INTO students set surname = 'Svetlova', name = 'Lesya', middle_name = 'Ivanovna', age = 19, sex = 'Female', student_group = 4;

INSERT INTO students set surname = 'Samoylov', name = 'Igor', middle_name = 'Ivanovich', age = 18, sex = 'Male', student_group = 5;
INSERT INTO students set surname = 'Levshov', name = 'Aleksey', middle_name = 'Vadimovich', age = 19, sex = 'Male', student_group = 5;
INSERT INTO students set surname = 'Polyasheva', name = 'Tatyana', middle_name = 'Vadimovna', age = 19, sex = 'Female', student_group = 5;
INSERT INTO students set surname = 'Udina', name = 'Anna', middle_name = 'Pavlovna', age = 18, sex = 'Female', student_group = 5;
INSERT INTO students set surname = 'Motorova', name = 'Ulia', middle_name = 'Grigoryevna', age = 18, sex = 'Female', student_group = 5;

INSERT INTO students set surname = 'Stroynov', name = 'Stanislav', middle_name = 'Viktorovich', age = 18, sex = 'Male', student_group = 6;
INSERT INTO students set surname = 'Levshov', name = 'Vadim', middle_name = 'Dmitrievna', age = 17, sex = 'Male', student_group = 6;
INSERT INTO students set surname = 'Frolova', name = 'Anna', middle_name = 'Igorevna', age = 18, sex = 'Female', student_group = 6;
INSERT INTO students set surname = 'Lovcheva', name = 'Tatyana', middle_name = 'Semenovna', age = 17, sex = 'Female', student_group = 6;
INSERT INTO students set surname = 'Kolikova', name = 'Sasha', middle_name = 'Sergeevna', age = 18, sex = 'Female', student_group = 6;

/*Engineering*/
INSERT INTO students set surname = 'Dolotov', name = 'Dmitry', middle_name = 'Stanislavovich', age = 18, sex = 'Male', student_group = 7;
INSERT INTO students set surname = 'Molotov', name = 'Mihail', middle_name = 'Leonidovich', age = 19, sex = 'Male', student_group = 7;
INSERT INTO students set surname = 'Ladina', name = 'Anna', middle_name = 'Igorevna', age = 19, sex = 'Female', student_group = 7;
INSERT INTO students set surname = 'Lazareva', name = 'Lida', middle_name = 'Semenovna', age = 18, sex = 'Female', student_group = 7;
INSERT INTO students set surname = 'Sushentsova', name = 'Katerina', middle_name = 'Ivanovna', age = 18, sex = 'Female', student_group = 7;

INSERT INTO students set surname = 'Sokolov', name = 'Evgeniy', middle_name = 'Viktorovich', age = 18, sex = 'Male', student_group = 8;
INSERT INTO students set surname = 'Semenov', name = 'Anton', middle_name = 'Leonidovich', age = 17, sex = 'Male', student_group = 8;
INSERT INTO students set surname = 'Lavrova', name = 'Vasilisa', middle_name = 'Sergeevna', age = 18, sex = 'Female', student_group = 8;
INSERT INTO students set surname = 'Birukova', name = 'Zuhra', middle_name = 'Semenovna', age = 17, sex = 'Female', student_group = 8;
INSERT INTO students set surname = 'Volcheva', name = 'Mariya', middle_name = 'Dmitrievna', age = 18, sex = 'Female', student_group = 8;

INSERT INTO students set surname = 'Lovchev', name = 'Renat', middle_name = 'Stanislavovich', age = 19, sex = 'Male', student_group = 9;
INSERT INTO students set surname = 'Korotkov', name = 'Vladimir', middle_name = 'Valentinovich', age = 20, sex = 'Male', student_group = 9;
INSERT INTO students set surname = 'Kotova', name = 'Lida', middle_name = 'Igorevna', age = 20, sex = 'Female', student_group = 9;
INSERT INTO students set surname = 'Nosova', name = 'Soniya', middle_name = 'Viktorovna', age = 20, sex = 'Female', student_group = 9;
INSERT INTO students set surname = 'Domina', name = 'Milla', middle_name = 'Ivanovna', age = 19, sex = 'Female', student_group = 9;

SELECT * FROM students WHERE age = 19;

SELECT 
    st.* 
FROM 
    students AS st
JOIN 
    university_groups AS ug 
ON 
    st.student_group = ug.group_id
WHERE 
    ug.group_name = 'Economics';

SELECT 
    st.* 
FROM 
    students AS st
JOIN 
    university_groups AS ug 
ON 
    st.student_group = ug.group_id
JOIN 
    faculty AS fc 
ON 
    fc.id = ug.group_faculty
WHERE 
    fc.faculty_name = 'Economics and management';

SELECT 
    fc.faculty_name, 
    ug.group_name 
FROM 
    students AS st
JOIN 
    university_groups AS ug 
ON 
    st.student_group = ug.group_id
JOIN 
    faculty AS fc 
ON 
    fc.id = ug.group_faculty
WHERE 
    st.surname = 'Lovchev' 
    AND st.name = 'Renat' 
    AND st.middle_name = 'Stanislavovich';
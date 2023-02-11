CREATE TABLE "user" (
 "id" SERIAL PRIMARY KEY,
 "name" VARCHAR(25) 
 );
 
 
 INSERT INTO "user" ("name")
 VALUES ('Jaffer'), ('Linssi'), ('Chris'), ('David');
 
 CREATE TABLE "hobby" (
id SERIAL PRIMARY KEY,
description VARCHAR(100)
 );
 
 INSERT INTO "hobby" ("description")
 VALUES ('Video Games'), ('Pottery'), ('Coffee'),
 ('Paintball'), ('Rock Climbing');
 
 ------- JUNCTION TABLE
 CREATE TABLE "user_hobby" (
 id SERIAL PRIMARY KEY,
 user_id INT REFERENCES "user", -- foreign key
 hobby_id INT REFERENCES "hobby", -- foreign key
 proficiency INT DEFAULT 2
 );
 
 INSERT INTO "user_hobby" ("user_id", "hobby_id", "proficiency")
VALUES (1, 1, 4), (2, 1, 5), (3, 1, 2), (4, 1, 1), (4, 2, 3),
(1, 2, 4), (3, 3, 2), (4, 3, 5), (2, 4, 4);
 
 SELECT * FROM "user";
 
select * from "user" join "user_hobby" on "user"."id"= "user_hobby"."user_id"
join "hobby" on "hobby"."id" = "user_hobby".hobby_id;


select "user".name, "hobby".description, "user_hobby".proficiency from "user" join "user_hobby" on "user"."id"= "user_hobby"."user_id"
join "hobby" on "hobby"."id" = "user_hobby".hobby_id;

--avg proficiency (AVG) for each hobby
--MAX maximum value
--SUM total of all
--MIN minimum value
--
select "description", AVG("user_hobby".proficiency) from "hobby" 
join "user_hobby" on "user_hobby".hobby_id = "hobby".id
group by "hobby".description

;
--select all users who have a proficiency of 4 or more on videogames

select "user".name, "user_hobby".proficiency from "user"
join "user_hobby" on "user_hobby".user_id = "user".id
where "proficiency" < 4 and "user_hobby".hobby_id = 1
;
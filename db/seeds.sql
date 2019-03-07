INSERT INTO `behavior_db`.`teachers`
(`userName`,
`userPassword`,
`firstName`,
`lastName`,
`authLevel`,
`email`,
`active`,
`createdAt`,
`updatedAt`,
`last_login`,
`status`)
VALUES
('sarahk',
'$2a$08$3B0QraGhlhPaqaZEuOzqSeDyvvEZ1TI4G3u3H6RE7P6fq4I60aUYy',
'Sarah',
'Kinneer',
'staff',
'sarahK@gmail.com',
'1',
CURDATE(),
CURDATE(),
CURDATE(),
'active');


INSERT INTO `behavior_db`.`students`
(`userName`,
`userPassword`,
`firstName`,
`lastName`,
`active`,
`createdAt`,
`updatedAt`,
`last_login`,
`status`)
VALUES
('billy',
'$2a$08$c263U0s.Qz23pDlAFOOOzuA4jZfbVGdWLMRwVubaV/ZpG9KaVV7qy',
'Billy',
'Sterling',
'1',
CURDATE(),
CURDATE(),
CURDATE(),
'active');


INSERT INTO `behavior_db`.`students`
(`userName`,
`userPassword`,
`firstName`,
`lastName`,
`active`,
`createdAt`,
`updatedAt`,
`last_login`,
`status`)
VALUES
('jodi',
'$2a$08$3OmTNlyEKBo2ASR.jgO6FuhRCsCxlpOpbqsboKxIE33DqIKBzvDWO',
'Jodi',
'Woodward',
'1',
CURDATE(),
CURDATE(),
CURDATE(),
'active');


INSERT INTO `behavior_db`.`students`
(`userName`,
`userPassword`,
`firstName`,
`lastName`,
`active`,
`createdAt`,
`updatedAt`,
`last_login`,
`status`)
VALUES
('billyboy',
'$2a$08$.2iYfvxlwEk2JqTR20lo8ufXOxVdBFHEadGoKvwku6PDNHbXSLxmC',
'Billy',
'Sterling',
'1',
CURDATE(),
CURDATE(),
CURDATE(),
'active');


INSERT INTO `behavior_db`.`teacherstudents`
(`createdAt`,
`updatedAt`,
`TeacherUserName`,
`StudentUserName`)
VALUES
(CURDATE(),
CURDATE(),
'sarahk',
'billy');


INSERT INTO `behavior_db`.`teacherstudents`
(`createdAt`,
`updatedAt`,
`TeacherUserName`,
`StudentUserName`)
VALUES
(CURDATE(),
CURDATE(),
'sarahk',
'jodi');


INSERT INTO `behavior_db`.`teacherstudents`
(`createdAt`,
`updatedAt`,
`TeacherUserName`,
`StudentUserName`)
VALUES
(CURDATE(),
CURDATE(),
'sarahk',
'billyboy');



INSERT INTO `behavior_db`.`behaviors`
(`active`,
`behavior`,
`goalMet`,
`goalTracked`,
`average`,
`createdAt`,
`updatedAt`,
`StudentUserName`)
VALUES
('1',
'Sit still in class',
'0',
'0',
'0',
CURDATE(),
CURDATE(),
'billy');

INSERT INTO `behavior_db`.`behaviors`
(`active`,
`behavior`,
`goalMet`,
`goalTracked`,
`average`,
`createdAt`,
`updatedAt`,
`StudentUserName`)
VALUES
('1',
'Raise hand for attention',
'0',
'0',
'0',
CURDATE(),
CURDATE(),
'jodi');

INSERT INTO `behavior_db`.`behaviors`
(`active`,
`behavior`,
`goalMet`,
`goalTracked`,
`average`,
`createdAt`,
`updatedAt`,
`StudentUserName`)
VALUES
('1',
'Use inside voice',
'0',
'0',
'0',
CURDATE(),
CURDATE(),
'billyboy');



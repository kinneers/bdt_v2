INSERT INTO `behavior_db`.`teachers`
(`userName`,
`firstname`,
`lastname`,
`authLevel`,
`email`,
`active`,
`createdAt`,
`updatedAt`,
`last_login`,
`status`)
VALUES
('sarahk',
'Sarah',
'Kinneer',
'20',
'',
'1',
CURDATE(),
CURDATE(),
CURDATE(),
'active');

-- STUDENTS ---------------------

INSERT INTO `behavior_db`.`students`
(`userName`,
`firstname`,
`lastname`,
`active`,
`createdAt`,
`updatedAt`,
`last_login`,
`status`)
VALUES
('timmyt',
'Timmy',
'Travis',
'1',
CURDATE(),
CURDATE(),
CURDATE(),
'active');

INSERT INTO `behavior_db`.`students`
(`userName`,
`firstname`,
`lastname`,
`active`,
`createdAt`,
`updatedAt`,
`last_login`,
`status`)
VALUES
('marym',
'Mary',
'Martin',
'1',
CURDATE(),
CURDATE(),
CURDATE(),
'active');

INSERT INTO `behavior_db`.`students`
(`userName`,
`firstname`,
`lastname`,
`active`,
`createdAt`,
`updatedAt`,
`last_login`,
`status`)
VALUES
('suzys',
'Suzy',
'Smith',
'1',
CURDATE(),
CURDATE(),
CURDATE(),
'active');

-- TEACHER-STUDENT -------------------------------

INSERT INTO `behavior_db`.`teacherstudents`
(`createdAt`,
`updatedAt`,
`TeacherUserName`,
`StudentUserName`)
VALUES
(CURDATE(),
CURDATE(),
'sarahk',
'timmyt');

INSERT INTO `behavior_db`.`teacherstudents`
(`createdAt`,
`updatedAt`,
`TeacherUserName`,
`StudentUserName`)
VALUES
(CURDATE(),
CURDATE(),
'sarahk',
'marym');

INSERT INTO `behavior_db`.`teacherstudents`
(`createdAt`,
`updatedAt`,
`TeacherUserName`,
`StudentUserName`)
VALUES
(CURDATE(),
CURDATE(),
'sarahk',
'suzys');

-- BEHAVIOR -------------------------

-- 2 behaviors for timmyt

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
'timmyt');

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
'Mind your own business',
'0',
'0',
'0',
CURDATE(),
CURDATE(),
'timmyt');


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
'marym');

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
'suzys');

-- BEHAVIOR DATA ---------------------------------

INSERT INTO `behavior_db`.`behavdata`
(`behavInfo`,
`createdAt`,
`updatedAt`,
`BehaviorId`)
VALUES
(false,
'2019-03-07 22:01:20',
'2019-03-07 22:01:20',
'1');

INSERT INTO `behavior_db`.`behavdata`
(`behavInfo`,
`createdAt`,
`updatedAt`,
`BehaviorId`)
VALUES
(false,
'2019-03-07 22:01:20',
'2019-03-07 22:01:20',
'2');

INSERT INTO `behavior_db`.`behavdata`
(`behavInfo`,
`createdAt`,
`updatedAt`,
`BehaviorId`)
VALUES
(false,
'2019-03-07 22:01:20',
'2019-03-07 22:01:20',
'3');

INSERT INTO `behavior_db`.`behavdata`
(`behavInfo`,
`createdAt`,
`updatedAt`,
`BehaviorId`)
VALUES
(true,
'2019-03-06 12:00:00',
'2019-03-06 12:00:00',
'4');

INSERT INTO `behavior_db`.`behavdata`
(`behavInfo`,
`createdAt`,
`updatedAt`,
`BehaviorId`)
VALUES
(false,
'2019-03-06 12:15:00',
'2019-03-06 12:15:00',
'4');

INSERT INTO `behavior_db`.`behavdata`
(`behavInfo`,
`createdAt`,
`updatedAt`,
`BehaviorId`)
VALUES
(true,
'2019-03-06 12:45:00',
'2019-03-06 12:45:00',
'4');

INSERT INTO `behavior_db`.`behavdata`
(`behavInfo`,
`createdAt`,
`updatedAt`,
`BehaviorId`)
VALUES
(true,
'2019-03-06 13:00:00',
'2019-03-06 13:00:00',
'4');

INSERT INTO `behavior_db`.`behavdata`
(`behavInfo`,
`createdAt`,
`updatedAt`,
`BehaviorId`)
VALUES
(true,
'2019-03-06 13:15:00',
'2019-03-06 13:15:00',
'4');

INSERT INTO `behavior_db`.`behavdata`
(`behavInfo`,
`createdAt`,
`updatedAt`,
`BehaviorId`)
VALUES
(false,
'2019-03-06 13:30:00',
'2019-03-06 13:30:00',
'4');

INSERT INTO `behavior_db`.`behavdata`
(`behavInfo`,
`createdAt`,
`updatedAt`,
`BehaviorId`)
VALUES
(true,
'2019-03-06 14:00:00',
'2019-03-06 14:00:00',
'4');

INSERT INTO `behavior_db`.`behavdata`
(`behavInfo`,
`createdAt`,
`updatedAt`,
`BehaviorId`)
VALUES
(true,
'2019-03-06 14:15:00',
'2019-03-06 14:15:00',
'4');

INSERT INTO `behavior_db`.`behavdata`
(`behavInfo`,
`createdAt`,
`updatedAt`,
`BehaviorId`)
VALUES
(true,
'2019-03-06 14:30:00',
'2019-03-06 14:30:00',
'4');

INSERT INTO `behavior_db`.`behavdata`
(`behavInfo`,
`createdAt`,
`updatedAt`,
`BehaviorId`)
VALUES
(true,
'2019-03-07 12:00:00',
'2019-03-07 12:00:00',
'4');

INSERT INTO `behavior_db`.`behavdata`
(`behavInfo`,
`createdAt`,
`updatedAt`,
`BehaviorId`)
VALUES
(false,
'2019-03-07 12:15:00',
'2019-03-07 12:15:00',
'4');

INSERT INTO `behavior_db`.`behavdata`
(`behavInfo`,
`createdAt`,
`updatedAt`,
`BehaviorId`)
VALUES
(true,
'2019-03-07 12:45:00',
'2019-03-07 12:45:00',
'4');

INSERT INTO `behavior_db`.`behavdata`
(`behavInfo`,
`createdAt`,
`updatedAt`,
`BehaviorId`)
VALUES
(true,
'2019-03-07 13:00:00',
'2019-03-07 13:00:00',
'4');

INSERT INTO `behavior_db`.`behavdata`
(`behavInfo`,
`createdAt`,
`updatedAt`,
`BehaviorId`)
VALUES
(true,
'2019-03-07 13:15:00',
'2019-03-07 13:15:00',
'4');

INSERT INTO `behavior_db`.`behavdata`
(`behavInfo`,
`createdAt`,
`updatedAt`,
`BehaviorId`)
VALUES
(false,
'2019-03-07 13:30:00',
'2019-03-07 13:30:00',
'4');

INSERT INTO `behavior_db`.`behavdata`
(`behavInfo`,
`createdAt`,
`updatedAt`,
`BehaviorId`)
VALUES
(true,
'2019-03-07 14:00:00',
'2019-03-07 14:00:00',
'4');
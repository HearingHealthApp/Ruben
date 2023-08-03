--users to interact
--userId: 1
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('TheMainMan', 'user1@test.com', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
--userId: 2
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('JohnCaneer', 'user2@test.com', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
--userId: 3
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('JaneCanteer', 'user3@test.com', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
--userId: 4
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('DonaldDuck', 'user4@test.com', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
--userId: 5
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('Midsomar', 'user5@test.com', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
--userId: 6
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('thereal1', 'user6@test.com', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
--userId: 7
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('UnderDog', 'user7@test.com', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
--userId: 8
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('MissSupper', 'user8@test.com', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
--userId: 9
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('SuperMan', 'user9@test.com', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
--userId: 10
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('Batman', 'user10@test.com', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');

-- sample doctor --userId: 11
INSERT INTO users (username, email, password, first_name, last_name, is_doctor) VALUES ('Dr.Chavez', 'doctor1@test.com', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user', true);
INSERT INTO doctors (user_id, registration_number) VALUES (11, '12345');

-- sample doctor --userId: 12
INSERT INTO users (username, email, password, first_name, last_name, is_doctor) VALUES ('Dr.Stuart', 'doctor2@test.com', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user', true);
INSERT INTO doctors (user_id, registration_number) VALUES (12, '12345');

-- sample doctor --userId: 13
INSERT INTO users (username, email, password, first_name, last_name, is_doctor) VALUES ('Dr.Ganiyu', 'doctor3@test.com', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user', true);
INSERT INTO doctors (user_id, registration_number) VALUES (13, '12345');


--sample comments


-- sample users
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test12', 'test12@test.com12', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test13', 'test13@test.com13', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test14', 'test14@test.com14', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test15', 'test15@test.com15', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test16', 'test16@test.com16', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test18', 'test17@test.com17', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test17', 'test18@test.com18', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test19', 'test19@test.com19', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test20', 'test20@test.com20', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test21', 'test21@test.com21', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test22', 'test22@test.com22', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test23', 'test23@test.com23', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test24', 'test24@test.com24', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test25', 'test25@test.com25', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test26', 'test26@test.com26', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test27', 'test27@test.com27', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test28', 'test28@test.com28', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test29', 'test29@test.com29', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test30', 'test30@test.com30', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test31', 'test31@test.com31', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test32', 'test32@test.com32', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test33', 'test33@test.com33', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test34', 'test34@test.com34', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test35', 'test35@test.com35', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test36', 'test36@test.com36', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test37', 'test37@test.com37', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test38', 'test38@test.com38', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test39', 'test39@test.com39', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test40', 'test40@test.com40', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test41', 'test41@test.com41', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test42', 'test42@test.com42', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test43', 'test43@test.com43', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test44', 'test44@test.com44', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test45', 'test45@test.com45', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test46', 'test46@test.com46', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test47', 'test47@test.com47', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test48', 'test48@test.com48', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test49', 'test49@test.com49', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test50', 'test50@test.com50', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test51', 'test1@test.com51', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test52', 'test2@test.com52', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test53', 'test3@test.com53', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test54', 'test4@test.com54', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test55', 'test5@test.com55', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test56', 'test6@test.com56', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test57', 'test7@test.com57', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test58', 'test8@test.com58', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test59', 'test9@test.com59', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test60', 'test10@test.com60', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test61', 'test11@test.com61', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test62', 'test12@test.com62', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test63', 'test13@test.com63', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test64', 'test14@test.com64', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test65', 'test15@test.com65', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test66', 'test16@test.com66', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test68', 'test17@test.com67', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test67', 'test18@test.com68', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test69', 'test19@test.com69', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test70', 'test20@test.com70', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test71', 'test21@test.com71', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test72', 'test22@test.com72', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test73', 'test23@test.com73', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test74', 'test24@test.com74', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test75', 'test25@test.com75', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test76', 'test26@test.com76', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test77', 'test27@test.com77', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test78', 'test28@test.com78', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test79', 'test29@test.com79', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test80', 'test30@test.com80', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test81', 'test31@test.com81', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test82', 'test32@test.com82', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test83', 'test33@test.com83', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test84', 'test34@test.com84', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test85', 'test35@test.com85', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test86', 'test36@test.com86', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test87', 'test37@test.com87', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test88', 'test38@test.com88', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test89', 'test39@test.com89', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test90', 'test40@test.com90', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test91', 'test41@test.com91', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test92', 'test42@test.com92', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test93', 'test43@test.com93', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test94', 'test44@test.com94', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test95', 'test45@test.com95', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test96', 'test46@test.com96', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test97', 'test47@test.com97', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test98', 'test48@test.com98', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test99', 'test49@test.com99', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('test100', 'test50@test.com100', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user');
INSERT INTO users (username, email, password, first_name, last_name) VALUES ('geperez8', 'gerardoperez8a@gmail.com', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'Gerardo', 'Perez');



--sample post --postId:1
INSERT INTO posts (title, content, category, is_anonymous, user_id, username) VALUES ('Hello, Everyone', 'Hello, this is my first time here. I am happy to be on the platform and excited to get to meet all of you!', 'General', false, 1, 'TheMainMan');

--sample post --postId:2
INSERT INTO posts (title, content, category, is_anonymous, user_id, username) VALUES ('What are some best practices for going to concerts? ', 'Im going to a concert this weekend and am not sure what the best practices that minimize or prevent hearing damage. Any advice would be great.', 'Lifestyle', false, 2, 'JohnCaneer');

--sample post --postId:3
INSERT INTO posts (title, content, category, is_anonymous, user_id, username) VALUES ('Should I be concerned about my commute?', 'I have to commute evryday to work. I take the BART from Oakland to San Fransisco. Every time we into the tunnel everything becomes super loud. Should i take precautionary measures to try to prevent hearing loss in such a scenario?', 'Lifestyle', false, 7, 'UnderDog');

--sample post --postId:4
INSERT INTO posts (title, content, category, is_anonymous, user_id, username) VALUES ('Where should I got to get my hearing checked?', '', 'Medical', false, 3, 'JaneCanteer');

--sample post --postId:5
INSERT INTO posts (title, content, category, is_anonymous, user_id, username) VALUES ('What is the best way to teach my kids about being considerate of their hearing?', '', 'Lifestyle', false, 8, 'MissSupper');

--sample post --postId:6
INSERT INTO posts (title, content, category, is_anonymous, user_id, username) VALUES ('How do I access my notifications?', '', 'General', false, 1, 'TheMainMan');

--sample post --postId:7
INSERT INTO posts (title, content, category, is_anonymous, user_id, username) VALUES ('I hear ringing in my ear, is that bad?', '', 'Medical', true, 1, 'TheMainMan');

--sample post --postId:8
INSERT INTO posts (title, content, category, is_anonymous, user_id, username) VALUES ('Tips for preserving your hearing', 'If you cant avoid loud noise, protect your ears with earplugs, ear molds, noise-canceling headphones, earmuffs, or wadding materials. Also, turn the volume down when listening to your music or binge-watching with your headphones on 60% volume for no longer than 60 minutes.', 'Medical', false, 11, 'Dr.Chavez');

--sample post --postId:9
INSERT INTO posts (title, content, category, is_anonymous, user_id, username) VALUES ('Common signs of hearing loss', 'If you have any of these signs or symptoms, you may have hearing loss caused by noise: Speech and other sounds seem muffled, Trouble hearing high-pitched sounds (e.g., birds, doorbell, telephone, alarm clock), Trouble understanding conversations when you are in a noisy place, such as a restaurant, Trouble understanding speech over the phone, or Trouble hearing speech consonants (e.g., trouble hearing the difference between s and f,  between p and t, or between sh and th in speech). If you have any signs of hearing loss, get tested by a qualified healthcare provider.', 'Medical', false, 13, 'Dr.Ganiyu');

--sample comments with their notifications

--sample comment --commentId: 1
INSERT INTO comments (post_id , user_id, username, content, is_anonymous, from_doctor) VALUES (7, 10, 'Batman', 'I am someone who suffers from Tinnitus and, from my experience, think this might be a possible explanation for the ringing. Though, I would say to get your hearing checked from an actual proffesional just to be sure', false, false);
INSERT INTO notifications (user_id, post_id, comment_id, message) VALUES (1, 7, 1, 'Batman commented on your post titled "I hear ringing in my ear, is that bad?"');

--sample comment --commentId: 2
INSERT INTO comments (post_id , user_id, username, content, is_anonymous, from_doctor) VALUES (7, 12, 'Dr.Stuart', 'As the user above has mentioned, tinnitus is definitely a possibility. To be as sure as possible, I would also recommend you seek out a professional and have them run through the symptoms just to be completely sure.', false, true);
INSERT INTO notifications (user_id, post_id, comment_id, message) VALUES (1, 7, 1, 'Dr.Stuart commented on your post titled "I hear ringing in my ear, is that bad?"');


--sample comment --commentId: 3
-- INSERT INTO comments (post_id , user_id, username, content, is_anonymous, from_doctor) VALUES (postId, userId, username, content, is_anonymous, from_doctor);
-- INSERT INTO notifications (user_id, post_id, comment_id, message) VALUES (userId, postId, 2, "");


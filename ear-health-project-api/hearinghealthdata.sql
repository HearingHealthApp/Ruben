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
INSERT INTO doctors (user_id, registration_number) VALUES (11, '0000000000');

-- sample doctor --userId: 12
INSERT INTO users (username, email, password, first_name, last_name, is_doctor) VALUES ('Dr.Stuart', 'doctor2@test.com', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user', true);
INSERT INTO doctors (user_id, registration_number) VALUES (12, '0000000001');

-- sample doctor --userId: 13
INSERT INTO users (username, email, password, first_name, last_name, is_doctor) VALUES ('Dr.Ganiyu', 'doctor3@test.com', '$2b$10$uu8xM9X2soPuBr0ArpI9FOOly9NaN1xPhv2tYoAj.6Il4UaMpAi3W', 'test', 'user', true);
INSERT INTO doctors (user_id, registration_number) VALUES (13, '0000000002');


--sample comments


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


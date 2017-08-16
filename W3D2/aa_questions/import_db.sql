DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  fname TEXT NOT NULL,
  lname TEXT NOT NULL
);

DROP TABLE IF EXISTS questions;

CREATE TABLE questions (
  id INTEGER PRIMARY KEY, --Usually we always want an ID in case we want to access a single row
                          --This prevents us from having to send two column entries as a unique ID
  title VARCHAR(255),
  body TEXT,
  author_id INTEGER NOT NULL,

  FOREIGN KEY (author_id) REFERENCES users(id) --this speeds up SQL when joining tables: SQL does not have to
);                                           --search through to check for dups first; it also helps when
                                            -- communicating with different RDBMS platforms


DROP TABLE IF EXISTS question_follows;

CREATE TABLE question_follows (
  id INTEGER PRIMARY KEY,
  follower_id INTEGER NOT NULL,
  question_id INTEGER NOT NULL,

  FOREIGN KEY (follower_id) REFERENCES users(id),
  FOREIGN KEY (question_id) REFERENCES questions(id)
);

--why can't we just join users and questions if questions tabler has author_id?
--so if we just join tables it only provides all questions per author but not all users following questions

DROP TABLE IF EXISTS replies;

CREATE TABLE replies (
  id INTEGER PRIMARY KEY,
  user_id INTEGER NOT NULL, --Why are we making this table contain a replica of the question follows?
                            --There will be multiple lines with the same question id and same user id
                            --with different parent reply id, and in order to join we want to have a unique
                            --row for a follow_id and a question_id
  body TEXT NOT NULL,
  question_id INTEGER NOT NULL,
  parent_reply_id INTEGER,

  FOREIGN KEY (question_id) REFERENCES questions(id),
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (parent_reply_id) REFERENCES replies(id)
);

DROP TABLE IF EXISTS question_likes;

CREATE TABLE question_likes (
  id INTEGER PRIMARY KEY,
  question_id INTEGER NOT NULL,
  liked BOOLEAN NOT NULL,
  user_id INTEGER NOT NULL,

  FOREIGN KEY (question_id) REFERENCES questions(id)
  FOREIGN KEY (user_id) REFERENCES users(id)
);


INSERT INTO
  users (fname, lname)
VALUES
  ('Dillon', 'Luther'),
  ('Ken', 'Cheston'),
  ('Dallas', 'The Legend');

INSERT INTO
  questions (title, body, author_id)
VALUES
  ('Help me!', 'How do I do this?', (SELECT id FROM users WHERE lname = 'Luther')),
  ('Help me too!', 'Why do I need join tables?', (SELECT id FROM users WHERE lname = 'Cheston')),
  ('You idiots', 'What don''t you understand?', (SELECT id FROM users WHERE lname = 'The Legend'));

INSERT INTO
  question_follows (follower_id, question_id)
VALUES
  (1, 23);

INSERT INTO
  replies (user_id, body, question_id, parent_reply_id)
VALUES
  (1, 'Because we''re not brogrammers yet', 3, NULL);

INSERT INTO
  question_likes (question_id, liked, user_id)
VALUES
  (3, 'true', 2);

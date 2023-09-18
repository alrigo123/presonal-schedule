CREATE DATABASE schedule_todo;

USE schedule_todo;

CREATE TABLE Task (
  Id_task INT NOT NULL AUTO_INCREMENT,
  description TEXT,
  start TIME,
  end TIME,
  status BOOLEAN,
  PRIMARY KEY (Id_task)
);

INSERT INTO Task (description, start, end, status)
VALUES
  ('Task 1', '10:00', '11:00', FALSE),
  ('Task 2', '11:00', '12:00', FALSE),
  ('Task 3', '12:00', '1:00', FALSE),
  ('Task 4', '1:00', '2:00', FALSE);

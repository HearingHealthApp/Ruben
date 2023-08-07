\echo 'Delete and recreate hearinghealth db?'
\prompt 'Return for yes or control-C to cancel > ' answer

DROP DATABASE hearinghealth;
CREATE DATABASE hearinghealth;
\connect hearinghealth;

DROP TABLE users;
DROP TABLE doctors;
DROP TABLE notifications;
DROP TABLE posts;
DROP TABLE comments;


\i hearinghealth_schema.sql

\i hearinghealthdata.sql
\echo 'Delete and recreate lifetracker db?'
\prompt 'Return for yes or control-C to cancel > ' answer

DROP DATABASE hearinghealth;
CREATE DATABASE hearinghealth;
\connect hearinghealth;

\i hearinghealth_schema.sql
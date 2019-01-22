psql postgres -c "CREATE DATABASE test WITH ENCODING 'UTF8'"
psql -d test -c "CREATE TABLE users(Id SERIAL PRIMARY KEY, Name VARCHAR(50), Age integer, Image VARCHAR(255));"
psql -d test -c "INSERT INTO users (Name, Age, Image) VALUES ('Jerry',25, 'jerry.png'),('George',25, 'george.png');"
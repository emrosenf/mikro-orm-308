CREATE TABLE IF NOT EXISTS Account (
    accountNumber INTEGER PRIMARY KEY,
    streetName TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS AccountSegment (
    accountNumber INTEGER PRIMARY KEY,
    yearBuilt INTEGER NOT NULL
);

INSERT INTO Account VALUES(1, 'Sesame');
INSERT INTO AccountSegment VALUES(1, 1956);
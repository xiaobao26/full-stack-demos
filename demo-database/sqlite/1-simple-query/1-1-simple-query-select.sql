-- Simple expression
SELECT
    1 + 1;

-- Multiple expressions
SELECT
    10 / 5,
    2 * 4;

-- Get data from the tracks table such as trackid, track name, composer, and unit price
SELECT
    trackid,
    name,
    composer,
    unitprice
FROM
    tracks;

-- Get data from all columns, you specify the columns of the tracks table in the SELECT clause as follows:
SELECT
    trackid,
    name,
    albumid,
    mediatypeid,
    genreid,
    composer,
    milliseconds,
    bytes,
    unitprice
FROM
    tracks;

-- For a table with many columns, the query would be so long that time-consuming to type. 
-- To avoid this, you can use the asterisk (*), which is the shorthand for all columns of the table as follows:
SELECT * FROM tracks;
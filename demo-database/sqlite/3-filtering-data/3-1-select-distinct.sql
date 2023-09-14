-- Query unique rows from a table using the DISTINCT clause.
-- Suppose you want to know the cities where the customers locate, 
-- you can use the SELECT statement to get data from the city column of the customers table as follows:
SELECT
    city
FROM
    customers
ORDER BY
    city;

-- There are few duplicate rows such as Berlin London, and Mountain View To remove these duplicate rows, 
-- you use the DISTINCT clause as follows:
SELECT DISTINCT
    city
FROM
    customers
ORDER BY
    city;

-- SELECT DISTINCT on multiple columns
SELECT DISTINCT
    city,
    country
FROM
    customers
ORDER BY
    country;

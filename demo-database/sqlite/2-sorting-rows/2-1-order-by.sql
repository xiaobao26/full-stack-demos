-- The SELECT statement that does not use ORDER BY clause returns a result set that is not in any order.
SELECT
    name,
    milliseconds,
    albumid
FROM
    tracks
LIMIT
    10;

-- Sort the result set based on AlbumId column in ascending order
SELECT
    name,
    milliseconds,
    albumid
FROM
    tracks
ORDER BY
    albumid ASC
LIMIT
    10;

-- SQLite uses ASC by default so you can omit it in the above statement
SELECT
    name,
    milliseconds,
    albumid
FROM
    tracks
ORDER BY
    albumid
LIMIT
    10;

-- Suppose you want to sort the sorted result (by AlbumId) above by the Milliseconds column in descending order. 
-- In this case, you need to add the Milliseconds column to the ORDER BY clause as follows:
SELECT
    name,
    milliseconds,
    albumid
FROM
    tracks
ORDER BY
    albumid ASC,
    milliseconds DESC
LIMIT
    10;

-- When it comes to sorting, SQLite considers NULL to be smaller than any other value.
SELECT
    TrackId,
    Name,
    Composer
FROM
    tracks
ORDER BY
    Composer
LIMIT
    10;

-- SQLite 3.30.0 added the NULLS FIRST and NULLS LAST options to the ORDER BY clause. 
-- The NULLS FIRST option specifies that the NULLs will appear at the beginning of the 
-- result set while the NULLS LAST option place NULLs at the end of the result set.
-- Uses the NULLS LAST option to place NULLs after other values
SELECT
    TrackId,
    Name,
    Composer
FROM
    tracks
ORDER BY
    Composer NULLS LAST;
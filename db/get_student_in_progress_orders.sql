select * from ordertable
where user_id = $1 AND collected = false AND confirmed = false;
SELECT SUM(flashlights) from ordertable
where user_id = $1 AND collected = false AND confirmed = false;
SELECT SUM(pucs) from ordertable
where user_id = $1 AND collected = false AND confirmed = false;
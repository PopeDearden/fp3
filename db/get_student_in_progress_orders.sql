select * from ordertable
where user_id = $1 AND collected = false AND confirmed = false;
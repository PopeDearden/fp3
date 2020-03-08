select * from ordertable
where user_id = $1 AND collected = true AND confirmed = false;
update userinfo set confirmed = true
where user_id = $1;
update ordertable set confirmed = true
where user_id = $1;

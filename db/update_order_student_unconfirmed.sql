update userinfo set confirmed = false
where user_id = $1;
update ordertable set confirmed = false
where user_id = $1;

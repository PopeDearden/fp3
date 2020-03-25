select confirmed from userinfo
where user_id = $1
order by last_name;
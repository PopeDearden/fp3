select username, first_name, last_name, director_tag, user_id, sample_light_black,	sample_light_yellow	 from userinfo
where username = $1 AND password = $2;
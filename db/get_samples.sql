select username, first_name, last_name, director_tag, user_id, sample_light_black,	sample_puc_yellow, sample_light_yellow, sample_puc_black from userinfo
where user_id = $1;
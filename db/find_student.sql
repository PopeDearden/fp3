select username, director_tag, user_id from userinfo
where username = $1 AND password = $2;
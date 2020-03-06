select username, director_tag from userinfo
where username = $1 AND password = $2;
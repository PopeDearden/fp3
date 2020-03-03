select email, first_name, last_name, tag from director
where email = $1 AND password = $2;
select email, first_name, last_name from manager
where email = $1 AND password = $2;
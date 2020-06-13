select email, first_name, last_name, tag, stage from director
where tag = $1 AND password = $2;
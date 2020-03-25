select * from userinfo 
where director_tag = $1
order by last_name;
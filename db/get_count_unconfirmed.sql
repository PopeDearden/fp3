select count(confirmed) as false from userinfo
where director_tag = $1 and confirmed = false;

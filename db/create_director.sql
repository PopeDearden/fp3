insert into director (first_name, last_name, email, phone, school_name, school_street, school_city, school_state, school_zip, tag, stage, password)
values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12);
select * from director
where email = $1;
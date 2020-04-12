delete from invoice where tag = $1;
insert into invoice (tag, url, date)
values ($1, $2, $3);
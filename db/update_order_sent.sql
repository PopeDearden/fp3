update order_sent set fulfilled = true
where director_tag = $1;
update invoice set url = $2
where tag = $1;
update invoice set date = $3
where tag = $1;


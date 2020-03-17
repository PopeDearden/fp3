select * from order_sent 
inner join director ON director.tag = order_sent.director_tag
where order_sent.fulfilled = false;
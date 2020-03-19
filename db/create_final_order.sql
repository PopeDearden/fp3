insert into order_sent (black_flashlights, yellow_flashlights, yellow_pucs, black_pucs, director_tag, date, fulfilled)
values($1,$2,$3,0,$4, $5, false);
update ordertable set order_placed = true
where director_tag = $4  AND collected = true AND confirmed = true;
update director set stage = 'order sent'
where tag = $4;
SELECT 
    first_name, last_name, order_id, ordertable.user_id, ordertable.director_tag, first_name_cust, last_name_cust, phone_cust, email_cust, address_cust, flashlights, pucs, puc_black, flashlight_yellow, collected, ordertable.confirmed, order_placed, order_sent, archived, delivered, date
FROM 
    ordertable
inner join userinfo ON userinfo.user_id = ordertable.user_id

where ordertable.director_tag = $1 AND collected = TRUE AND ordertable.confirmed = FALSE
Order by
    user_id;

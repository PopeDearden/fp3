update ordertable set( 
            first_name_cust, 
            last_name_cust, 
            phone_cust, 
            email_cust, 
            address_cust, 
            flashlights, 
            pucs, 
            collected) =
            ($2,$3,$4,$5,$6,$7,$8,$9)
where order_id = $1 AND user_id =$10

update userinfo set (first_name,
            last_name,
            password,
            sample_light_black,
            sample_light_yellow,
            sample_puc_yellow,
            sample_puc_black,
            username) = ($1,$2,$3,$4,$5,$6,$7,$8)
where user_id = $9;
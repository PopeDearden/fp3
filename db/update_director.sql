update director set (first_name,
        last_name,
        email,
        phone,
        school_name,
        school_street,
        school_city,
        school_state,
        school_zip,
        tag,
        password,
        black_flash_sample,
        yellow_flash_sample,
        yellow_puc_sample,
        black_puc_sample) = ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15)
        where director_id = $16;
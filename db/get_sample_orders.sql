-- select * from director;
select first_name, last_name, email, phone, school_name, school_street, school_city, school_state, school_zip, black_flash_sample, yellow_flash_sample, yellow_puc_sample, black_puc_sample, sample_processed from director
where sample_processed = false;
select (black_flash_sample - sum(userinfo.sample_light_black)) as remaining_black_flash, (yellow_flash_sample - sum(userinfo.sample_light_yellow)) as remaining_yellow_flash, (yellow_puc_sample - sum(userinfo.sample_puc_yellow)) as remaining_yellow_puc, director.tag, director.school_name from director
inner join userinfo ON userinfo.director_tag = director.tag
where director.tag = $1
group by director.tag, director.black_flash_sample, director.yellow_flash_sample, director.yellow_puc_sample, director.school_name;
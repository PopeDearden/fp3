select userinfo.first_name, userinfo.last_name, userinfo.user_id,
sum(flashlights) as total_black_flashlights, 
(sum(flashlights)*30.00) as money_black_flashlights,
sum(flashlight_yellow) as total_yellow_flashlights, 
(sum(flashlight_yellow)*30.00) as money_yellow_flashlights,
sum(pucs) as total_yellow_pucs,
(sum(pucs)*(35.00)) as money_yellow_pucs,
userinfo.sample_light_black,
userinfo.sample_light_black * 15.00 as black_flash_cost,
userinfo.sample_light_yellow,
userinfo.sample_light_yellow * 15.00 as yellow_flash_cost,
userinfo.sample_puc_yellow,
(userinfo.sample_puc_yellow * (17.50 ) ) as yellow_puc_cost,
((sum(flashlights)*30.00)+(sum(flashlight_yellow))*30.00+(sum(pucs)*35.00)) as total_collected,
(userinfo.sample_light_black *15.00)+(userinfo.sample_light_yellow*15.00)+(userinfo.sample_puc_yellow*17.50) as Total_Sample_Cost,
((sum(flashlights)*30.00)+(sum(flashlight_yellow))*30.00+(sum(pucs)*35.00))-(userinfo.sample_light_black *15.00)-(userinfo.sample_light_yellow*15.00)-(userinfo.sample_puc_yellow*17.50) as Student_Balance
from ordertable
inner join userinfo ON userinfo.user_id = ordertable.user_id
where userinfo.director_tag = $1 AND ordertable.confirmed = TRUE AND ordertable.collected = TRUE
group by userinfo.first_name,
userinfo.user_id,
userinfo.last_name,
ordertable.user_id, 
userinfo.sample_light_black,
userinfo.sample_light_yellow,
userinfo.sample_puc_yellow
order by userinfo.last_name;



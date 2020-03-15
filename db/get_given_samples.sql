select sum(sample_light_black) as sample_light_black,	
sum(sample_light_yellow) as sample_light_yellow,	
sum(sample_puc_yellow) as sample_puc_yellow,	
sum(sample_puc_black) as sample_puc_black
from userinfo where director_tag  = $1;
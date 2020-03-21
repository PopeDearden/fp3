select sum(flashlights + pucs + flashlight_yellow + puc_black), sum(flashlights) as totalblackflash, sum(flashlight_yellow) as totalyellowflash, sum(pucs) as totalyellowlantern, sum(puc_black) as totalblacklantern, DATE(date) from ordertable
where collected = true AND date > current_date - interval '30' day
group by DATE(date)
ORDER by date asc;
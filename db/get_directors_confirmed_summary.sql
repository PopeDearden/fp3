select director.school_name, director_tag, sum(flashlights) as black_flashlights, sum(pucs) as yellow_pucs, sum(flashlight_yellow) as yellow_flashlights  from ordertable
inner join director on director.tag = ordertable.director_tag
where ordertable.collected = false and confirmed = false
group by(director_tag, director.school_name);
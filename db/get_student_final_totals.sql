select sum(flashlights) as BlackFlash, sum(flashlight_yellow) as YellowFlash, sum(pucs) as YellowPuc from ordertable
where user_id = $1 AND collected = true AND confirmed = true;
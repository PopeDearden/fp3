select director.school_name, invoice.tag, invoice.url, invoice.date 
from director
inner join invoice ON invoice.tag = director.tag
order by invoice.date desc;
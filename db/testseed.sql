insert into director (first_name, last_name, email, phone, school_name, school_street, school_city, school_state, school_zip, tag, stage, password, black_flash_sample, yellow_flash_sample, yellow_puc_sample, black_puc_sample, sample_processed)
values('Ian','Swanner','ianswaner@gmail.com','801-111-1111','Swaner High','123 Street','Layton','Utah','84041','-Swaner','registered','test123',50,50,50,0,false);

insert into userinfo (first_name, last_name, password, sample_light_black, sample_light_yellow, sample_puc_yellow,sample_puc_black, director_tag, username, user_id)
values('Sammuel','Adams','test123',1,0,1,0,'-Swaner','SammuelAdams-Swaner', 90001);

insert into ordertable(first_name_cust, last_name_cust, phone_cust, email_cust, address_cust, flashlights, pucs, director_tag, date, user_id, collected, confirmed, order_placed, order_sent, archived, delivered, flashlight_yellow, puc_black, good_flash, good_puc)
values('Customer','1','123-456-7899','Customer1@gmail.com','987 Street Seattle, Washington 45687',2,0,'-Swaner',to_timestamp('10 Mar 2020', 'DD Mon YYYY'),'90001','true','false','false','false','false','false',1,0, 0, 0);

insert into ordertable(first_name_cust, last_name_cust, phone_cust, email_cust, address_cust, flashlights, pucs, director_tag, date, user_id, collected, confirmed, order_placed, order_sent, archived, delivered, flashlight_yellow, puc_black, good_flash, good_puc)
values('Customer','2','123-456-7899','Customer2@gmail.com','654 Street Huston, Texas 56548',1,5,'-Swaner',to_timestamp('11 Mar 2020', 'DD Mon YYYY'),'90001','true','false','false','false','false','false',0,0, 0, 0);

insert into ordertable(first_name_cust, last_name_cust, phone_cust, email_cust, address_cust, flashlights, pucs, director_tag, date, user_id, collected, confirmed, order_placed, order_sent, archived, delivered, flashlight_yellow, puc_black, good_flash, good_puc)
values('Customer','3','123-456-7899','Customer3@gmail.com','321 Street Salt Lake City, UT 84041',0,1,'-Swaner',to_timestamp('10 Mar 2020', 'DD Mon YYYY'),'90001','true','false','false','false','false','false',4,0, 0, 0);

insert into userinfo (first_name, last_name, password, sample_light_black, sample_light_yellow, sample_puc_yellow,sample_puc_black, director_tag, username, user_id)
values('George','Washington','test123',0,1,1,0,'-Swaner','GeorgeWashington-Swaner', 90002);

insert into userinfo (first_name, last_name, password, sample_light_black, sample_light_yellow, sample_puc_yellow,sample_puc_black, director_tag, username, user_id)
values('Anna','Strong','test123',0,0,1,0,'-Swaner','AnnaStrong-Swaner', 90003);

insert into userinfo (first_name, last_name, password, sample_light_black, sample_light_yellow, sample_puc_yellow,sample_puc_black, director_tag, username, user_id)
values('Ben','Franklin','test123' ,1,1,1,0,'-Swaner','BenFranklin-Swaner', 90004);

insert into userinfo (first_name, last_name, password, sample_light_black, sample_light_yellow, sample_puc_yellow,sample_puc_black, director_tag, username, user_id)
values('Edmund','Hewlett','test123',0,0,0,0,'-Swaner','EdmundHewlett-Swaner', 90005);

insert into userinfo (first_name, last_name, password, sample_light_black, sample_light_yellow, sample_puc_yellow,sample_puc_black, director_tag, username, user_id)
values('Benjamin','Talmadge','test123' ,0,1,1,0,'-Swaner','BenjaminTalmadge-Swaner', 90006);

insert into userinfo (first_name, last_name, password, sample_light_black, sample_light_yellow, sample_puc_yellow,sample_puc_black, director_tag, username, user_id)
values('Jeffery','Zoomba','test123' ,1,0,0,0,'-Swaner','JefferyZoomba-Swaner', 90007);

insert into userinfo (first_name, last_name, password, sample_light_black, sample_light_yellow, sample_puc_yellow,sample_puc_black, director_tag, username, user_id)
values('Karson','Jackson','test123' ,0,1,0,0,'-Swaner','KarsonJackson-Swaner', 90008);

insert into userinfo (first_name, last_name, password, sample_light_black, sample_light_yellow, sample_puc_yellow,sample_puc_black, director_tag, username, user_id)
values('Stephanie','Purcell','test123' ,0,1,0,0,'-Swaner','StephaniePurcell-Swaner', 90009);

insert into userinfo (first_name, last_name, password, sample_light_black, sample_light_yellow, sample_puc_yellow,sample_puc_black, director_tag, username, user_id)
values('Kristin','Hampton','test123' ,0,1,0,0,'-Swaner','KristinHampton-Swaner', 90010);



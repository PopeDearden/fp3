insert into director (first_name, last_name, email, phone, school_name, school_street, school_city, school_state, school_zip, tag, stage, password, black_flash_sample, yellow_flash_sample, yellow_puc_sample, black_puc_sample, sample_processed)
values('Taylor','Dearden','asdf@gmail.com','801-111-1111','TESTING Highschool','123 Street','Layton','Utah','84041','-asdf','registered','test123',50,50,50,0,false);



insert into userinfo (first_name, last_name, password, sample_light_black, sample_light_yellow, sample_puc_yellow,sample_puc_black, director_tag, username, user_id)
values('Sammuel','Adams','test123',1,0,1,0,'-asdf','SammuelAdams-asdf', 90001);

insert into ordertable(first_name_cust, last_name_cust, phone_cust, email_cust, address_cust, flashlights, pucs, director_tag, date, user_id, collected, confirmed, order_placed, order_sent, archived, delivered, flashlight_yellow, puc_black, good_flash, good_puc)
values('Customer','1','123-456-7899','Customer1@gmail.com','987 Street Seattle, Washington 45687',2,0,'-asdf',to_timestamp('10 Mar 2020', 'DD Mon YYYY'),'90001','true','false','false','false','false','false',1,0, 0, 0);

insert into ordertable(first_name_cust, last_name_cust, phone_cust, email_cust, address_cust, flashlights, pucs, director_tag, date, user_id, collected, confirmed, order_placed, order_sent, archived, delivered, flashlight_yellow, puc_black, good_flash, good_puc)
values('Customer','2','123-456-7899','Customer2@gmail.com','654 Street Huston, Texas 56548',1,5,'-asdf',to_timestamp('11 Mar 2020', 'DD Mon YYYY'),'90001','true','false','false','false','false','false',0,0, 0, 0);

insert into ordertable(first_name_cust, last_name_cust, phone_cust, email_cust, address_cust, flashlights, pucs, director_tag, date, user_id, collected, confirmed, order_placed, order_sent, archived, delivered, flashlight_yellow, puc_black, good_flash, good_puc)
values('Customer','3','123-456-7899','Customer3@gmail.com','321 Street Salt Lake City, UT 84041',0,1,'-asdf',to_timestamp('10 Mar 2020', 'DD Mon YYYY'),'90001','true','false','false','false','false','false',4,0, 0, 0);




insert into userinfo (first_name, last_name, password, sample_light_black, sample_light_yellow, sample_puc_yellow,sample_puc_black, director_tag, username, user_id)
values('George','Washington','test123',0,1,1,0,'-asdf','GeorgeWashington-asdf', 90002);

insert into ordertable(first_name_cust, last_name_cust, phone_cust, email_cust, address_cust, flashlights, pucs, director_tag, date, user_id, collected, confirmed, order_placed, order_sent, archived, delivered, flashlight_yellow, puc_black, good_flash, good_puc)
values('Customer','4','123-456-7899','Customer4@gmail.com','456 Street Salt Lake City, UT 84041',0,1,'-asdf',to_timestamp('12 Mar 2020', 'DD Mon YYYY'),'90002','true','false','false','false','false','false',1,0, 0, 0);

insert into ordertable(first_name_cust, last_name_cust, phone_cust, email_cust, address_cust, flashlights, pucs, director_tag, date, user_id, collected, confirmed, order_placed, order_sent, archived, delivered, flashlight_yellow, puc_black, good_flash, good_puc)
values('Customer','5','123-456-7899','Customer5@gmail.com','789 Street Salt Lake City, UT 84041',5,1,'-asdf',to_timestamp('13 Mar 2020', 'DD Mon YYYY'),'90002','true','false','false','false','false','false',1,0, 0, 0);



insert into userinfo (first_name, last_name, password, sample_light_black, sample_light_yellow, sample_puc_yellow,sample_puc_black, director_tag, username, user_id)
values('Anna','Strong','test123',0,0,1,0,'-asdf','AnnaStrong-asdf', 90003);

insert into ordertable(first_name_cust, last_name_cust, phone_cust, email_cust, address_cust, flashlights, pucs, director_tag, date, user_id, collected, confirmed, order_placed, order_sent, archived, delivered, flashlight_yellow, puc_black, good_flash, good_puc)
values('Customer','6','123-456-7899','Customer6@gmail.com','753 Street Salt Lake City, UT 84041',5,1,'-asdf',to_timestamp('20 Mar 2020', 'DD Mon YYYY'),'90003','true','false','false','false','false','false',4,0, 0, 0);

insert into ordertable(first_name_cust, last_name_cust, phone_cust, email_cust, address_cust, flashlights, pucs, director_tag, date, user_id, collected, confirmed, order_placed, order_sent, archived, delivered, flashlight_yellow, puc_black, good_flash, good_puc)
values('Customer','7','123-456-7899','Customer7@gmail.com','159 Street Salt Lake City, UT 84041',1,1,'-asdf',to_timestamp('21 Mar 2020', 'DD Mon YYYY'),'90003','true','false','false','false','false','false',1,0, 0, 0);

insert into ordertable(first_name_cust, last_name_cust, phone_cust, email_cust, address_cust, flashlights, pucs, director_tag, date, user_id, collected, confirmed, order_placed, order_sent, archived, delivered, flashlight_yellow, puc_black, good_flash, good_puc)
values('Customer','8','123-456-7899','Customer8@gmail.com','159 Street Salt Lake City, UT 84041',1,1,'-asdf',to_timestamp('22 Mar 2020', 'DD Mon YYYY'),'90003','true','false','false','false','false','false',1,0, 0, 0);

insert into ordertable(first_name_cust, last_name_cust, phone_cust, email_cust, address_cust, flashlights, pucs, director_tag, date, user_id, collected, confirmed, order_placed, order_sent, archived, delivered, flashlight_yellow, puc_black, good_flash, good_puc)
values('Customer','9','123-456-7899','Customer9@gmail.com','518 Street Salt Lake City, UT 84041',1,1,'-asdf',to_timestamp('23 Mar 2020', 'DD Mon YYYY'),'90003','true','false','false','false','false','false',1,0, 0, 0);



insert into userinfo (first_name, last_name, password, sample_light_black, sample_light_yellow, sample_puc_yellow,sample_puc_black, director_tag, username, user_id)
values('Ben','Franklin','test123' ,1,1,1,0,'-asdf','BenFranklin-asdf', 90004);

insert into ordertable(first_name_cust, last_name_cust, phone_cust, email_cust, address_cust, flashlights, pucs, director_tag, date, user_id, collected, confirmed, order_placed, order_sent, archived, delivered, flashlight_yellow, puc_black, good_flash, good_puc)
values('Customer','10','123-456-7899','Customer10@gmail.com','742 Street Salt Lake City, UT 84041',1,1,'-asdf',to_timestamp('24 Mar 2020', 'DD Mon YYYY'),'90004','true','false','false','false','false','false',1,0, 0, 0);

insert into ordertable(first_name_cust, last_name_cust, phone_cust, email_cust, address_cust, flashlights, pucs, director_tag, date, user_id, collected, confirmed, order_placed, order_sent, archived, delivered, flashlight_yellow, puc_black, good_flash, good_puc)
values('Customer','11','123-456-7899','Customer11@gmail.com','247 Street Salt Lake City, UT 84041',1,1,'-asdf',to_timestamp('25 Mar 2020', 'DD Mon YYYY'),'90004','true','false','false','false','false','false',1,0, 0, 0);



insert into userinfo (first_name, last_name, password, sample_light_black, sample_light_yellow, sample_puc_yellow,sample_puc_black, director_tag, username, user_id)
values('Edmund','Hewlett','test123',0,0,0,0,'-asdf','EdmundHewlett-asdf', 90005);

insert into ordertable(first_name_cust, last_name_cust, phone_cust, email_cust, address_cust, flashlights, pucs, director_tag, date, user_id, collected, confirmed, order_placed, order_sent, archived, delivered, flashlight_yellow, puc_black, good_flash, good_puc)
values('Customer','12','123-456-7899','Customer12@gmail.com','852 Street Salt Lake City, UT 84041',1,1,'-asdf',to_timestamp('25 Mar 2020', 'DD Mon YYYY'),'90005','true','false','false','false','false','false',1,0, 0, 0);

insert into ordertable(first_name_cust, last_name_cust, phone_cust, email_cust, address_cust, flashlights, pucs, director_tag, date, user_id, collected, confirmed, order_placed, order_sent, archived, delivered, flashlight_yellow, puc_black, good_flash, good_puc)
values('Customer','13','123-456-7899','Customer13@gmail.com','659 Street Salt Lake City, UT 84041',1,1,'-asdf',to_timestamp('26 Mar 2020', 'DD Mon YYYY'),'90005','true','false','false','false','false','false',1,0, 0, 0);



insert into userinfo (first_name, last_name, password, sample_light_black, sample_light_yellow, sample_puc_yellow,sample_puc_black, director_tag, username, user_id)
values('Benjamin','Talmadge','test123' ,0,1,1,0,'-asdf','BenjaminTalmadge-asdf', 90006);



insert into userinfo (first_name, last_name, password, sample_light_black, sample_light_yellow, sample_puc_yellow,sample_puc_black, director_tag, username, user_id)
values('Jeffery','Zoomba','test123' ,1,0,0,0,'-asdf','JefferyZoomba-asdf', 90007);



insert into userinfo (first_name, last_name, password, sample_light_black, sample_light_yellow, sample_puc_yellow,sample_puc_black, director_tag, username, user_id)
values('Karson','Jackson','test123' ,0,1,0,0,'-asdf','KarsonJackson-asdf', 90008);



insert into userinfo (first_name, last_name, password, sample_light_black, sample_light_yellow, sample_puc_yellow,sample_puc_black, director_tag, username, user_id)
values('Stephanie','Purcell','test123' ,0,1,0,0,'-asdf','StephaniePurcell-asdf', 90009);



insert into userinfo (first_name, last_name, password, sample_light_black, sample_light_yellow, sample_puc_yellow,sample_puc_black, director_tag, username, user_id)
values('Kristin','Hampton','test123' ,0,1,0,0,'-asdf','KristinHampton-asdf', 90010);



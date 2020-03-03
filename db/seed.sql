CREATE TABLE "admin" (
	"admin_id" serial NOT NULL,
	"email" int NOT NULL,
	"first_name" TEXT NOT NULL,
	"last_name" TEXT NOT NULL,
	"password" int NOT NULL,
	CONSTRAINT "admin_pk" PRIMARY KEY ("admin_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "manager" (
	"manager_id" serial NOT NULL,
	"first_name" TEXT NOT NULL,
	"last_name" TEXT NOT NULL,
	"email" TEXT NOT NULL,
	"phone" TEXT NOT NULL,
	"password" int NOT NULL,
	CONSTRAINT "manager_pk" PRIMARY KEY ("manager_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "director" (
	"director_id" serial NOT NULL,
	"first_name" TEXT NOT NULL,
	"last_name" TEXT NOT NULL,
	"email" TEXT NOT NULL,
	"phone" TEXT NOT NULL,
	"school_name" TEXT NOT NULL,
	"school_street" TEXT NOT NULL,
	"school_city" TEXT NOT NULL,
	"school_state" TEXT NOT NULL,
	"school_zip" TEXT NOT NULL,
	"tag" TEXT NOT NULL,
	"stage" TEXT NOT NULL,
	"password" TEXT NOT NULL,
	CONSTRAINT "director_pk" PRIMARY KEY ("director_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "userinfo" (
	"user_id" serial NOT NULL,
	"fisrt_name" TEXT NOT NULL,
	"last_name" TEXT NOT NULL,
	"email" TEXT NOT NULL,
	"director_tag" TEXT NOT NULL,
	"password" TEXT NOT NULL,
	"sample_light_black" int NOT NULL,
	"sample_light_yellow" int NOT NULL,
	"sample_puc_yellow" int NOT NULL,
	"sample_puc_black" int NOT NULL,
	CONSTRAINT "userinfo_pk" PRIMARY KEY ("user_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "login" (
	"login_id" serial NOT NULL,
	"client_id" int NOT NULL,
	"client_type" TEXT NOT NULL,
	"hash" TEXT NOT NULL,
	CONSTRAINT "login_pk" PRIMARY KEY ("login_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "order_sent" (
	"order_sent_id" serial NOT NULL,
	"yello_pucs" int NOT NULL,
	"black_pucs" int NOT NULL,
	"yellow_flaslights" int NOT NULL,
	"black_flashlights" int NOT NULL,
	"director_tag" TEXT NOT NULL,
	"time" timestamp with time zone NOT NULL,
	"fulfilled" BOOLEAN NOT NULL,
	CONSTRAINT "order_sent_pk" PRIMARY KEY ("order_sent_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "order" (
	"order_id" serial NOT NULL,
	"user_id" serial NOT NULL,
	"director_tag" TEXT NOT NULL,
	"date" timestamp with time zone NOT NULL,
	"first_name_cust" TEXT NOT NULL,
	"last_name_cust" TEXT NOT NULL,
	"phone_cust" TEXT NOT NULL,
	"email_cust" TEXT NOT NULL,
	"address_cust" TEXT NOT NULL,
	"flashlights" int NOT NULL,
	"pucs" int NOT NULL,
	"collected" BOOLEAN NOT NULL,
	"confirmed" BOOLEAN NOT NULL,
	"order_placed" BOOLEAN NOT NULL,
	"order_sent" BOOLEAN NOT NULL,
	"archived" BOOLEAN NOT NULL,
	"archived_date" timestamp with time zone NOT NULL,
	"delivered" BOOLEAN NOT NULL,
	CONSTRAINT "order_pk" PRIMARY KEY ("order_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "interested" (
	"interested_id" serial NOT NULL,
	"first_name" TEXT NOT NULL,
	"last_name" TEXT NOT NULL,
	"email" TEXT NOT NULL,
	"phone" TEXT NOT NULL,
	"school" TEXT NOT NULL,
	"address" TEXT NOT NULL,
	"interested_stage" TEXT NOT NULL,
	CONSTRAINT "interested_pk" PRIMARY KEY ("interested_id")
) WITH (
  OIDS=FALSE
);











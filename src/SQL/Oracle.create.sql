﻿



CREATE TABLE "СправСотр"
(

	"primaryKey" RAW(16) NOT NULL,

	"Фио" NVARCHAR2(255) NULL,

	"СправДолж" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "КлассУч"
(

	"primaryKey" RAW(16) NOT NULL,

	"Назв" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "СправУч"
(

	"primaryKey" RAW(16) NOT NULL,

	"Фио" NVARCHAR2(255) NULL,

	"ДатаРожд" DATE NULL,

	"СправРод" RAW(16) NOT NULL,

	"КлассУч" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "СправДолж"
(

	"primaryKey" RAW(16) NOT NULL,

	"Должность" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "БазаДанных"
(

	"primaryKey" RAW(16) NOT NULL,

	"НомерКарты" NVARCHAR2(255) NULL,

	"СправУч" RAW(16) NOT NULL,

	"КартДоступ" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "КартДоступ"
(

	"primaryKey" RAW(16) NOT NULL,

	"СправСотр" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "СправРод"
(

	"primaryKey" RAW(16) NOT NULL,

	"Фио" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "РаспПрих"
(

	"primaryKey" RAW(16) NOT NULL,

	"Урок" NVARCHAR2(255) NULL,

	"ПериодНачала" DATE NULL,

	"ПериодКонца" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "СправСотр"
	ADD CONSTRAINT "СправСотр_FСп_8900" FOREIGN KEY ("СправДолж") REFERENCES "СправДолж" ("primaryKey");

CREATE INDEX "СправСотр_IСп_1094" on "СправСотр" ("СправДолж");

ALTER TABLE "СправУч"
	ADD CONSTRAINT "СправУч_FСпра_6148" FOREIGN KEY ("СправРод") REFERENCES "СправРод" ("primaryKey");

CREATE INDEX "СправУч_IСпра_3797" on "СправУч" ("СправРод");

ALTER TABLE "СправУч"
	ADD CONSTRAINT "СправУч_FКлас_5016" FOREIGN KEY ("КлассУч") REFERENCES "КлассУч" ("primaryKey");

CREATE INDEX "СправУч_IКлассУч" on "СправУч" ("КлассУч");

ALTER TABLE "БазаДанных"
	ADD CONSTRAINT "БазаДанных_FС_3615" FOREIGN KEY ("СправУч") REFERENCES "СправУч" ("primaryKey");

CREATE INDEX "БазаДанных_IС_4703" on "БазаДанных" ("СправУч");

ALTER TABLE "БазаДанных"
	ADD CONSTRAINT "БазаДанных_FК_7117" FOREIGN KEY ("КартДоступ") REFERENCES "КартДоступ" ("primaryKey");

CREATE INDEX "БазаДанных_IК_1369" on "БазаДанных" ("КартДоступ");

ALTER TABLE "КартДоступ"
	ADD CONSTRAINT "КартДоступ_FС_9230" FOREIGN KEY ("СправСотр") REFERENCES "СправСотр" ("primaryKey");

CREATE INDEX "КартДоступ_IС_8793" on "КартДоступ" ("СправСотр");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");



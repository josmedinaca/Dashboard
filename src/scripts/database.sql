CREATE TABLE IF NOT EXISTS "dashboard"."public"."pac" (
  "id_pac" SERIAL       NOT NULL,
  PRIMARY KEY ("id_pac"),
  "tipo_doc" VARCHAR(100) NOT NULL,
  "doc" VARCHAR(100) NOT NULL,
  "nombre" VARCHAR(100) NOT NULL,
  "sexo" VARCHAR(100) NOT NULL,
  "facultad" VARCHAR(100) NOT NULL,
  "fecha_entregado" VARCHAR(100) NOT NULL,
  "valor" decimal NOT NULL,
  "localidad_tienda" VARCHAR(100) NOT NULL,
  "subacceso" VARCHAR(100) NOT NULL,
  "pbm" integer NOT NULL
);

CREATE TABLE IF NOT EXISTS "dashboard"."public"."alimentacion" (
  "id_alimentacion" SERIAL       NOT NULL,
  PRIMARY KEY ("id_alimentacion"),
  "doc" VARCHAR(100) NOT NULL,
  "nombre" VARCHAR(100) NOT NULL,
  "subacceso" VARCHAR(100) NOT NULL,
  "facultad" VARCHAR(100) NOT NULL,
  "sexo" VARCHAR(100) NOT NULL,
  "pbm" integer NOT NULL,
  "totalAlmuerzos" VARCHAR(100) NOT NULL,
  "valor" decimal NOT NULL
);

CREATE TABLE IF NOT EXISTS "dashboard"."public"."alojamiento" (
  "id_alojamiento" SERIAL       NOT NULL,
  PRIMARY KEY ("id_alojamiento"),
  "tipoTarifa" VARCHAR(100) NOT NULL,
  "doc" VARCHAR(100) NOT NULL,
  "facultad" VARCHAR(100) NOT NULL,
  "subacceso" VARCHAR(100) NOT NULL,
  "sexo" VARCHAR(100) NOT NULL,
  "pbm" integer NOT NULL,
  "valor" VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS "dashboard"."public"."transporte" (
  "id_transporte" SERIAL       NOT NULL,
  PRIMARY KEY ("id_transporte"),
  "facultad" VARCHAR(100) NOT NULL,
  "subacceso" VARCHAR(100) NOT NULL,
  "sexo" VARCHAR(100) NOT NULL,
  "pbm" VARCHAR(100) NOT NULL,
  "valor" VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS "dashboard"."public"."transferencia" (
  "id_transferencia" SERIAL       NOT NULL,
  PRIMARY KEY ("id_transferencia"),
  "doc" VARCHAR(100) NOT NULL,
  "nombre" VARCHAR(100) NOT NULL,
  "valor" VARCHAR(100) NOT NULL,
  "subacceso" VARCHAR(100) NOT NULL,
  "facultad" VARCHAR(100) NOT NULL,
  "sexo" VARCHAR(100) NOT NULL,
  "pbm" VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS "dashboard"."public"."jea" (
  "id_jea" SERIAL       NOT NULL,
  PRIMARY KEY ("id_jea"),
  "doc" VARCHAR(100) NOT NULL,
  "nombre" VARCHAR(100) NOT NULL,
  "sexo" VARCHAR(100) NOT NULL,
  "facultad" VARCHAR(100) NOT NULL,
  "valor" VARCHAR(100) NOT NULL,
  "subacceso" VARCHAR(100) NOT NULL,
  "pbm" VARCHAR(100) NOT NULL
);


---------------------------------
		Consultas 
---------------------------------

---Estudiantes por genero-------- 

select DISTINCT on (doc) * from pac where sexo = 'Masculino' order by doc;

select DISTINCT on (doc) * from pac where sexo = 'Femenino' order by doc;

---Valor total del apoyo--------
select sum (valor) as total from pac;

----Apoyos por facultad-------
select  * from pac where facultad = 'FACULTAD DE ARTES' order by doc;

----Apoyos entregados en abril 0/4 -------
select  * from pac where fecha_entregado LIKE '%/04/%' order by doc;

----ESTUDIANTES Q RECIBIERON PACS POR FECHA ---------
SELECT * from 
    (SELECT DISTINCT ON (doc) * 
    FROM "pac" ) as nam  where fecha_entregado LIKE '%/04/%'  ;
	
	


CREATE TABLE IF NOT EXISTS "dashboard"."public"."pac" (
  "id_pac" SERIAL       NOT NULL,
  PRIMARY KEY ("id_pac"),
  "doc" VARCHAR(100) NOT NULL,
  "nombre" VARCHAR(100) NOT NULL,
  "sexo" VARCHAR(100) NOT NULL,
  "facultad" VARCHAR(100) NOT NULL,
  "quienentrega" VARCHAR(100) NOT NULL,
  "localidad_estudiante" VARCHAR(100) NOT NULL,
  "localidad_tienda" VARCHAR(100) NOT NULL,
  "fecha_entregado" VARCHAR(100) NOT NULL,
  "valor" decimal NOT NULL,
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
  "total_almuerzos" decimal NOT NULL,
  "valor" decimal NOT NULL
);

CREATE TABLE IF NOT EXISTS "dashboard"."public"."alojamiento" (
  "id_alojamiento" SERIAL       NOT NULL,
  PRIMARY KEY ("id_alojamiento"),
  "tipo_tarifa" VARCHAR(100) NOT NULL,
  "doc" VARCHAR(100) NOT NULL,
  "facultad" VARCHAR(100) NOT NULL,
  "subacceso" VARCHAR(100) NOT NULL,
  "sexo" VARCHAR(100) NOT NULL,
  "pbm" integer NOT NULL,
  "valor" decimal NOT NULL
);

CREATE TABLE IF NOT EXISTS "dashboard"."public"."transporte" (
  "id_transporte" SERIAL       NOT NULL,
  PRIMARY KEY ("id_transporte"),
  "doc" VARCHAR(100) NOT NULL,
  "pbm" VARCHAR(100) NOT NULL,
  "subacceso" VARCHAR(100) NOT NULL,
  "sexo" VARCHAR(100) NOT NULL,
  "dinero", decimal NOT NULL,
  "hospital" VARCHAR(100) NOT NULL
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

select DISTINCT on (doc) * from pac where pbm >=80 and pbm <=84 and sexo='Femenino' order by doc;

---Valor total del apoyo--------
select sum (valor) as total from pac;

----Apoyos por facultad-------
select  * from pac where facultad = 'FACULTAD DE ARTES' order by doc;

----Apoyos entregados en abril 0/4 -------
select  * from pac where fecha_entregado LIKE '%/04/%' order by doc;
select sum (valor) as total from alojamiento where tipo_tarifa LIKE 'STUDIO 56%';
----ESTUDIANTES Q RECIBIERON PACS POR FECHA ---------
SELECT * from 
    (SELECT DISTINCT ON (doc) * 
    FROM "pac" ) as nam  where fecha_entregado LIKE '%/04/%'  ;
	
	
-----Total almuerzos-----
select sum (total_almuerzos) as total from alimentacion;

----Almuerzos x Genero---
select sum (total_almuerzos) as total from alimentacion where sexo = 'F';


---Estudiantes apoyados sin repetir en almuerzos ---

select * from (SELECT DISTINCT ON (doc) * 
    FROM "alimentacion") as nam where sexo = 'F';


--Estudiantes apoyados sin repetir por subacceso en almuerzos--

select * from (SELECT DISTINCT ON (doc) * 
    FROM "alimentacion") as nam where subacceso = 'PAES - INDÍGENA';




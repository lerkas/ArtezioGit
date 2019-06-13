CREATE TABLE public.leader
(
    id serial NOT NULL,
    empl_id integer NOT NULL,
    sub_id integer NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE public.subordinate
(
    id serial NOT NULL,
    empl_id integer NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO public.leader(empl_id, sub_id) VALUES
(1, 1),
(1, 2),
(1, 3),
(3, 3);

INSERT INTO public.subordinate(empl_id) VALUES (2), (3), (4);

--переименовываем колонки id
ALTER TABLE public.employes_list RENAME COLUMN id TO empl_id;
ALTER TABLE public.leader RENAME COLUMN id TO lead_id;
ALTER TABLE public.subordinate RENAME COLUMN id TO sub_id;

--определяем уникальные ключи
ALTER TABLE public.employes_list ADD CONSTRAINT un_empl_id_constraint UNIQUE (empl_id);
ALTER TABLE public.leader ADD CONSTRAINT un_lead_id_constraint UNIQUE (lead_id);
ALTER TABLE public.subordinate ADD CONSTRAINT un_sub_id_constraint UNIQUE (sub_id);

--каскадные связи
ALTER TABLE public.leader
ADD CONSTRAINT empl_id_fk_constraint 
FOREIGN KEY (empl_id) REFERENCES employes_list (empl_id)
ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE public.leader
ADD CONSTRAINT sub_id_fk_constraint 
FOREIGN KEY (sub_id) REFERENCES subordinate (sub_id)
ON UPDATE CASCADE ON DELETE CASCADE;

--выборка всех подчинённых для Каа
SELECT employes_list.last_name AS leader, subordinate.empl_id AS subordinate FROM 
(employes_list JOIN leader USING (empl_id)) JOIN subordinate USING (sub_id) WHERE employes_list.last_name = 'Kaa';

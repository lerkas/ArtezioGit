--создание БД
CREATE DATABASE employees;

--создание таблицы
CREATE TABLE public.employes_list
(
    id integer NOT NULL,
    first_name character(80) NOT NULL,
    last_name character(80) NOT NULL,
    job_role character(80) NOT NULL,
    salary integer NOT NULL,
    PRIMARY KEY (id)
);

--добавление добавление записей "оптом"
INSERT INTO public.employes_list(
	id, first_name, last_name, job_role, salary)
	VALUES (1, 'Andrew', 'Kaa', 'Director of Department', 75000), 
           (2, 'Svetlana', 'Zab', 'sale manager', 50000), 
           (3, 'Antonio', 'Aver', 'pre-sale manager', 40000);

--вывод результата
SELECT * FROM public.employes_list

--добавление единичной записи
INSERT INTO public.employes_list(
	id, first_name, last_name, job_role, salary)
	VALUES (4, 'Alexey', 'Lee', 'pre-sale manager', 35000);
	
--вывод результата
SELECT * FROM public.employes_list

--все сотрудники с зп < 45000
SELECT * FROM public.employes_list where salary < 45000

--все сотрудники, занимающие должность pre-sale manager с зп < 40000
SELECT * FROM public.employes_list where job_role = 'pre-sale manager' and salary < 40000


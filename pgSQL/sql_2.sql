--все сотрудники с зп < 45000

SELECT * FROM public.employes_list where salary < 45000

--все сотрудники, занимающие должность pre-sale manager с зп < 40000

SELECT * FROM public.employes_list where job_role = 'pre-sale manager' and salary < 40000

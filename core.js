// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(fioString) {
	let [firstName, lastName, ...rest] = fioString.split(' ');
	return lastName+" "+ firstName;
}

<<<<<<< HEAD
=======
// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
function filterUnique(arr) {
	let set = new Set(arr);
	return [...set];
}

>>>>>>> test
// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
function calculateSalaryDifference(arr) {
	return Math.max(...arr)/Math.min(...arr);
}

module.exports = {
    fioToName,
    calculateSalaryDifference,
};

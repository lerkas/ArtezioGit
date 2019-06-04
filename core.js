// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(fioString) {
	let [firstName, lastName, ...rest] = fioString.split(' ');
	return lastName+" "+ firstName;
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(arr) {
	return Math.max(...arr)/Math.min(...arr);
	// Я присмотрелась к .reduce, честно. Но таким способом мне нравится больше =)
}

module.exports = {
    fioToName,
    calculateSalaryDifference,
};

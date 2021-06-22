document.write('</br>Задание 1. Калькулятор.</br>');
const Calculator = function (digit1, digit2) {
	this.digit1 = digit1;
	this.digit2 = digit2;
	this.inWork = false;
	this.operation = prompt('Введите математическое действие: +, -, /, *');
	this.start = function() {
		this.inWork = true;
	}
	this.finish = function() {
		this.inWork = false;
	}
	this.doCalculate = function() {
		let result = 0;
		if (this.inWork === false) {
			return document.write('Калькулятор выключен.</br>');
		} else {
			switch (this.operation) {
				case '+':
					result = this.digit1 + this.digit2;
					break;
				case '-':
					result = this.digit1 - this.digit2;
					break;
				case '*':
					result = this.digit1 * this.digit2;
					break;
				case '/':
					result = this.digit1 / this.digit2;
					break;
				default:
					return document.write('Вы ввели неправильное действие.</br>');
			}
			return document.write(`${this.digit1} ${this.operation} ${this.digit2} = ${result}</br>`);
		}
	}
}
const sum = new Calculator(8, 2);
sum.start();
sum.doCalculate();
sum.finish();

document.write('</br>Задание 4. Автомобиль.</br>');
let distance = 0;
const Car = function(model) {
	this.model = model;
	this.inWork = false;
	this.gear = 0;
	this.start = function() {
		this.inWork = true;
	}
	this.finish = function() {
		this.inWork = false;
		return document.write(`${this.model} проехала расстояние равное ${distance.toFixed(2)} км`);
	}
	this.upShift = function(time, speed) {
		if (this.inWork === false) {
			document.write('Машина не заведена.</br>');
		} else {
			this.gear++
			distance += (time / 60) * speed;
			//return document.write(`${this.model} на ${this.gear} передаче проехала вперед ${time} минут со скорость ${speed} км/ч </br>`);
		}
	}
	this.downShift = function(time, speed) {
		if (this.inWork === false) {
			document.write('Машина не заведена.</br>');
		} else {
			this.gear--;
			distance += (time / 60) * speed;
		//	return document.write(`${this.model} на ${this.gear} передаче проехала вперед ${time} минут со скорость ${speed} км/ч </br>`);
		}
	}
	this.reverseGear = function(time, speed) {
		if (this.gear > 0) {
			document.write(`Вы сломали коробку передач.</br>`);
		} else {
			distance -= (time / 60) * speed;
			//return document.write(`${this.model} проехала назад ${time} минут со скоростью ${speed} км/ч </br>`);
		}
	}
}
const Golf = new Car('Wolkswagen Golf');
Golf.start();
Golf.reverseGear(5,40);
Golf.upShift(5,10);
Golf.upShift(5,20);
Golf.upShift(20,20);
Golf.downShift(5,20);
Golf.finish();
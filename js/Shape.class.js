'use strict';

class Shape {

	constructor(width, height) {
		this._width = width;
		this._height = height;
	};

	get width() { return this._width; };
	get height() { return this._height; };
	get area() { return this._width * this._height; };

};
const shapes = Array.from(document.querySelectorAll('.js-shape')) || null;

shapes.forEach(shape => {
	const width = parseInt(shape.dataset.width, 10);
	const height = parseInt(shape.dataset.height, 10);
	const newShape = new Shape(width, height);
	shape.querySelector('.js-width').textContent = newShape.width;
	shape.querySelector('.js-height').textContent = newShape.height;
	shape.querySelector('.js-area').textContent = newShape.area;
});

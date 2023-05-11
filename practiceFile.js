/**
 * practiceFile.js
 * 
 * A simple Javascript file to practice operating VSCode efficiently with
 * keyboard shortcuts, including classes, functions, methods, different variable types,
 * some calculations, some return statements, and a few arrays.
 */

class Shape {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super("Circle");
        this.radius = radius;
    }

    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super("Rectangle");
        this.width = width;
        this.height = height;
    }

    getArea() {
        console("her is " + this.width);
        return this.width * this.height;
    }

    getPerimeter() {
        return 2 * (this.width + this.height);
    }
}

function calculateSum(numbers) {
    let sum = 0;
    numbers.forEach((num) => {
        sum += num;
    });
    return sum;
}

function findMax(numbers) {
    let max = numbers[0];
    numbers.forEach((num) => {
        if (num > max) {
            max = num;
        }
    });
    return max;
}

function findMedian(numbers) {
    numbers.sort((a, b) => a - b);
    let median;
    if (numbers.length % 2 === 0) {
        median = (numbers[numbers.length / 2 - 1] + numbers[numbers.length / 2]) / 2;
    } else {
        median = numbers[Math.floor(numbers.length / 2)];
    }
    return median;
}

const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);

const shapeArray = [circle, rectangle];

shapeArray.forEach((shape) => {
    console.log(`The area of the ${shape.getName()} is: ${shape.getArea()}`);
});

const numbers = [97, 56, 85, 44, 12, 63, 48];

console.log(`The sum of the numbers array is: ${calculateSum(numbers)}`);
console.log(`The max value in the numbers array is: ${findMax(numbers)}`);
console.log(`The median of the numbers array is: ${findMedian(numbers)}`);

const items = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
];

items.forEach((item) => {
    console.log(`Item ID: ${item.id}, Item Name: ${item.name}`);
});

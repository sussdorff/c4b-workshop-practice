// Calculator module with intentional bugs for workshop exercises
// Bug 1: Division by zero not handled properly
// Bug 2: Multiplication has wrong operator

class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        // BUG: Wrong operator used here
        return a + b;  // Should be a * b
    }

    divide(a, b) {
        // BUG: No check for division by zero
        return a / b;
    }

    power(base, exponent) {
        return Math.pow(base, exponent);
    }

    sqrt(n) {
        if (n < 0) {
            throw new Error("Cannot calculate square root of negative number");
        }
        return Math.sqrt(n);
    }

    percentage(value, percent) {
        return (value * percent) / 100;
    }

    factorial(n) {
        if (n < 0) {
            throw new Error("Factorial not defined for negative numbers");
        }
        if (n === 0 || n === 1) {
            return 1;
        }
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}

module.exports = Calculator;
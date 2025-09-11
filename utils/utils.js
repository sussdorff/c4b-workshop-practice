// Utility functions with various issues for students to find and fix

// BUG: Doesn't handle empty strings correctly
function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
}

// BUG: Off-by-one error in loop
function findMax(numbers) {
    if (!numbers || numbers.length === 0) {
        return null;
    }
    let max = numbers[0];
    for (let i = 0; i < numbers.length - 1; i++) {  // BUG: Should be i < numbers.length
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

// Missing error handling
function parseJSON(jsonString) {
    return JSON.parse(jsonString);  // No try-catch!
}

// Inefficient implementation
function removeDuplicates(array) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < result.length; j++) {
            if (array[i] === result[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            result.push(array[i]);
        }
    }
    return result;
    // Could use Set for O(n) instead of O(n²)
}

// Incomplete function
function validateEmail(email) {
    // TODO: Implement proper email validation
    return email.includes('@');
}

// Working function (no bugs)
function capitalize(str) {
    if (!str || typeof str !== 'string') {
        return '';
    }
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// Function with edge case issues
function calculateAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    // BUG: Doesn't account for birthday not yet passed this year
    return age;
}

module.exports = {
    isPalindrome,
    findMax,
    parseJSON,
    removeDuplicates,
    validateEmail,
    capitalize,
    calculateAge
};
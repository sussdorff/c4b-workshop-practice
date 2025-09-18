# Team 8: JavaScript Utility Library

## Repository Information
**Repository:** https://github.com/lodash/lodash  
**Language:** JavaScript  
**Stars:** ~59k  
**Difficulty:** Intermediate  
**Alternative:** https://github.com/30-seconds/30-seconds-of-code

## Project Description
Lodash is a modern JavaScript utility library delivering modularity, performance & extras. Work with one of the most popular JavaScript libraries to understand utility functions and functional programming patterns.

**💡 Hint:** You can use [deepwiki.com](https://deepwiki.com) to get a visual and interactive understanding of the codebase structure. Simply paste the repository URL to explore the code architecture, dependencies, and relationships between different components.

## Selected Issues to Work On

### Issue 1: Add Type Definitions (Beginner)
**Description:** Improve TypeScript support
- Add JSDoc type annotations
- Create TypeScript definition files
- Document function signatures

**Skills:** TypeScript, JSDoc, type systems

### Issue 2: Add New Array Utilities (Intermediate)
**Description:** Create useful array manipulation functions
- `chunk` - Split array into chunks
- `shuffle` - Randomize array order
- `unique` - Remove duplicates with custom comparator

**Skills:** Array manipulation, algorithms, functional programming

### Issue 3: Performance Optimizations (Intermediate)
**Description:** Optimize existing functions
- Benchmark current implementations
- Identify performance bottlenecks
- Implement optimizations
- Document performance improvements

**Skills:** Performance testing, optimization, benchmarking

## Getting Started

```bash
# Clone the repository (or alternative)
git clone https://github.com/30-seconds/30-seconds-of-code.git
cd 30-seconds-of-code

# Install dependencies
npm install

# Run tests
npm test

# Build the library
npm run build

# Test your functions
node -e "const _ = require('./dist/lodash.js'); console.log(_.chunk([1,2,3,4,5], 2))"
```

## Working with Claude Code

```bash
# Understand utility patterns
claude "Explain the architecture of this JavaScript utility library"

# Implement new utilities
claude "How do I implement an efficient array shuffle function?"

# Optimize performance
claude "Analyze this function for performance improvements"

# Write comprehensive tests
claude "Write tests for the array chunk utility function"
```

## Agent-Driven Testing with Claude

Agent-driven testing leverages Claude's ability to create, execute, and validate test scripts for JavaScript utilities. This approach is particularly powerful for utility libraries where you need to verify function behavior across multiple input scenarios, edge cases, and performance characteristics.

### Testing Approach for Utility Libraries

When testing JavaScript utilities with Claude, focus on:
- **Input Validation:** Test with various data types and edge cases
- **Output Verification:** Compare actual vs expected results
- **Performance Testing:** Measure execution time for large datasets
- **Error Handling:** Verify proper error responses for invalid inputs

### Setting Up Node.js Testing Environment

Claude can help you create and run Node.js test scripts directly:

```bash
# Create a test file and run it
claude "Create a Node.js test script for the capitalize function and run it"

# Test multiple scenarios
claude "Write comprehensive tests covering edge cases and run them"

# Performance benchmarking
claude "Create a performance test comparing different implementations"
```

### Test Examples for Existing 30-seconds-of-code Functions

#### Test 1: Capitalize Function Testing

```bash
# Ask Claude to test the capitalize function
claude "Create and run a Node.js script to test this capitalize function:
const capitalize = ([first, ...rest], lowerRest = false) =>
  first.toUpperCase() + (lowerRest ? rest.join('').toLowerCase() : rest.join(''));

Test with inputs: 'hello', 'fooBar', 'WORLD', '', 'a', 'JavaScript'
Include the lowerRest parameter variations and edge cases."
```

Expected Claude workflow:
1. Create test script with various inputs
2. Execute the script with Node.js
3. Verify outputs match expected results
4. Report any failures or edge case issues

#### Test 2: Debounce Function Testing

```bash
# Ask Claude to test the debounce function
claude "Create and run a Node.js script to test this debounce function:
const debounce = (fn, ms = 0) => {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};

Test scenarios:
1. Function calls are properly delayed
2. Multiple rapid calls result in single execution
3. Context (this) is preserved
4. Arguments are passed correctly
5. Different delay times work as expected"
```

Expected Claude workflow:
1. Create async test with setTimeout verification
2. Test rapid function calls with counters
3. Verify timing behavior
4. Check context and argument preservation

#### Test 3: Deep Clone Function Testing

```bash
# Ask Claude to test the deep clone function
claude "Create and run a Node.js script to test this deep clone function:
const deepClone = obj => {
  if (obj === null) return null;
  let clone = Object.assign({}, obj);
  Object.keys(clone).forEach(
    key => (clone[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key])
  );
  if (Array.isArray(obj)) {
    clone.length = obj.length;
    return Array.from(clone);
  }
  return clone;
};

Test with:
- Simple objects: {a: 1, b: 2}
- Nested objects: {a: {b: {c: 3}}}
- Arrays: [1, 2, [3, 4]]
- Mixed: {arr: [1, 2], obj: {x: 1}}
- Edge cases: null, undefined, empty objects
Verify original objects remain unchanged."
```

Expected Claude workflow:
1. Create comprehensive test objects
2. Perform cloning operations
3. Verify deep equality of cloned objects
4. Confirm original objects are unmodified
5. Test reference independence

### Advanced Testing Patterns

#### Batch Testing Multiple Functions

```bash
# Test multiple utilities at once
claude "Create a test suite that tests capitalize, debounce, and deepClone functions together. Include performance measurements and generate a test report."
```

#### Property-Based Testing

```bash
# Generate random test cases
claude "Create a property-based test for the capitalize function that generates 100 random string inputs and verifies the first character is always uppercase."
```

#### Integration Testing

```bash
# Test function combinations
claude "Test how the debounce and capitalize functions work together when capitalize is debounced with different delay values."
```

### Test Execution Commands

Once Claude creates your test files, you can run them directly:

```bash
# Run individual tests
node test-capitalize.js
node test-debounce.js
node test-deepclone.js

# Run with detailed output
node --trace-warnings test-suite.js

# Performance testing
node --expose-gc performance-tests.js
```

## Example Implementations
```javascript
// Array chunking
function chunk(array, size = 1) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

// Array shuffling (Fisher-Yates)
function shuffle(array) {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

// Remove duplicates with comparator
function uniqueBy(array, comparator) {
  return array.filter((item, index, self) =>
    index === self.findIndex(other => comparator(item, other))
  );
}
```

## Project Structure
```
utility-library/
├── src/
│   ├── array/        # Array utilities
│   ├── object/       # Object utilities
│   ├── string/       # String utilities
│   ├── function/     # Function utilities
│   └── index.js      # Main exports
├── test/            # Test files
├── benchmark/       # Performance tests
└── docs/           # Documentation
```

## Performance Testing
```javascript
// Benchmark your implementations
const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;

suite
  .add('chunk#native', function() {
    chunk([1,2,3,4,5,6,7,8], 3);
  })
  .add('chunk#lodash', function() {
    _.chunk([1,2,3,4,5,6,7,8], 3);
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  .run();
```

## Tips for Success
- Study existing implementations for patterns
- Focus on edge cases (empty arrays, null values)
- Write tests before implementing
- Benchmark against lodash for comparison
- Use Claude to understand functional programming concepts

## Learning Objectives
- Functional programming patterns
- JavaScript performance optimization
- Writing reusable utility functions
- Comprehensive testing strategies
- Documentation best practices
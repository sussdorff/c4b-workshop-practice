# Claude Code Practice Repository

This repository contains practice exercises for learning Claude Code in Block 2 of the workshop.

## 📚 Workshop Materials
All workshop handouts and materials can be found in the `workshop-materials/` directory:
- **Block 1:** Installation guide and paradigm shift presentation
- **Block 2:** First steps with Claude Code exercises
- **Block 3:** Working with GitHub repositories (materials distributed during workshop)
- **Block 4:** AI Agent interaction patterns (materials distributed during workshop)

## Structure

```
practice-repo-block2/
├── README.md           # This file
├── calculator/         # Calculator module with intentional bugs
│   ├── calculator.js   # Main calculator logic
│   └── test.js        # Incomplete tests
├── utils/             # Utility functions
│   ├── utils.js       # Various utility functions (with bugs)
│   └── helpers.js     # Helper functions
└── todo-app/          # Simple todo application
    ├── index.html     # Basic HTML structure
    ├── app.js         # Todo logic (needs improvements)
    └── style.css      # Basic styling
```

## Exercises

### Exercise 1: Bug Hunting
The calculator module has 2 bugs. Can you find them?
```bash
claude "Find and fix the bugs in calculator/calculator.js"
```

### Exercise 2: Test Writing
The tests are incomplete. Add more test cases:
```bash
claude "Write comprehensive tests for the calculator module"
```

### Exercise 3: Code Improvement
The todo app works but needs improvements:
```bash
claude "Improve the todo app with better error handling and features"
```

### Exercise 4: Documentation
Add proper documentation:
```bash
claude "Add JSDoc comments to all JavaScript files"
```

## Learning Goals
- Understand how Claude Code analyzes code
- Practice giving clear instructions
- Learn to iterate on solutions
- Experience Claude's debugging capabilities
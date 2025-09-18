# Block 2: First Steps with Claude Code
## Following Anthropic's Official Quickstart Flow

---

## 🎯 Learning Objectives
After this block you will be able to:
- Start interactive Claude sessions in your projects
- Explore and understand codebases conversationally
- Make code modifications with AI assistance
- Use Git integration features
- Apply Claude Code to real development workflows

---

## 📚 Exercise 1: Interactive Exploration (10:30-10:55)
**Goal:** Master the interactive session workflow

### Part A: Starting Your First Session (5 Min)
```bash
# Start Claude in interactive mode in the repo you just cloned
claude
```

Now ask Claude to explore the project:
```
What does this project do?
What technologies does this project use?
Where is the main entry point?
Show me the project structure
```

### Part B: Understanding the Codebase (10 Min)
Continue in the interactive session:
```
Explain the calculator module to me
What bugs might exist in the utils.js file?
How does the todo app work?
What improvements would you suggest for this codebase?
```

**Key Learning:** Claude analyzes your entire project context, not just single files.

### Part C: Making Your First Edit (10 Min)
Still in interactive mode, make actual changes:
```
Add a hello world function to the calculator
Fix the multiplication bug in calculator.js
Add input validation to the utils parseJSON function
```

**What happens:**
1. Claude finds the right file
2. Shows you the proposed changes
3. Asks for your approval (y/n)
4. Makes the edit
5. Confirms completion

### 💡 Mini-Challenge: Bug Hunt
In your interactive session:
```
Find all the bugs in this project
Fix them one by one
Explain why each was a bug
```

### 🔄 Team Sharing (5 Min)
- What bug did Claude find that you missed?
- How did the interactive mode feel different from command-line tools?
- What was the most helpful exploration question?

---

## 📚 Exercise 2: Git Integration & Workflow (11:00-11:25)
**Goal:** Use Claude's Git awareness for real development

### Part A: Check Current State (5 Min)
In your interactive Claude session:
```
What files have I changed?
What changes did I make to calculator.js?
Show me a diff of my changes
```

### Part B: Making Commits (10 Min)
Use Claude for Git operations:
```
Create a commit message for my changes
Commit these changes
Create a new branch called feature/improvements
What's in my git log?
```

**Note:** Claude understands context and creates meaningful commit messages based on actual changes.

### Part C: Feature Development (10 Min)
Develop a feature using Git workflow:
```
I want to add a feature to calculate factorials
Create a new branch for this feature
Add the factorial function with tests
Commit this feature
Show me what I've done in this branch
```

### 💡 Pro Tip: Conversational Git
Claude understands natural Git commands:
- "What branch am I on?"
- "Show me recent commits"
- "Create a pull request"
- "Merge this branch"
- "Stash my changes"

### 🔄 Team Sharing (5 Min)
- What Git commands worked naturally?
- How did Claude's commit messages compare to yours?
- Any surprising Git features?


---

## 📚 Exercise 3: Advanced Workflows (11:30-11:55)
**Goal:** Apply Claude to real development tasks

### Part A: Test-Driven Development (8 Min)
In your interactive session:
```
Write a test for a function that reverses a string
Now implement the function to pass the test
Add edge cases to the test
Make sure all tests pass
```

### Part B: Debugging Session (8 Min)
```
There's a bug in the findMax function in utils.js
Help me debug it step by step
Add console.log statements to trace the issue
Fix the bug
Write a test to prevent this bug in the future
```

### Part C: Refactoring (8 Min)
```
The removeDuplicates function in utils.js is inefficient
Explain why it's O(n²)
Refactor it to be O(n) using a Set
Add performance tests to prove it's faster
Update the documentation
```

### 💡 Team Challenge: Full Feature
Work together to add a complete feature:
```
Add a "priority" feature to the todo app
- Add priority levels (high, medium, low)
- Update the UI to show priorities
- Add sorting by priority
- Write tests
- Commit with a good message
```

### 🔄 Team Sharing (5 Min)
- Which workflow felt most natural?
- What would you use Claude for on Monday?
- Any "aha!" moments?

---

## 🚀 Bonus Exercises (Optional)

### Real-World Scenarios
Try these practical development tasks:

**Documentation Generation:**
```
Generate comprehensive API documentation for all functions
Create a user guide for the todo app
Write JSDoc comments for all functions
```

**Performance Optimization:**
```
Profile this code and find performance bottlenecks
Optimize the slowest function
Add performance benchmarks
```

**Security Audit:**
```
Check this code for security vulnerabilities
Add input sanitization where needed
Implement proper error handling
```

**Code Migration:**
```
Convert the todo app to use modern ES6+ features
Add TypeScript types to the calculator module
Refactor to use async/await instead of callbacks
```

---

## 💡 Pro Tips from Anthropic

### Essential Commands Reference
```bash
# Project Setup
/init          # Initialize project, create/update .claude/CLAUDE.md
/context       # Show what context Claude has about your project
/add-dir       # Add another directory to work with (useful for multi-repo work)

# Model Management
/model         # Show current model and available options
/plan          # Enter planning mode (Opus → Sonnet workflow)
/model opus-4.1-plan  # Direct planning mode with model switch

# Authentication
/login         # Switch accounts or re-authenticate
/logout        # End current session
```

### Interactive Mode Best Practices
1. **Initialize First:** Always run `/init` in new projects
2. **Check Context:** Use `/context` to see what Claude knows
3. **Plan Complex Tasks:** Use `/plan` for multi-step features
4. **Let Claude Explore First:** Start with "What does this project do?"
5. **Be Specific:** "Add error handling to the login function" > "fix this"
6. **For NOW - Review Changes:** Always review before accepting (y/n)

### Effective Workflows
```
1. Explore → Understand → Modify → Test → Commit
2. Break complex tasks into smaller steps
3. Use Git integration for version control
4. Let Claude write tests first (TDD)
```

### Power User Commands
```
# Multi-file operations
"Update all files that import calculator.js"

# Codebase-wide refactoring
"Replace all var with const/let in the project"

# Smart debugging
"Add logging to trace this error"

# Architecture decisions
"Should I use callbacks or promises here?"
```

### When Claude Shines
- ✨ Understanding unfamiliar codebases
- ✨ Writing comprehensive tests
- ✨ Refactoring legacy code
- ✨ Debugging complex issues
- ✨ Generating documentation
- ✨ Code reviews and best practices

---

## 🎯 Checkpoint: You Should Now Be Able To

- [ ] Start and maintain interactive Claude sessions
- [ ] Explore and understand codebases conversationally
- [ ] Make approved edits to code
- [ ] Use Git commands naturally
- [ ] Debug code with AI assistance
- [ ] Implement TDD workflows
- [ ] Refactor code efficiently
- [ ] Generate tests and documentation

---

## 🔗 Further Resources

- **Official Docs:** https://docs.anthropic.com/en/docs/claude-code
- **Best Practices:** https://www.anthropic.com/engineering/claude-code-best-practices
- **Awesome Claude Code:** https://github.com/hesreallyhim/awesome-claude-code
- **Workshop Slack:** #c4b-claude-workshop

---

## 📝 Notes & Learnings

_Space for your own notes:_

```
Team: ________________

Favorite command:
_____________________

Biggest surprise:
_____________________

What I want to use on Monday:
_____________________
```
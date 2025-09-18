# Team 3: Python CLI Todo Manager

## Repository Information
**Repository:** https://github.com/asweigart/todocli  
**Language:** Python  
**Stars:** ~300  
**Difficulty:** Beginner  
**Alternative:** https://github.com/foobuzz/todo

## Project Description
A simple command-line todo list manager written in Python. This project demonstrates CLI argument parsing, file I/O, and basic data management. Perfect for learning Python CLI development patterns.

**💡 Hint:** You can use [deepwiki.com](https://deepwiki.com) to get a visual and interactive understanding of the codebase structure. Simply paste the repository URL to explore the code architecture, dependencies, and relationships between different components.

## Selected Issues to Work On

### Issue 1: Add Priority Levels (Beginner)
**Description:** Implement priority system for todos
- Add priority flag (high, medium, low)
- Sort todos by priority
- Color-code output based on priority

**Skills:** CLI arguments, data structures, terminal colors

### Issue 2: Add Due Dates (Intermediate)
**Description:** Add due date functionality
- Parse date input when adding todos
- Show overdue items in red
- Add "due today" and "due this week" filters

**Skills:** Date parsing, datetime module, filtering

### Issue 3: Export/Import Feature (Beginner)
**Description:** Add data portability
- Export todos to JSON/CSV
- Import todos from file
- Merge with existing todos

**Skills:** File I/O, JSON/CSV handling, data validation

## Getting Started

```bash
# Clone the repository
git clone https://github.com/foobuzz/todo.git
cd todo

# Install in development mode
pip install -e .

# Or run directly
python todo.py --help

# Basic usage
todo add "Learn Python CLI development"
todo list
todo done 1
```

## Working with Claude Code

```bash
# Understand the codebase
claude "Analyze this Python CLI todo application structure"

# Add new features
claude "How do I add priority levels to this CLI todo app?"

# Improve code quality
claude "Suggest improvements for error handling in this CLI app"

# Write tests
claude "Write pytest tests for the todo CLI functions"
```

## Agent-Driven Testing with Claude

Agent-driven testing allows Claude to execute CLI commands directly and verify their behavior, making it perfect for testing command-line tools like this todo manager. Claude can run commands, capture outputs, and validate functionality automatically.

### How Claude Tests CLI Tools

Claude can execute shell commands using the Bash tool, capture their output, and analyze results. This enables real-time testing of CLI functionality without writing traditional test files.

### Testing Strategy for CLI Tools

1. **Command Execution Testing**: Run actual CLI commands and verify outputs
2. **State Persistence Testing**: Ensure data persists between command executions
3. **Error Handling Testing**: Test invalid inputs and edge cases
4. **Integration Testing**: Test command sequences that build on each other

### Test Examples for Existing Functionality

#### Test 1: Basic Task Addition and Listing

```bash
# Test adding a task and verifying it appears in the list
claude "Run these commands and verify the todo functionality:
1. Clear any existing todos: todo purge --force
2. Add a test task: todo add 'Test task for Claude'
3. List current tasks: todo
4. Verify the task appears with ID 1"
```

This test verifies the core add and list functionality works correctly.

#### Test 2: Task Completion Workflow

```bash
# Test marking tasks as done
claude "Test the task completion workflow:
1. Add two tasks: todo add 'First task' and todo add 'Second task'
2. List tasks to see both: todo
3. Mark first task as done: todo done 1
4. List remaining tasks: todo
5. Verify only the second task remains"
```

This test ensures the done command works and tasks are properly removed from the active list.

#### Test 3: Context Management

```bash
# Test context functionality
claude "Test context management features:
1. Add a task to a specific context: todo add 'Work task' -c work
2. Add a personal task: todo add 'Personal task' -c personal
3. List all tasks: todo
4. List only work context: todo work
5. List only personal context: todo personal
6. Verify tasks appear in correct contexts"
```

This test validates that the context system properly organizes and filters tasks.

### Running Comprehensive Tests

You can ask Claude to run multiple test scenarios in sequence:

```bash
claude "Run a comprehensive test suite for the todo CLI:
1. Test basic CRUD operations (add, list, done, remove)
2. Test edge cases (invalid task IDs, empty lists)
3. Test context management
4. Test search functionality
5. Generate a test report with results"
```

### Benefits of Agent Testing

- **Real-time validation**: Test actual CLI behavior, not mocked functionality
- **Integration testing**: Verify the full command-line interface works as expected
- **Cross-platform testing**: Test on the actual system where the tool will run
- **User experience validation**: Ensure commands behave as users expect

## CLI Commands
```bash
# Current commands
todo add <task>        # Add a new task
todo list             # List all tasks
todo done <id>        # Mark task as done
todo remove <id>      # Remove a task

# Your additions
todo add <task> --priority high --due 2024-09-15
todo list --filter "due:today"
todo export todos.json
todo import backup.json
```

## Project Structure
```
todo/
├── todo.py           # Main CLI application
├── todo_db.py        # Database/storage logic
├── tests/            # Test files
├── requirements.txt  # Dependencies
└── README.md        # Documentation
```

## Tips for Success
- Start by running the existing CLI to understand its behavior
- Use argparse or click for adding new commands
- Test edge cases (empty lists, invalid IDs)
- Use Claude to understand Python idioms
- Keep the CLI interface intuitive

## Learning Objectives
- Python CLI development with argparse
- File-based data persistence
- Error handling and validation
- Testing CLI applications
- Creating user-friendly command interfaces
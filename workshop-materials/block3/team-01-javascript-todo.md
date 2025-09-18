# Team 1: JavaScript Todo App

## Repository Information
**Repository:** https://github.com/tastejs/todomvc  
**Language:** JavaScript (Vanilla)  
**Stars:** ~28k  
**Difficulty:** Beginner  

## Project Description
TodoMVC helps you decide which JavaScript framework to use by showing the same todo application implemented in various MV* frameworks. Your team will work with the Vanilla JavaScript implementation to understand core JavaScript patterns without framework abstractions.

**💡 Hint:** You can use [deepwiki.com](https://deepwiki.com) to get a visual and interactive understanding of the codebase structure. Simply paste the repository URL to explore the code architecture, dependencies, and relationships between different components.

## Selected Issues to Work On

### Issue 1: Add Keyboard Shortcuts (Beginner)
**Description:** Implement keyboard shortcuts for common actions
- `Ctrl+A` - Select all todos
- `Ctrl+D` - Delete selected todo
- `Escape` - Cancel editing

**Skills:** Event handling, keyboard events, DOM manipulation

### Issue 2: Add Persistence Options (Intermediate)
**Description:** Extend the localStorage implementation to support:
- Export todos as JSON
- Import todos from JSON file
- Clear all data with confirmation

**Skills:** File API, localStorage, JSON handling

### Issue 3: Improve Accessibility (Beginner)
**Description:** Enhance accessibility features:
- Add ARIA labels to buttons
- Improve keyboard navigation
- Add screen reader announcements for actions

**Skills:** Accessibility, ARIA, semantic HTML

## Getting Started

```bash
# Clone the repository
git clone https://github.com/tastejs/todomvc.git
cd todomvc/examples/vanillajs

# Open in browser (no build needed!)
open index.html

# Or use a simple server
python3 -m http.server 8000
# Navigate to http://localhost:8000
```

## Working with Claude Code

```bash
# Understand the codebase
claude "Analyze the structure of this TodoMVC implementation"

# Get help with specific issues
claude "How can I add keyboard shortcuts to this todo app?"

# Test your changes
claude "Write tests for the keyboard shortcut functionality"

# Review your code
claude "Review my implementation and suggest improvements"
```

## Agent-Driven Testing with Claude

Agent-driven testing uses Claude Code with browser automation tools like Playwright to test your application like a human QA tester would. Instead of writing traditional unit tests, you can describe test scenarios in natural language and let Claude execute them through the browser.

### Setting Up Playwright MCP for Browser Testing

Before you can run browser tests, install the Playwright MCP server in your local repository:

```bash
# Install Playwright MCP server for browser automation
claude mcp add-json "playwright" '{"command":"npx","args":["@playwright/mcp@latest","--extension"]}'
```

This enables Claude to control a browser and interact with your todo application just like a real user would.

### Testing Existing TodoMVC Functionality

Here are three specific test examples for the core functionality already implemented in the TodoMVC application:

#### Test 1: Adding New Todos

Test that users can successfully add new todo items to the list.

```bash
claude "Use Playwright to test adding new todos to the TodoMVC app at http://localhost:8000.
1. Navigate to the todo app
2. Type 'Buy groceries' in the new todo input field
3. Press Enter to add the todo
4. Verify the todo appears in the list
5. Add a second todo 'Walk the dog'
6. Verify both todos are visible in the list
7. Check that the todo count shows '2 items left'"
```

#### Test 2: Toggling Todo Completion Status

Test that users can mark todos as complete and incomplete.

```bash
claude "Use Playwright to test todo completion toggling in the TodoMVC app at http://localhost:8000.
1. Navigate to the todo app
2. Add a new todo 'Learn JavaScript'
3. Click the checkbox next to the todo to mark it complete
4. Verify the todo gets crossed out styling
5. Verify the todo count decreases to '0 items left'
6. Click the checkbox again to mark it incomplete
7. Verify the todo styling returns to normal
8. Verify the todo count increases back to '1 item left'"
```

#### Test 3: Filtering Todo Views

Test that the filter buttons (All/Active/Completed) work correctly.

```bash
claude "Use Playwright to test todo filtering in the TodoMVC app at http://localhost:8000.
1. Navigate to the todo app
2. Add three todos: 'Task 1', 'Task 2', 'Task 3'
3. Mark 'Task 1' and 'Task 3' as completed
4. Click the 'Active' filter button
5. Verify only 'Task 2' is visible in the list
6. Click the 'Completed' filter button
7. Verify only 'Task 1' and 'Task 3' are visible
8. Click the 'All' filter button
9. Verify all three todos are visible again"
```

### Benefits of Agent-Driven Testing

- **Natural Language**: Describe tests in plain English instead of writing complex test code
- **Real Browser Testing**: Tests run in actual browsers, catching issues that unit tests might miss
- **Quick Iteration**: Easily modify test scenarios without rewriting test code
- **Human-Like Testing**: Tests simulate real user interactions and workflows

## Tips for Success
- Start by understanding the existing code structure
- Use Claude to explain complex JavaScript patterns
- Test manually in the browser first
- Ask Claude to help with edge cases
- Focus on one issue at a time

## Learning Objectives
- Understanding vanilla JavaScript DOM manipulation
- Working with browser events
- Implementing localStorage for persistence
- Following established code patterns
- Contributing to open source projects
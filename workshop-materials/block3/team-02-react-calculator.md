# Team 2: React Calculator Component

## Repository Information
**Repository:** https://github.com/ahfarmer/calculator  
**Language:** JavaScript/React  
**Stars:** ~5k  
**Difficulty:** Beginner  

## Project Description
A simple calculator built with React. This project demonstrates React component composition, state management, and event handling. Perfect for understanding React fundamentals while working on a practical application.

**💡 Hint:** You can use [deepwiki.com](https://deepwiki.com) to get a visual and interactive understanding of the codebase structure. Simply paste the repository URL to explore the code architecture, dependencies, and relationships between different components.

## Selected Issues to Work On

### Issue 1: Add Scientific Mode (Intermediate)
**Description:** Extend the calculator with scientific functions
- Add buttons for sin, cos, tan
- Implement square root and power functions
- Toggle between standard and scientific mode

**Skills:** React components, state management, mathematical operations

### Issue 2: Add History Feature (Beginner)
**Description:** Keep track of calculation history
- Display last 10 calculations
- Allow clearing history
- Store history in localStorage

**Skills:** React state, localStorage, array manipulation

### Issue 3: Improve Mobile Responsiveness (Beginner)
**Description:** Make the calculator mobile-friendly
- Adjust button sizes for touch screens
- Add haptic feedback (vibration) on mobile
- Ensure proper scaling on different devices

**Skills:** CSS, responsive design, media queries

## Getting Started

```bash
# Clone the repository
git clone https://github.com/ahfarmer/calculator.git
cd calculator

# Install dependencies
npm install

# Start development server
npm start
# Opens at http://localhost:3000

# Run tests
npm test
```

## Working with Claude Code

```bash
# Understand the React architecture
claude "Explain the component structure of this React calculator"

# Get help implementing features
claude "How do I add a history feature to this calculator using React hooks?"

# Debug issues
claude "Why is my calculation state not updating correctly?"

# Optimize performance
claude "Suggest performance improvements for this React calculator"
```

## Agent-Driven Testing with Claude

Agent-driven testing allows Claude to automatically interact with your React calculator through browser automation, testing the application like a real user would. This approach is particularly valuable for React applications as it validates the complete user experience, including component interactions, state updates, and UI responsiveness.

### Setting Up Playwright MCP for Browser Testing

First, install the Playwright MCP server in your calculator project:

```bash
# Navigate to your calculator project directory
cd calculator

# Install Playwright MCP server
claude mcp add playwright npx -- @playwright/mcp@latest --extension
```

### Test Examples for Existing Calculator Functionality

Here are three comprehensive test examples that validate the core calculator functionality:

#### 1. Basic Arithmetic Operations Test

Test basic addition, subtraction, multiplication, and division:

```bash
claude "Use Playwright to test basic arithmetic operations on the calculator:
1. Open the calculator at http://localhost:3000
2. Test addition: Click '5', '+', '3', '=' and verify display shows '8'
3. Test subtraction: Click 'C', '10', '-', '4', '=' and verify display shows '6'
4. Test multiplication: Click 'C', '7', '*', '6', '=' and verify display shows '42'
5. Test division: Click 'C', '15', '/', '3', '=' and verify display shows '5'
Take screenshots after each calculation to verify results."
```

#### 2. Decimal Numbers and Edge Cases Test

Test decimal number handling and common edge cases:

```bash
claude "Use Playwright to test decimal operations and edge cases:
1. Open the calculator and test decimal addition: '2.5' + '1.5' = '4'
2. Test multiple decimal points: Click '1', '.', '.', '5' and verify only one decimal is accepted
3. Test division by zero: '5' / '0' and verify appropriate error handling
4. Test clearing: Enter '123', click 'C', and verify display resets to '0'
5. Test consecutive operations: '5' + '3' + '2' = '10' without pressing equals between operations
Document any unexpected behaviors with screenshots."
```

#### 3. User Interface Interaction Test

Test the calculator's UI responsiveness and button interactions:

```bash
claude "Use Playwright to test UI interactions and display behavior:
1. Open the calculator and verify all number buttons (0-9) are clickable and update the display
2. Test that operation buttons (+, -, *, /) are visually distinct and functional
3. Verify the display shows the current input and calculation results clearly
4. Test rapid button clicking to ensure the calculator handles fast user input
5. Test keyboard input (if supported) vs mouse clicks for the same operations
6. Verify the calculator layout is properly rendered and all buttons are accessible
Take screenshots showing the calculator state at different stages."
```

### Testing Best Practices

- **Start your dev server** (`npm start`) before running tests
- **Use screenshots** to capture and verify calculator states
- **Test edge cases** like division by zero, long numbers, and rapid input
- **Verify state persistence** across operations
- **Check error handling** for invalid operations

### Advanced Testing with Claude

Once comfortable with basic testing, try these advanced scenarios:

```bash
# Test calculator memory and state management
claude "Test the calculator's state management by performing complex multi-step calculations and verifying intermediate results are handled correctly"

# Performance testing
claude "Use Playwright to test calculator performance by rapidly clicking buttons and measuring response times"

# Accessibility testing
claude "Test the calculator's accessibility features including keyboard navigation and screen reader compatibility"
```

## Project Structure
```
calculator/
├── src/
│   ├── component/
│   │   ├── Button.js       # Individual button component
│   │   ├── ButtonPanel.js  # Button layout component
│   │   ├── Display.js      # Display component
│   │   └── App.js          # Main app component
│   ├── logic/
│   │   ├── calculate.js     # Calculation logic
│   │   └── operate.js       # Operation functions
│   └── index.js            # Entry point
```

## Tips for Success
- Study the existing component structure first
- Use React DevTools to inspect component state
- Test edge cases (division by zero, decimal numbers)
- Keep components small and focused
- Use Claude to understand React patterns

## Learning Objectives
- React component composition
- State management with hooks
- Event handling in React
- Separating logic from presentation
- Testing React components
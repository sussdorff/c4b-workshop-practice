# Team 6: React Component Library

## Repository Information
**Repository:** https://github.com/react-bootstrap/react-bootstrap  
**Language:** JavaScript/React  
**Stars:** ~22k  
**Difficulty:** Intermediate  

## Project Description
React-Bootstrap replaces Bootstrap JavaScript with React components. Each component has been built from scratch as true React components, without unneeded dependencies like jQuery.

**💡 Hint:** You can use [deepwiki.com](https://deepwiki.com) to get a visual and interactive understanding of the codebase structure. Simply paste the repository URL to explore the code architecture, dependencies, and relationships between different components.

## Selected Issues to Work On

### Issue 1: Add Dark Mode Support (Intermediate)
**Description:** Implement dark mode theming
- Add dark mode toggle component
- Update existing components for dark mode
- Use CSS variables for theming

**Skills:** React context, CSS variables, theming

### Issue 2: Improve Form Validation (Beginner)
**Description:** Enhance form validation feedback
- Add real-time validation indicators
- Improve error message display
- Add validation tooltips

**Skills:** React forms, validation, user feedback

### Issue 3: Add Loading States (Beginner)
**Description:** Add loading states to components
- Create Skeleton loader component
- Add loading props to buttons
- Implement spinner variations

**Skills:** React components, CSS animations, props

## Getting Started

```bash
# Clone the repository
git clone https://github.com/react-bootstrap/react-bootstrap.git
cd react-bootstrap

# Install dependencies
npm install

# Start development
npm run dev

# Run tests
npm test

# Build components
npm run build
```

## Working with Claude Code

```bash
# Understand component structure
claude "Explain the architecture of this React component library"

# Create new components
claude "How do I create a skeleton loader component for React Bootstrap?"

# Implement theming
claude "Guide me through adding dark mode support to React Bootstrap"

# Write component tests
claude "Write tests for the form validation enhancements"
```

## Agent-Driven Testing with Claude

Testing React Bootstrap components requires understanding their behavior across different states and user interactions. Component libraries need comprehensive testing to ensure reliability across various use cases.

### Setting Up Playwright for Component Testing

First, install the Playwright MCP server for testing capabilities:

```bash
claude mcp add playwright npx -- @playwright/mcp@latest --extension
```

### Testing Strategy

Test existing React Bootstrap components using either Storybook stories or dedicated test pages. Focus on visual testing and user interactions to ensure components work as expected.

### Test Example 1: Button Component Behaviors

Test different button variants, sizes, and states:

```bash
claude "Create Playwright tests for React Bootstrap Button component that verify:
1. All button variants (primary, secondary, success, warning, danger) render correctly
2. Button sizes (sm, lg) display proper dimensions
3. Disabled state prevents clicks and shows correct styling
4. Loading state (if implemented) displays spinner
Test using existing Storybook stories or create a simple test page"
```

### Test Example 2: Form Components

Test form inputs, validation states, and user interactions:

```bash
claude "Write Playwright tests for React Bootstrap Form components:
1. Form.Control accepts different input types (text, email, password)
2. Validation states (valid, invalid) show correct styling and feedback
3. Form submission captures input values correctly
4. Placeholder text displays properly
5. Focus and blur events work as expected
Include tests for Form.Group, Form.Label, and Form.Text components"
```

### Test Example 3: Modal Component

Test modal functionality and user interactions:

```bash
claude "Create comprehensive Playwright tests for React Bootstrap Modal:
1. Modal opens and closes correctly with show prop
2. Backdrop click closes modal (when backdrop is not static)
3. Escape key closes modal
4. Modal.Header, Modal.Body, and Modal.Footer render content properly
5. Focus management works correctly (focus trapped in modal when open)
6. Animation classes are applied during open/close transitions
Test both controlled and uncontrolled modal usage patterns"
```

### Visual Testing Best Practices

When testing React Bootstrap components:
- Use Playwright's screenshot comparison for visual regression testing
- Test responsive behavior across different viewport sizes
- Verify accessibility features like ARIA attributes and keyboard navigation
- Test component interactions in isolation and within composed layouts

## Example Component Usage
```jsx
// Current usage
import { Button, Form } from 'react-bootstrap';

<Button variant="primary">Click me</Button>
<Form.Control type="email" placeholder="Enter email" />

// With your additions
<ThemeProvider theme="dark">
  <Button loading={true}>Loading...</Button>
  <Form.Control 
    type="email" 
    validation="real-time"
    validationMessage="Please enter a valid email"
  />
  <SkeletonLoader lines={3} />
</ThemeProvider>
```

## Project Structure
```
react-bootstrap/
├── src/
│   ├── components/    # Individual components
│   ├── themes/        # Theme definitions
│   ├── utils/         # Utility functions
│   └── index.js       # Main exports
├── test/             # Test files
├── docs/             # Documentation site
└── stories/          # Storybook stories
```

## Tips for Success
- Use Storybook to develop components in isolation
- Follow existing component patterns
- Ensure accessibility (ARIA attributes)
- Test across different browsers
- Use Claude for React best practices

## Learning Objectives
- Building reusable React components
- Component library architecture
- Theming and styling strategies
- Testing React components
- Documentation with Storybook
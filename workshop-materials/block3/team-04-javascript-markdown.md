# Team 4: JavaScript Markdown Parser

## Repository Information
**Repository:** https://github.com/markedjs/marked  
**Language:** JavaScript  
**Stars:** ~32k  
**Difficulty:** Intermediate  

## Project Description
Marked is a fast, lightweight markdown parser and compiler. Built for speed and used by thousands of projects. This is a great opportunity to understand text parsing and work with a widely-used library.

**💡 Hint:** You can use [deepwiki.com](https://deepwiki.com) to get a visual and interactive understanding of the codebase structure. Simply paste the repository URL to explore the code architecture, dependencies, and relationships between different components.

## Selected Issues to Work On

### Issue 1: Add Line Numbers to Code Blocks (Beginner)
**Description:** Add optional line numbers to code blocks
- Add configuration option for line numbers
- Implement line number rendering
- Style line numbers appropriately

**Skills:** String manipulation, HTML generation, CSS

### Issue 2: Add Copy Button to Code Blocks (Beginner)
**Description:** Add a copy-to-clipboard button for code blocks
- Detect code blocks in rendered output
- Add copy button with icon
- Implement clipboard functionality

**Skills:** DOM manipulation, Clipboard API, event handling

### Issue 3: Improve Table Rendering (Intermediate)
**Description:** Enhance table functionality
- Add table sorting capability
- Implement responsive tables
- Add CSV table support

**Skills:** HTML tables, parsing, responsive design

## Getting Started

```bash
# Clone the repository
git clone https://github.com/markedjs/marked.git
cd marked

# Install dependencies
npm install

# Run tests
npm test

# Build the library
npm run build

# Test your changes
node -e "const marked = require('./lib/marked.cjs'); console.log(marked.parse('# Hello World'))"
```

## Working with Claude Code

```bash
# Understand the parser architecture
claude "Explain how the marked markdown parser processes text"

# Add new features
claude "How can I add line numbers to code blocks in marked?"

# Debug parsing issues
claude "Why is my table not rendering correctly in marked?"

# Write tests
claude "Write tests for the copy button feature in marked"
```

## Agent-Driven Testing with Claude

Agent-driven testing involves using Claude to automatically create, execute, and validate tests for CLI tools and libraries. For the Marked.js markdown parser, this approach is particularly effective because we can:

1. **Create test markdown files** with various syntax elements
2. **Run the parser** via CLI or Node.js
3. **Verify HTML output** matches expected results
4. **Test edge cases** and combinations systematically

### How Claude Can Test Markdown Parsing

Claude can help test Marked.js by:
- Generating diverse markdown test cases
- Running the parser programmatically
- Comparing actual vs expected HTML output
- Testing both CLI and programmatic interfaces
- Validating specific markdown features work correctly

### Testing Existing Functionality

Here are 3 specific test examples for existing Marked.js features:

#### Test 1: Header Parsing (ATX Style)

```bash
# Create a test markdown file with different header levels
claude "Create a test file called test-headers.md with ATX-style headers from h1 to h6, then use marked CLI to convert it and verify the HTML output contains proper heading tags"
```

Expected workflow:
1. Create `test-headers.md` with content like:
```markdown
# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6
```
2. Run: `marked -i test-headers.md -o test-headers.html`
3. Verify output contains `<h1>`, `<h2>`, etc. tags

#### Test 2: Link and Emphasis Parsing

```bash
# Test inline links, reference links, and text emphasis
claude "Create test-links.md with various link types (inline, reference) and emphasis (bold, italic), then parse with marked and verify the HTML contains proper anchor tags and emphasis elements"
```

Expected workflow:
1. Create `test-links.md` with:
```markdown
This is [inline link](https://example.com) and **bold text**.
This is *italic text* and [reference link][ref].

[ref]: https://reference.com "Reference Title"
```
2. Run: `marked -i test-links.md -o test-links.html`
3. Verify output contains `<a href="">`, `<strong>`, `<em>` tags

#### Test 3: Code Block Parsing

```bash
# Test both indented and fenced code blocks
claude "Create test-code.md with both indented code blocks and fenced code blocks (with and without language specification), parse with marked, and verify the HTML contains proper pre and code elements"
```

Expected workflow:
1. Create `test-code.md` with:
```markdown
Indented code block:

    function hello() {
        console.log("Hello");
    }

Fenced code block:
```javascript
const marked = require('marked');
console.log(marked.parse('# Test'));
```
```
2. Run: `marked -i test-code.md -o test-code.html`
3. Verify output contains `<pre><code>` elements and language classes

### Programmatic Testing Commands

```bash
# Test via Node.js directly
claude "Write a Node.js script that tests marked.parse() with various markdown inputs and validates the HTML output programmatically"

# Test CLI options
claude "Test all marked CLI options (--help, -o, -i) and verify they work correctly"

# Test with configuration
claude "Create a .marked.json config file and test how it affects parsing behavior"
```

## Example Usage
```javascript
// Basic usage
const marked = require('marked');
const html = marked.parse('# Heading\n\nSome **bold** text');

// With options (your additions)
marked.setOptions({
  codeLineNumbers: true,
  copyButton: true,
  responsiveTables: true
});

const result = marked.parse(`
\`\`\`javascript
console.log('Hello World');
\`\`\`
`);
```

## Project Structure
```
marked/
├── src/
│   ├── Lexer.js      # Tokenizes markdown
│   ├── Parser.js     # Parses tokens to HTML
│   ├── Renderer.js   # Renders HTML output
│   └── marked.js     # Main entry point
├── test/             # Test files
└── docs/            # Documentation
```

## Tips for Success
- Read the contribution guidelines first
- Understand the lexer → parser → renderer flow
- Test with various markdown inputs
- Use the existing test suite
- Ask Claude about parsing concepts

## Learning Objectives
- Understanding text parsing and lexical analysis
- Working with AST (Abstract Syntax Trees)
- Contributing to a popular open source library
- Writing comprehensive tests
- Implementing browser APIs (Clipboard)
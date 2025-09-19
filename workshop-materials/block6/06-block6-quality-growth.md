# Block 6: Quality & Growth - From Prototype to Product
**Duration:** 90 Minutes (11:05-12:35)
**Goal:** Transform your working prototype into a production-ready application with tests, proper architecture, and AI-optimized documentation

## 🎯 Block Overview
In this block, you'll elevate your MVP from "it works" to "it's ready for production". We'll focus on:
- Architecture refactoring for scalability
- Test infrastructure with Playwright
- Test-Driven Development (TDD) for new features
- Comprehensive AI documentation for future development

## 📋 Prerequisites
- Completed Block 5 with working core feature
- Git repository with landing page and first feature
- Local development environment running (`npm run dev`)

---

## Phase 1: Architecture Refactoring (20 Min)

### Step 1: Code Review with Claude (5 min)
Let Claude analyze your current codebase for improvements:

```bash
claude "Review our codebase architecture.
Identify:
- Code smells
- Missing abstractions
- Scalability issues
- Security concerns
Suggest top 3 improvements with priority ranking"
```

### Step 2: Implement Priority #1 (10 min)
Choose the highest priority improvement and implement it:

```bash
claude "Refactor: [improvement #1 from the analysis]
Ensure backward compatibility and maintain all existing functionality"
```

### Step 3: Commit Your Improvement (5 min)
```bash
git add .
git commit -m "refactor: [what and why]"
```

**Quality Checklist:**
- [ ] Code still runs without errors
- [ ] No functionality was broken
- [ ] Code is more maintainable
- [ ] Clear separation of concerns

---

## Phase 2: Test Infrastructure Setup (20 Min)

### Step 1: Playwright MCP Setup (5 min)
Install and configure the Playwright MCP server for browser testing:

#### Option A: Basic Setup (Headless Testing)
```bash
# Install Playwright MCP server for headless testing
claude mcp add playwright npx -- @playwright/mcp@latest

# Verify installation
claude "Verify Playwright MCP is working by taking a screenshot of our app"
```

#### Option B: Chrome Extension Setup (Interactive Testing)
For testing with your existing browser session (cookies, login state):

1. **Download Chrome Extension:**
   - Download from: https://github.com/microsoft/playwright-mcp/releases
   - Extract the extension folder

2. **Install Extension in Chrome:**
   - Open `chrome://extensions/` in Chrome/Edge
   - Enable "Developer mode" (top right)
   - Click "Load unpacked"
   - Select the extracted extension folder
   - You should see "Playwright MCP Bridge" in your extensions

3. **Configure Claude with Extension:**
```bash
# Install Playwright MCP server with extension support
claude mcp add playwright npx -- @playwright/mcp@latest --extension

# First use will prompt you to select a browser tab
claude "Open our app in Chrome and take a screenshot"
```

**Note:** The extension allows Claude to interact with your logged-in sessions, which is useful for testing authenticated features.

### Step 2: Understanding Testing Approaches (5 min)

**Two Different Testing Strategies:**

| Aspect | Claude via MCP | Traditional npm test |
|--------|---------------|---------------------|
| **What it is** | Claude acts as a human tester | Claude writes test files |
| **How it runs** | Real-time browser control | Automated test execution |
| **Best for** | Exploration, debugging, demos | CI/CD, regression tests |
| **Speed** | Slower (real-time actions) | Fast (headless, parallel) |
| **Repeatability** | Manual each time | Automated, consistent |
| **Example use** | "Find bugs in checkout flow" | "Run tests before deploy" |

#### Strategy A: Claude as Interactive Tester (via MCP)
Claude acts like a human QA tester, directly controlling the browser:
```bash
# Claude tests your app interactively through browser
claude "Use Playwright MCP to test our todo app:
- Navigate to localhost:5173
- Add 3 todos
- Mark one complete
- Delete one
- Verify the counter shows '1 item left'"
```
**When to use:** Quick exploratory testing, finding edge cases, testing user flows

#### Strategy B: Traditional Test Suite (via npm)
Claude writes test files that run independently:
```bash
# Claude writes test files
claude "Create a Playwright test file tests/todo.spec.js that:
- Tests adding todos
- Tests completing todos
- Tests deleting todos"

# Run tests with npm
npm run test
```
**When to use:** CI/CD pipelines, regression testing, documented test cases

### Step 3: Hybrid Approach for Development (10 min)

**Best Practice: Use both approaches together!**

1. **Start with MCP for exploration:**
```bash
# Let Claude explore and understand your app
claude "Use Playwright MCP to explore our app and identify what needs testing"
```

2. **Convert findings to test suite:**
```bash
# Based on exploration, create permanent tests
claude "Based on what you found, create a comprehensive test suite in tests/"
```

3. **Run and maintain tests:**
```bash
# Regular test execution
npm run test

# When tests fail, use MCP to debug
claude "The delete test is failing. Use Playwright MCP to debug why"
```

---

## Phase 3: Feature Sprint with TDD (45 Min)

### Round 1: Feature #2 from Landing Page (15 min)

#### TDD Cycle - Red, Green, Refactor
```bash
# Step 1: Explore the requirement with MCP (2 min)
claude "Use Playwright MCP to manually test how Feature #2 should work.
Show me what the user journey should be"

# Step 2: Write failing test file (RED - 3 min)
claude "Based on that exploration, write a Playwright test file
tests/feature2.spec.js that captures this behavior"

# Run test - should fail
npm run test

# Step 3: Implement feature (GREEN - 8 min)
claude "Implement Feature #2 to make the test pass.
Focus on functionality over aesthetics"

# Verify with both methods
npm run test  # Automated verification
claude "Use Playwright MCP to verify Feature #2 works as expected"  # Manual check

# Step 4: Refactor if needed (2 min)
claude "Review the implementation. Any improvements needed?"

# Commit
git commit -am "feat: [feature name] with test coverage"
```

### Round 2: Feature #3 from Landing Page (15 min)
Repeat the same TDD pattern:
1. Write failing test
2. Implement feature
3. Verify test passes
4. Commit

### Round 3: Polish or Stretch Goal (15 min)
Choose one:
- **Option A:** Implement a 4th feature with TDD
- **Option B:** Polish existing features (styling, UX, animations)
- **Option C:** Add data persistence with localStorage or database
- **Option D:** Improve error handling and user feedback

```bash
# Example for Option C - Data Persistence
claude "Add data persistence to our app:
1. Save user data to localStorage
2. Load data on app start
3. Handle corrupted data gracefully
Write tests first!"
```

---

## Phase 4: AI Documentation System (10 Min)

### Create Comprehensive AI Documentation Structure

Instead of a single CLAUDE.md file, we'll create a structured documentation system:

```bash
# Create the AI documentation structure
claude "Create a comprehensive AI documentation system in ai_docs/ folder:

1. Create ai_docs/README.md with:
   - Overview of all documentation files
   - Quick navigation guide
   - How to use these docs with Claude

2. Create ai_docs/PROJECT_OVERVIEW.md with:
   - Project purpose and goals
   - Problem we're solving
   - Target users
   - Key features

3. Create ai_docs/ARCHITECTURE.md with:
   - Tech stack and why we chose it
   - Folder structure explanation
   - Data flow diagrams (as ASCII art)
   - Key design patterns used

4. Create ai_docs/DEVELOPMENT_GUIDE.md with:
   - How to add new features (step-by-step)
   - Testing approach and examples
   - Code style and conventions
   - Common patterns in this codebase

5. Create ai_docs/DOMAIN_CONCEPTS.md with:
   - Key business/domain terms
   - Data models and relationships
   - Business rules and constraints

6. Update CLAUDE.md to reference the ai_docs folder:
   - Point to ai_docs/ for detailed documentation
   - Include quick-start instructions
   - List available custom commands

Make everything optimized for AI agents to understand the project quickly."
```

### Verify Documentation Quality
Test with a fresh Claude session:

```bash
# Start new session to test documentation
claude --new-session "Read the CLAUDE.md and ai_docs folder.
Then explain our project and add a small new feature"

# Update documentation based on gaps
claude "What information was missing? Update ai_docs/ to fill these gaps"
```

### Final Commit
```bash
git add .
git commit -m "docs: comprehensive AI documentation system"
```

---

## 🎯 Success Criteria

By the end of Block 6, you should have:

### Code Quality ✅
- [ ] Refactored architecture with clear separation of concerns
- [ ] No code smells or obvious improvements needed
- [ ] Consistent code style throughout

### Testing ✅
- [ ] Playwright MCP server configured and working
- [ ] At least 3 integration tests passing
- [ ] Every feature has test coverage
- [ ] Tests run with `npm run test`

### Documentation ✅
- [ ] `ai_docs/` folder with 5+ documentation files
- [ ] CLAUDE.md pointing to ai_docs structure
- [ ] Documentation tested with fresh Claude session
- [ ] Clear instructions for adding new features

### Git History ✅
- [ ] Clean commit history with descriptive messages
- [ ] Each feature in its own commit
- [ ] Tests and implementation committed together
- [ ] At least 8-10 commits in Block 6

---

## 💡 Pro Tips

### TDD Best Practices
- **Write the test first** - It defines what success looks like
- **Keep tests simple** - Test one thing at a time
- **Test user behavior** - Not implementation details
- **Red-Green-Refactor** - Don't skip the refactor step

### AI Documentation Tips
- **Be specific** - Include exact file paths and function names
- **Show examples** - Code snippets help AI understand patterns
- **Explain "why"** - Not just what, but why decisions were made
- **Keep updated** - Documentation should evolve with code

### Common Pitfalls to Avoid
- ❌ Writing features without tests
- ❌ Committing broken code
- ❌ Over-engineering simple features
- ❌ Forgetting to document decisions
- ❌ Writing documentation for humans instead of AI

---

## 🚀 Stretch Goals

If you finish early, try these advanced challenges:

1. **Performance Optimization**
   ```bash
   claude "Analyze our app performance and implement lazy loading"
   ```

2. **Accessibility Audit**
   ```bash
   claude "Run accessibility tests and fix any issues found"
   ```

3. **API Mocking**
   ```bash
   claude "Set up MSW for API mocking in tests"
   ```

4. **Custom Claude Commands**
   ```bash
   claude "Create custom commands in .claude/commands/ for:
   - Running specific test suites
   - Generating new components
   - Checking deployment readiness"
   ```

---

## 📝 Reflection Questions

At the end of Block 6, discuss with your team:
1. How did TDD change your development approach?
2. What patterns emerged that you'll keep using?
3. Which refactoring made the biggest impact?
4. How does AI documentation differ from traditional docs?

Document your answers in `team-learnings.md` for the final discussion.
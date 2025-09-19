# Block 5: MVP Ideation & Foundation
*Build Something That Helps YOU - From Idea to Working Prototype*

## 🎯 Block Goal
In 95 minutes, go from a personal problem to a working local prototype with a clear specification (landing page) and functional first feature.

## 🛠️ Tech Stack Guidelines

### Landing Page (Keep it SIMPLE)
- **Pure HTML/CSS/JavaScript** - No framework needed!
- **Single file** that opens in browser (file://)
- **No backend required** - just a static page
- **Purpose:** Define your MVP scope and features

### Application Stack
- **Frontend:** Your choice - React or Vue with Vite + TypeScript
- **Backend:** PocketBase (Backend-as-a-Service)
- **Styling:** Tailwind CSS (optional but recommended)
- **State Management:** Use PocketBase's realtime subscriptions
- **Important:** If you think you need more than PocketBase, challenge that assumption!

---

## Phase 1: Personal Problem Discovery (20 Min)

### Your Task
Find a real problem from your daily life that you can solve with a web app.

### Step 1: Brainstorm with Structure (10 min)
Fill out this template for 2-3 problems:

```markdown
PROBLEM TEMPLATE:
- Who has this problem? [You, your family, your team]
- What is the problem? [Specific pain point]
- How is it solved today? [Current workaround]
- Why isn't that enough? [The opportunity]
```

### Step 2: Use Claude as Sparring Partner (5 min)
```bash
claude "I want to build something that helps with [your problem area].
What are common frustrations people have with this?
Give me 3 specific, solvable problems."
```

### Step 3: Choose and Refine (5 min)
Pick ONE problem and write a one-sentence statement:

**"I [specific problem] which causes [specific pain]"**

Example: "I forget my daily medication which causes health issues and anxiety"

---

## Phase 2: Landing Page as Specification (25 Min)

### Your Task
Create a simple HTML landing page that defines your MVP scope.

### Step 1: Create the Landing Page (15 min)

**Setup Git and GitHub CLI:**
```bash
# Install GitHub CLI if not already installed
# Mac: brew install gh
# Windows: winget install --id GitHub.cli
# Or download from: https://cli.github.com/

# Authenticate with GitHub (one-time setup)
gh auth login
```

**Create project with Git:**
```bash
# Create project directory
mkdir my-mvp-project
cd my-mvp-project

# Initialize git repository
git init
git branch -M main
```

**Generate landing page with Claude:**
```bash
claude "Create a single-file HTML landing page for a solution to: [your problem]

Requirements:
- Single HTML file with embedded CSS and JS
- Include:
  * Hero section with clear value proposition
  * EXACTLY 3 key features (no more!)
  * How it works in 3 simple steps
  * Call-to-action button (can just show alert for now)
- Make it look professional with embedded CSS
- No external dependencies"

# Commit the landing page
git add index.html
git commit -m "feat: Initial landing page defining MVP scope"
```

### Step 2: Publish to GitHub Pages (3 min)
```bash
# Create GitHub repository and push
gh repo create my-mvp-project --public --source=. --remote=origin --push

# Enable GitHub Pages (Windows-compatible one-liner)
gh api repos/:owner/:repo/pages --method POST --field source[branch]=main --field source[path]=/

# Get your live URL (wait ~1 minute for deployment)
echo "Your site will be live at:"
echo "https://$(gh api user --jq .login).github.io/my-mvp-project/"

# Open locally for testing
open index.html  # Mac
start index.html # Windows
```

### Step 3: Review and Refine (2 min)

**Quality Check:**
- [ ] Would I actually use this?
- [ ] Are the 3 features clear and achievable?
- [ ] Is the scope realistic for today?

**If scope is too big:**
```bash
claude "This landing page is too ambitious.
Simplify to focus on ONE core feature that solves 80% of the problem.
Update the landing page accordingly."

# Commit refinements
git add index.html
git commit -m "refactor: Simplify scope to focus on core feature"
git push
```

---

## Phase 3: Tech Stack Setup (10 Min)

### Your Task
Set up your development environment with the chosen stack.

### Step 1: Initialize the Project (5 min)

```bash
# Create the app in a subfolder
claude "Set up a new Vite project with:
- React or Vue (my preference: [state your choice])
- TypeScript
- Tailwind CSS
- Create it in an 'app' subfolder
- Add PocketBase client library"
```

### Step 2: Set up PocketBase (3 min)

```bash
# Download PocketBase (Claude will help)
claude "Help me download and run PocketBase locally for development.
I'm on [Mac/Windows/Linux]."

# Typically:
# 1. Download from https://pocketbase.io/docs/
# 2. Run: ./pocketbase serve
# 3. Admin UI at: http://127.0.0.1:8090/_/
```

### Step 3: Verify Setup (2 min)

```bash
# In the app folder
cd app
npm run dev

# Check:
# - Vite dev server running
# - PocketBase admin accessible
# - Can create a test collection in PocketBase
```

---

## Phase 4: Core Feature Implementation (25 Min)

### Your Task
Implement the FIRST feature from your landing page - make it work, not pretty!

### Step 1: Create Data Model (5 min)

```bash
claude "Based on my landing page's first feature: [describe it]
Help me create the PocketBase collection schema.
Keep it minimal - only essential fields."
```

Go to PocketBase Admin UI and create the collection.

### Step 2: Build the Feature (15 min)

```bash
claude "Implement the first key feature from my landing page.
- Use the PocketBase collection we just created
- Make it functional, not beautiful
- Focus on the core interaction
- Include basic error handling"
```

### Step 3: Test and Iterate (5 min)

```bash
# Test in browser
npm run dev

# Fix any issues
claude "The feature isn't working because [describe issue].
Help me fix it."
```

**Success Criteria:**
- [ ] Feature matches what landing page promises
- [ ] Can create/read data from PocketBase
- [ ] User can interact with it
- [ ] No console errors

---

## 💡 Tips for Success

### Keep It Simple
- **Don't** add authentication yet
- **Don't** worry about perfect styling
- **Don't** implement all 3 features
- **Do** focus on one working feature

### Use PocketBase Effectively
```javascript
// Simple state management with PocketBase
import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');

// Create
const record = await pb.collection('items').create(data);

// Read with realtime updates
pb.collection('items').subscribe('*', (e) => {
  // Update your UI state here
  console.log(e.action, e.record);
});

// No need for Redux/Pinia/Zustand!
```

### Common Problems & Solutions

**"I need user authentication"**
→ Skip it for now! Use a hardcoded user ID

**"I need complex state management"**
→ PocketBase subscriptions + React/Vue reactivity is enough

**"I need a custom backend"**
→ Can PocketBase rules/hooks solve it? Usually yes!

**"My feature is too complex"**
→ What's the simplest version that still provides value?

---

## ✅ Phase Checklist

By the end of Block 5, you should have:

1. **Problem Statement** ✓
   - One clear sentence
   - Real problem you personally face

2. **Landing Page** ✓
   - Single HTML file
   - 3 features defined
   - Opens locally in browser

3. **Development Setup** ✓
   - Vite + React/Vue running
   - PocketBase running locally
   - Can see both UIs

4. **Working Feature #1** ✓
   - Creates/reads data
   - Matches landing page promise
   - Works locally

## 🚀 Ready for Block 6!
In the next block, we'll add tests, improve architecture, and implement features 2 & 3.
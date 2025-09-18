# AI Agent Interaction Patterns

## Pattern 1: Iterative Human-in-the-Loop

### Concept
Step-by-step development with continuous human control and feedback.

### When to use?
- Critical production fixes
- Complex refactorings
- Security-critical code
- When context needs to be built incrementally

### Examples

#### Basic Iteration
```bash
# Step 1: Small task
claude "Create a simple calculator function"

# Perform review, then extend
claude "Add error handling to the calculator"

# Review again, then finalize
claude "Add logging and make it production-ready"
```

#### Bug Fix with Control
```bash
# Analysis
claude "Analyze this error and explain possible causes"

# Get solution suggestion
claude "Suggest a fix but don't apply it yet"

# Implement after review
claude "Apply the fix we discussed"
```

## Pattern 2: Reusable Commands

### Concept
Save frequently used prompts as reusable commands in `.claude/commands/` directory.

### When to use?
- Recurring code reviews
- Standard checks (Security, Performance)
- Team-specific conventions
- Project-specific analyses
- Git workflow automation
- Branch management

### Examples

#### Building a Command Library in your USER Folder
```bash
# Create commands directory in your home directory
cd ~
mkdir -p .claude/commands
```

## Create explain command
Edit .claude/commands/explain.md and paste the following in:
```
Explain this code in simple terms, focusing on:
- What it does
- How it works
- Why it's implemented this way
```

# Security Check
Use claude code to write a security check command

```
Check for security vulnerabilities including:
- SQL injection
- XSS attacks
- Authentication bypass
- Input validation issues
Suggest fixes with code examples.
```

It is successful if in your UserDirectory ".claude/commands/filenameforsecurity.md" or the like exists
# Test Generation
Create the file .claude/commands/testme.md
```
Write comprehensive tests including:
- Happy path cases
- Edge cases
- Error handling
- Performance considerations
```

#### Advanced Command Examples

##### Conventional Commits (from tevm-monorepo)
```bash
cat > .claude/commands/commit.md << 'EOF'
Create a git commit using conventional commit format:
- Use appropriate type (feat, fix, docs, style, refactor, test, chore)
- Add relevant emoji (🎨, 🐛, 📚, ✨, ♻️, ✅, 🔧)
- Write descriptive message explaining the purpose
- Follow project commit standards
- Include scope if applicable
EOF
```

##### Git Worktrees Management
```bash
cat > .claude/commands/create-worktrees.md << 'EOF'
Create git worktrees for development:
- List all open PRs and create worktrees
- Handle branch names with slashes properly
- Clean up stale worktrees
- Support custom branch creation
- Set up proper remote tracking
EOF
```

##### Branch Naming Convention
```bash
cat > .claude/commands/update-branch-name.md << 'EOF'
Update branch name to follow team conventions:
- Use format: type/ticket-number/short-description
- Valid types: feat, fix, chore, docs, test
- Ensure ticket number from JIRA/GitHub issue
- Convert description to kebab-case
- Update remote branch if needed
EOF
```

#### Using Commands in Interactive Mode
```bash
# In your Claude session
/explain
/security
/commit

# Commands are context-aware
"Use the /commit command to create a commit for my changes"
"Run the /security command on the auth module"
```

## Pattern Combinations

### Review + Command Pattern
```bash
# Create review commands with specific focus areas
# In .claude/commands/review-security.md:
Review focusing on: SQL injection, XSS, auth bypass

# In .claude/commands/review-performance.md:
Review focusing on: N+1 queries, memory leaks, bottlenecks

# Usage:
/review-security
/review-performance
```

### Iterative + Command Pattern
```bash
# Use custom commands iteratively
claude "/security"  # First security check
# Fix issues found
claude "/security"  # Verify fixes
claude "/commit"    # Commit when clean
```

## Decision Framework

| Situation | Recommended Pattern | Reasoning |
|-----------|-------------------|------------|
| Bug in Production | Human-in-the-Loop | Maximum control needed |
| Daily Code Review | Reusable Commands | Standardized process |
| New Feature | Human-in-the-Loop | Step-by-step implementation |
| Legacy Refactoring | Combination patterns | Incremental with standards |
| Test Creation | Reusable Commands | Consistent test patterns |
| Security Audit | Reusable Commands | Standardized checks |

## Best Practices

### Do's
- Start small, expand iteratively
- Create commands for team standards
- Use clear, specific prompts
- Build context incrementally
- Reviews between iterations

### Don'ts
- Too many tasks at once
- Uncontrolled changes in production
- Commands without documentation
- Missing verification of outputs
- Ignoring warnings

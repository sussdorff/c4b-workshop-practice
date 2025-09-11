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
claude-code "Create a simple calculator function"

# Perform review, then extend
claude-code "Add error handling to the calculator"

# Review again, then finalize
claude-code "Add logging and make it production-ready"
```

#### Bug Fix with Control
```bash
# Analysis
claude-code "Analyze this error and explain possible causes"

# Get solution suggestion
claude-code "Suggest a fix but don't apply it yet"

# Implement after review
claude-code "Apply the fix we discussed"
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

#### Building a Command Library
```bash
# Create commands directory
mkdir -p .claude/commands

# Create explain command
cat > .claude/commands/explain.md << 'EOF'
Explain this code in simple terms, focusing on:
- What it does
- How it works
- Why it's implemented this way
EOF

# Security Check
cat > .claude/commands/security.md << 'EOF'
Check for security vulnerabilities including:
- SQL injection
- XSS attacks
- Authentication bypass
- Input validation issues
Suggest fixes with code examples.
EOF

# Test Generation
cat > .claude/commands/testme.md << 'EOF'
Write comprehensive tests including:
- Happy path cases
- Edge cases
- Error handling
- Performance considerations
EOF
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
/command explain
/command security
/command commit

# Commands are context-aware
"Use the commit command to create a commit for my changes"
"Run the security command on the auth module"
```

## Pattern 3: Task Decomposition

### Concept
Break down large, complex tasks into manageable subtasks.

### When to use?
- Implementing new features
- Large refactorings
- Migration projects
- Architecture changes

### Examples

#### Feature Decomposition
```bash
# Let Claude break down the task
claude-code "Break down this task into subtasks: 
'Implement user authentication with OAuth2'"

# Output: List of subtasks
# 1. Setup OAuth2 Provider Configuration
# 2. Create Authentication Middleware
# 3. Implement Token Management
# 4. Add User Session Handling
# 5. Create Login/Logout Endpoints
# 6. Write Tests
# 7. Update Documentation

# Tackle individual subtasks
claude-code "Implement subtask 1: Setup OAuth2 Provider Configuration"
```

#### Migration Planning
```bash
# Create migration plan
claude-code "Create a step-by-step migration plan from 
jQuery to React for this application"

# Execute each step individually
claude-code "Execute migration step 1: 
Set up React build pipeline alongside existing code"
```

## Pattern Combinations

### Review + Command Pattern
```bash
# Review command with specific focus areas
claude-code --save-command "review-security" \
  "Review focusing on: SQL injection, XSS, auth bypass"

claude-code --save-command "review-performance" \
  "Review focusing on: N+1 queries, memory leaks, bottlenecks"
```

### Decomposition + Human-in-the-Loop
```bash
# Create plan
claude-code "Create implementation plan for feature X"

# Each step with review
for step in 1 2 3 4 5; do
  claude-code "Implement step $step of the plan"
  echo "Review step $step before continuing..."
  read -p "Press enter to continue"
done
```

## Decision Framework

| Situation | Recommended Pattern | Reasoning |
|-----------|-------------------|------------|
| Bug in Production | Human-in-the-Loop | Maximum control needed |
| Daily Code Review | Reusable Commands | Standardized process |
| New Feature | Task Decomposition | Manage complexity |
| Legacy Refactoring | Combination of all | Step-by-step with standards |
| Test Creation | Reusable Commands | Consistent test patterns |
| Documentation | Task Decomposition | Structured approach |

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

## Team-specific Commands

Create your own command library:

### C4B Team Commands
```bash
# C4B Telephony-specific
cat > .claude/commands/c4b-channel.md << 'EOF'
Analyze this telephony channel code:
- Check C4B naming conventions
- Verify channel state management
- Review error handling for call scenarios
- Ensure proper logging for debugging
EOF

# Flutter/Dart Standards
cat > .claude/commands/flutter-review.md << 'EOF'
Review Flutter code against C4B style guide:
- Widget composition patterns
- State management approach
- Null safety compliance
- Performance optimizations
- Accessibility requirements
EOF

# C# Backend Patterns
cat > .claude/commands/csharp-service.md << 'EOF'
Review C# service for microservice patterns:
- Dependency injection setup
- Repository pattern implementation
- Error handling and logging
- API versioning
- Unit test coverage
EOF
```

### Exercise: Create Your Team's Commands

1. **Identify Repetitive Tasks**
   - What do you review in every PR?
   - What standards does your team follow?
   - What questions do you ask about code?

2. **Create Command Files**
   ```bash
   # Create your first team command
   mkdir -p .claude/commands
   echo "Review this code for our team standards" > .claude/commands/team-review.md
   ```

3. **Test and Refine**
   - Use the command on real code
   - Adjust the prompt based on results
   - Share with team for feedback

4. **Link to Team Repository**
   - Commands created in Block 3 team repos
   - Can be shared across projects
   - Version controlled with your code
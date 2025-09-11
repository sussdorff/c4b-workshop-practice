# Claude Code Installation Guide

## System Requirements
- **Operating System:** macOS 10.15+, Ubuntu 20.04+/Debian 10+, or Windows 10+
- **Hardware:** 4GB+ RAM
- **Software:** Node.js 18+ and npm
- **Network:** Internet connection required
- **Account:** Claude.ai Pro/Max or Anthropic Console account (provided by workshop)

## Pre-Installation Check

### 1. Verify Node.js Installation
```bash
node --version  # Should be v18 or higher
npm --version   # Should be v8 or higher
```

If Node.js is not installed, download from: https://nodejs.org/

## Installation

### Step 1: Install Claude Code Globally

**Important:** Do NOT use `sudo` for npm install

```bash
npm install -g @anthropic-ai/claude-code
```

### Step 2: Verify Installation
```bash
claude doctor
```

This command checks:
- Installation status
- System compatibility
- Environment configuration
- Common issues

### Step 3: Authentication

**Workshop Setup:** You'll receive login credentials from the workshop organizer.

Start the authentication process:
```bash
claude
```

On first run, Claude will:
1. Prompt for authentication method
2. Open a browser for login
3. Store credentials securely
4. Create a "Claude Code" workspace

**Authentication Options:**
- **Claude.ai Pro/Max** (workshop default)
- **Anthropic Console** (requires billing setup)
- **Enterprise** (Amazon Bedrock/Google Vertex AI)

## Platform-Specific Notes

### macOS/Linux
- Works best with Bash, Zsh, or Fish shells
- Terminal app or iTerm2 recommended

### Windows
- Supports Windows Terminal, PowerShell, or Git Bash
- WSL 1/2 fully supported
- For Git Bash: Set `CLAUDE_CODE_GIT_BASH_PATH` environment variable

### 4. First Test
Navigate to any project directory and run:
```bash
claude
```

Try your first command:
```
What does this project do?
```

## Workshop Practice Repository

For the hands-on exercises in Block 2, we'll use a dedicated practice repository:

### Clone the Practice Repository
```bash
git clone https://github.com/sussdorff/c4b-workshop-practice.git
cd c4b-workshop-practice
```

This repository contains:
- **calculator/** - Calculator module with intentional bugs to fix
- **todo-app/** - Simple todo application to improve
- **utils/** - Utility functions for refactoring practice
- **README.md** - Detailed exercise instructions

You'll use this repository throughout Block 2 to practice:
- Bug hunting and fixing
- Writing tests
- Code improvements
- Documentation

## Quickstart Commands

After installation, try these commands in order:

### 1. Start Interactive Session
```bash
cd your-project-directory
claude
```

### 2. Explore Your Project
Ask Claude about your codebase:
```
What does this project do?
What technologies does this project use?
Where is the main entry point?
```

### 3. Make Your First Edit
```
Add a hello world function to this project
```

Claude will:
- Find the appropriate file
- Show you the proposed changes
- Ask for your approval
- Make the edit

### 4. Git Integration
```
What files have I changed?
Create a commit with these changes
```

## Troubleshooting

### Run Diagnostics First
```bash
claude doctor
```

### Common Issues

#### Command not found
```bash
# Check npm global install path
npm config get prefix

# Add to PATH (macOS/Linux)
export PATH=$PATH:$(npm config get prefix)/bin

# Add to PATH (Windows)
set PATH=%PATH%;%APPDATA%\npm
```

#### Authentication Issues
```bash
# Clear credentials and re-authenticate
claude logout
claude login
```

#### Permission Errors
```bash
# Fix npm permissions (do NOT use sudo)
npm config set prefix ~/.npm-global
export PATH=~/.npm-global/bin:$PATH
```

#### Corporate Proxy
```bash
# Set proxy environment variables
export HTTP_PROXY=http://proxy.company.com:8080
export HTTPS_PROXY=http://proxy.company.com:8080
npm config set proxy http://proxy.company.com:8080
```

## Pro Tips for Workshop

### Essential Commands
```bash
claude           # Start interactive session
claude doctor    # Check installation
claude --help    # Show all commands
```

### Recommended Workflow
1. Navigate to your project: `cd /path/to/project`
2. Start Claude: `claude`
3. Let Claude explore first: "What does this code do?"
4. Be specific in requests: "Add error handling to the login function"
5. Review changes before approving

### Best Practices
- **Be Specific:** "Add input validation to the email field" vs "fix this"
- **Break Down Tasks:** Complex features → smaller steps
- **Use Context:** Let Claude understand your project first
- **Review Changes:** Always review before accepting edits

## Resources

- **Official Docs:** https://docs.anthropic.com/en/docs/claude-code
- **Quickstart:** https://docs.anthropic.com/en/docs/claude-code/quickstart
- **CLI Reference:** https://docs.anthropic.com/en/docs/claude-code/cli-reference
- **Workshop Support:** Available throughout the session
- **Discord Community:** https://discord.gg/anthropic
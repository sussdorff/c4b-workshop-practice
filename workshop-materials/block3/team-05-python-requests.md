# Team 5: Python HTTP Testing Tool

## Repository Information
**Repository:** https://github.com/httpie/cli  
**Language:** Python  
**Stars:** ~33k  
**Difficulty:** Intermediate  

## Project Description
HTTPie is a modern, user-friendly command-line HTTP client for the API era. It makes CLI interaction with web services as human-friendly as possible, featuring syntax highlighting, JSON support, and an intuitive UI.

**💡 Hint:** You can use [deepwiki.com](https://deepwiki.com) to get a visual and interactive understanding of the codebase structure. Simply paste the repository URL to explore the code architecture, dependencies, and relationships between different components.

## Selected Issues to Work On

### Issue 1: Add Response Time Display (Beginner)
**Description:** Show request/response timing information
- Display total request time
- Show DNS lookup time
- Add time breakdown (connect, transfer, etc.)

**Skills:** HTTP timing, performance metrics, formatting

### Issue 2: Add Retry Mechanism (Intermediate)
**Description:** Implement automatic retry for failed requests
- Add --retry flag with count
- Implement exponential backoff
- Show retry attempts in output

**Skills:** Error handling, networking, CLI arguments

### Issue 3: Add Response Caching (Intermediate)
**Description:** Cache responses for repeated requests
- Cache GET requests by default
- Add cache control flags
- Show cache hit/miss in output

**Skills:** Caching strategies, file I/O, HTTP headers

## Getting Started

```bash
# Clone the repository
git clone https://github.com/httpie/cli.git httpie
cd httpie

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install in development mode
pip install -e .
pip install -r requirements-dev.txt

# Test the installation
http --version
http httpbin.org/get
```

## Working with Claude Code

```bash
# Understand the architecture
claude "Analyze the HTTPie CLI architecture and request flow"

# Implement features
claude "How do I add response timing information to HTTPie?"

# Handle edge cases
claude "What error cases should I handle for the retry mechanism?"

# Write tests
claude "Write pytest tests for the caching feature"
```

## Agent-Driven Testing with Claude

Agent-driven testing allows Claude to automatically execute HTTPie commands and validate their behavior, making it an powerful approach for testing CLI HTTP tools. Claude can run commands, analyze outputs, verify responses, and test edge cases systematically.

### How Claude Can Test HTTPie

Claude can test HTTPie by:
- Executing HTTPie commands directly in the terminal
- Analyzing command output and response data
- Validating HTTP status codes and response formats
- Testing different HTTP methods and authentication scenarios
- Verifying error handling and edge cases

### Test Examples for Existing HTTPie Functionality

#### Test 1: Basic HTTP Methods and Response Validation

```bash
# Test GET request with JSON response
claude "Execute: http GET httpbin.org/json
Verify the response contains valid JSON and check the status code is 200"

# Test POST request with data
claude "Execute: http POST httpbin.org/post name=TestUser email=test@example.com
Verify the posted data appears in the response under 'json' field"

# Test PUT request with custom headers
claude "Execute: http PUT httpbin.org/put User-Agent:HTTPie-Test Content-Type:application/json data=test
Verify the custom headers are reflected in the response"
```

#### Test 2: Authentication Testing

```bash
# Test basic authentication success
claude "Execute: http -a testuser:testpass GET httpbin.org/basic-auth/testuser/testpass
Verify authentication succeeds and response shows 'authenticated': true"

# Test basic authentication failure
claude "Execute: http -a wronguser:wrongpass GET httpbin.org/basic-auth/testuser/testpass
Verify authentication fails with 401 status code"

# Test bearer token authentication
claude "Execute: http GET httpbin.org/bearer Authorization:'Bearer test-token-123'
Verify the bearer token is properly sent and reflected in the response"
```

#### Test 3: Output Formatting and Verbose Mode

```bash
# Test verbose output shows request details
claude "Execute: http --verbose GET httpbin.org/headers X-Custom-Header:test-value
Verify the verbose output shows both request headers and response, including the custom header"

# Test JSON formatting and syntax highlighting
claude "Execute: http GET httpbin.org/json
Verify the JSON response is properly formatted and contains expected fields like 'slideshow'"

# Test different output formats
claude "Execute: http --print=HhBb GET httpbin.org/get param==test
Verify output includes request headers (H), request body (h), response headers (B), and response body (b)"
```

### Running Agent Tests

To execute these tests with Claude:

1. **Individual Test Execution**: Run each test command and ask Claude to validate the output
2. **Batch Testing**: Provide Claude with multiple commands to run sequentially
3. **Regression Testing**: Use Claude to re-run tests after making code changes
4. **Error Case Testing**: Have Claude test various failure scenarios and edge cases

Example batch test request:
```bash
claude "Run these HTTPie tests and report any failures:
1. Test basic GET: http GET httpbin.org/get
2. Test POST with data: http POST httpbin.org/post test=data
3. Test authentication: http -a user:pass GET httpbin.org/basic-auth/user/pass
4. Test custom headers: http GET httpbin.org/headers Custom-Header:value
Verify each command executes successfully and produces expected output."
```

## Example Usage
```bash
# Current usage
http GET httpbin.org/json
http POST httpbin.org/post name=John age=30

# With your additions
http GET httpbin.org/delay/2 --show-timing
http GET httpbin.org/status/500 --retry 3
http GET httpbin.org/json --cache --cache-dir ~/.http-cache
```

## Project Structure
```
httpie/
├── httpie/
│   ├── cli/           # CLI parsing and setup
│   ├── core/          # Core functionality
│   ├── output/        # Output formatting
│   ├── plugins/       # Plugin system
│   └── client.py      # HTTP client logic
├── tests/             # Test suite
└── docs/             # Documentation
```

## Tips for Success
- Study the existing plugin architecture
- Use httpbin.org for testing HTTP features
- Follow the existing code style
- Test with various HTTP methods and responses
- Use Claude to understand Python async patterns

## Learning Objectives
- Building production-quality CLI tools
- HTTP protocol understanding
- Python packaging and distribution
- Testing network applications
- Creating user-friendly command interfaces
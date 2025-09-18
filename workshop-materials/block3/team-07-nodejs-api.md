# Team 7: Node.js REST API

## Repository Information
**Repository:** https://github.com/goldbergyoni/nodebestpractices  
**Language:** JavaScript/Node.js  
**Stars:** ~97k  
**Difficulty:** Intermediate  
**Practice Repo:** https://github.com/bezkoder/node-express-mongodb

## Project Description
Work with Node.js best practices examples and a simple REST API. This combines learning industry best practices with hands-on API development, perfect for backend developers.

**💡 Hint:** You can use [deepwiki.com](https://deepwiki.com) to get a visual and interactive understanding of the codebase structure. Simply paste the repository URL to explore the code architecture, dependencies, and relationships between different components.

## Selected Issues to Work On

### Issue 1: Add Rate Limiting (Beginner)
**Description:** Implement API rate limiting
- Add rate limiting middleware
- Configure limits per endpoint
- Return proper rate limit headers

**Skills:** Express middleware, rate limiting, HTTP headers

### Issue 2: Add API Documentation (Beginner)
**Description:** Generate automatic API documentation
- Implement Swagger/OpenAPI
- Document all endpoints
- Add request/response examples

**Skills:** API documentation, Swagger, annotations

### Issue 3: Add Request Validation (Intermediate)
**Description:** Implement comprehensive input validation
- Use validation library (Joi/Yup)
- Validate request body, params, query
- Return detailed validation errors

**Skills:** Input validation, middleware, error handling

## Getting Started

```bash
# Clone the practice repository
git clone https://github.com/bezkoder/node-express-mongodb.git
cd node-express-mongodb

# Install dependencies
npm install

# Set up environment
cp .env.example .env
# Edit .env with your settings

# Start development server
npm run dev

# Test the API
curl http://localhost:8080/api/tutorials
```

## Working with Claude Code

```bash
# Analyze the API structure
claude "Analyze this Node.js REST API architecture"

# Implement features
claude "How do I add rate limiting to this Express API?"

# Security improvements
claude "Review this API for security vulnerabilities"

# Write tests
claude "Write integration tests for these API endpoints"
```

## Agent-Driven Testing with Claude

Agent-driven testing involves using Claude to automatically test your REST API by making HTTP requests, analyzing responses, and verifying functionality. This approach helps you quickly validate API behavior, catch regressions, and ensure your endpoints work as expected.

### Testing Approach for REST APIs

Claude can help you test APIs by:
- Making HTTP requests using curl or httpie
- Parsing and validating JSON responses
- Checking HTTP status codes
- Verifying data integrity
- Testing error conditions
- Automating test sequences

### Setting Up for Testing

First, ensure your API server is running:
```bash
# Start the MongoDB service
brew services start mongodb-community

# Start the Node.js API server
npm start
# Server should be running on http://localhost:8080
```

### Test Examples for Existing API Functionality

#### Test 1: Create and Retrieve Tutorial

```bash
# Ask Claude to test tutorial creation
claude "Test the tutorial creation endpoint by making a POST request to create a new tutorial with title 'Test Tutorial', description 'This is a test tutorial', and published as false. Then verify it was created by retrieving all tutorials."
```

Claude will execute commands like:
```bash
# Create a new tutorial
curl -X POST http://localhost:8080/api/tutorials \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Test Tutorial",
    "description": "This is a test tutorial",
    "published": false
  }'

# Retrieve all tutorials to verify creation
curl -X GET http://localhost:8080/api/tutorials
```

#### Test 2: Update and Verify Tutorial Changes

```bash
# Ask Claude to test tutorial updates
claude "Test the tutorial update functionality by first creating a tutorial, then updating its title to 'Updated Tutorial' and setting published to true. Verify the changes were applied correctly."
```

Claude will execute commands like:
```bash
# First create a tutorial and capture its ID
TUTORIAL_ID=$(curl -X POST http://localhost:8080/api/tutorials \
  -H "Content-Type: application/json" \
  -d '{"title": "Original Title", "description": "Test description", "published": false}' \
  | jq -r '.id')

# Update the tutorial
curl -X PUT http://localhost:8080/api/tutorials/$TUTORIAL_ID \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Updated Tutorial",
    "published": true
  }'

# Verify the update
curl -X GET http://localhost:8080/api/tutorials/$TUTORIAL_ID
```

#### Test 3: Test Search and Filter Functionality

```bash
# Ask Claude to test search capabilities
claude "Test the tutorial search functionality by creating multiple tutorials with different titles, then testing the title filter parameter to ensure it returns only matching tutorials."
```

Claude will execute commands like:
```bash
# Create multiple tutorials for testing
curl -X POST http://localhost:8080/api/tutorials \
  -H "Content-Type: application/json" \
  -d '{"title": "Node.js Tutorial", "description": "Learn Node.js", "published": true}'

curl -X POST http://localhost:8080/api/tutorials \
  -H "Content-Type: application/json" \
  -d '{"title": "MongoDB Tutorial", "description": "Learn MongoDB", "published": true}'

curl -X POST http://localhost:8080/api/tutorials \
  -H "Content-Type: application/json" \
  -d '{"title": "Express Tutorial", "description": "Learn Express", "published": false}'

# Test title filtering
curl -X GET "http://localhost:8080/api/tutorials?title=Node"

# Test published tutorials endpoint
curl -X GET http://localhost:8080/api/tutorials/published
```

### Advanced Testing with Claude

You can also ask Claude to:
- Test error conditions: `claude "Test how the API handles invalid tutorial IDs and malformed JSON requests"`
- Validate response structure: `claude "Verify that all tutorial endpoints return the expected JSON schema"`
- Performance testing: `claude "Make 10 concurrent requests to test API response times"`
- Clean up test data: `claude "Delete all tutorials created during testing"`

### Tips for Effective Agent Testing

1. **Be specific in your requests**: Tell Claude exactly what you want to test
2. **Include expected outcomes**: Specify what responses you expect
3. **Test both success and failure cases**: Ask Claude to test invalid inputs
4. **Use environment variables**: Store base URLs and common headers
5. **Combine tests**: Ask Claude to run multiple related tests in sequence

## API Endpoints
```javascript
// Current endpoints
GET    /api/tutorials      // Get all tutorials
GET    /api/tutorials/:id  // Get single tutorial
POST   /api/tutorials      // Create tutorial
PUT    /api/tutorials/:id  // Update tutorial
DELETE /api/tutorials/:id  // Delete tutorial

// With your additions
// All endpoints now have:
// - Rate limiting (100 req/hour)
// - Input validation
// - Swagger documentation at /api-docs
```

## Project Structure
```
node-express-api/
├── app/
│   ├── controllers/   # Request handlers
│   ├── models/        # Data models
│   ├── routes/        # Route definitions
│   ├── middleware/    # Custom middleware
│   └── validators/    # Input validators
├── config/            # Configuration
├── tests/            # Test files
└── server.js         # Entry point
```

## Example Implementation
```javascript
// Rate limiting
const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests
});

// Validation
const { body, validationResult } = require('express-validator');
router.post('/tutorials',
  body('title').isLength({ min: 3 }),
  body('description').notEmpty(),
  handleValidationErrors,
  createTutorial
);
```

## Tips for Success
- Test with Postman or Thunder Client
- Use nodemon for auto-reload during development
- Follow RESTful conventions
- Implement proper error handling
- Use Claude for best practices guidance

## Learning Objectives
- Building RESTful APIs with Express
- Middleware implementation
- API security best practices
- Documentation standards
- Testing API endpoints
# 4. API Testing

## What is an API?

An **API** (Application Programming Interface) is a computing interface that enables communication and data exchange between two independent software systems. It defines how requests are made, what data formats are used, and what responses to expect.

In simple terms, an API lets software components talk to each other — for example, a weather app might use an API to get data from a weather service.

## What is API testing?

**API testing** verifies that APIs behave as expected. Instead of testing through the UI (clicking buttons, entering text), it interacts directly with the underlying service using requests and examines the responses.

Key aspects tested:

- **Functionality** — does the API do what it's supposed to?
- **Reliability** — is the API available and stable over time?
- **Performance** — how fast does the API respond?
- **Security** — are unauthorized users kept out?

## API testing vs. GUI testing

| Aspect | API Testing | GUI Testing |
|---|---|---|
| Focus | Business logic layer | User interface |
| Input/Output | Structured data (JSON/XML) via software | User actions (keyboard, mouse) |
| Speed | Faster | Slower |
| Maintenance | Easier | More fragile |

## API testing approach

A predefined strategy the QA team follows to conduct API testing once the build is ready:

1. **Understand the API's functionality** — read the documentation, identify endpoints, methods (GET, POST, etc.), input parameters, and expected responses.
2. **Design test cases** — using techniques such as Equivalence Partitioning, Boundary Value Analysis, and Error Guessing.
3. **Set input parameters** — define what data each API request needs.
4. **Execute and validate** — run the test cases, compare actual vs. expected responses, log and retest issues.

## API testing in UiPath

API automation testing requires an application that can be interacted with via an API. Ways to interact with an API in UiPath:

- **HTTP Activities** — use the HTTP Request activity to send requests directly.
- **Import API Definition (Swagger/OpenAPI)** — bring structured API definitions into UiPath Studio.
- **Import Postman Collection** — use existing Postman test collections within Studio.
- **Integration Service** — use UiPath's pre-built connectors to work with SaaS platforms.

## What is Postman?

Postman is a collaboration platform for API development — its features simplify each step of building an API and streamline collaboration.

---

[← Create a Custom Connection](03-custom-connection-integration-service.md) · [Next: Coded Test Cases →](05-coded-test-cases.md)

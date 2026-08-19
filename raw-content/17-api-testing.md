Slide 17 of 28
API Testing
By
null null

What is API?

An API (Application Programming Interface) is a computing interface that enables communication and data exchange between two independent software systems. It defines how requests are made, what data formats are used, and what responses to expect.

In simple terms, an API allows software components to talk to each other. For example, a weather app might use an API to get data from a weather service.

What is API Testing?

API Testing is a type of software testing that focuses on verifying that APIs behave as expected. Instead of testing through the UI (like clicking buttons or entering text), API testing interacts directly with the underlying service using calls (requests) and examines the responses.

Key aspects tested in API Testing:

- Functionality – Does the API do what it's supposed to?
- Reliability – Is the API available and stable over time?
- Performance – How fast does the API respond?
- Security – Are unauthorized users kept out?

API Testing vs GUI Testing

[TABLE]
| Aspect | API Testing | GUI Testing |
|---|---|---|
| Focus | Business logic layer | User interface |
| Input/Output | Structured data (JSON/XML) via software | User actions (keyboard, mouse) |
| Speed | Faster | Slower |
| Maintenance | Easier | More fragile |

API Testing Approach

API Testing Approach is a predefined strategy or a method that the QA team will perform in order to conduct the API testing after the build is ready.

To effectively test APIs, follow this general approach:

Understand the API's functionality
- Read the API documentation or definition.
- Identify the endpoints, methods (GET, POST, etc.), input parameters, and expected responses.

Design Test Cases
Use techniques such as:
- Equivalence Partitioning
- Boundary Value Analysis
- Error Guessing

Set Input Parameters
- Define what data is needed for each API request.

Execute and Validate
- Run the test cases.
- Compare actual vs expected responses.
- Log issues and retest if needed.

API Testing in UiPath

API Automation Testing requires an application that can be interacted via an API. The ways available in order to interact with an API are:

HTTP Activities
- Use HTTP Request activity to send requests directly.

Import API Definition (Swagger/OpenAPI)
- Bring structured API definitions into UiPath Studio.

Import Postman Collection
- Use existing Postman test collections within Studio.

Integration Service
- Use UiPath's pre-built connectors to easily work with SaaS platforms.

What is Postman?

Postman is a collaboration platform for API development. Postman's features simplify each step of building an API and streamline collaboration so you can create better APIs—faster.

Now let's see how to do API Testing using UiPath Test Suite...

CONTINUE

Slide 22 of 28
Testing Framework
By
null null

Overview

The Test Automation Framework is a template that provides a foundation for testing projects by incorporating essential best practices. The framework includes capabilities for managing assets, constants, logging, and exception handling.

You can install the testing framework from the studio template's view.

How it works

The template follows three consecutive phases:

SetUp (SetUp.xaml)

This phase prepares robot environment for testing. In this stage we initialize all the Assets, make sure that the application under test is started and ready for testing, we start any logging tools that are necessary to capture test results.

If the initialization is successful, the execution moves to the Run Test phase. If it fails, the execution ends, the test case fails, generating a screenshot that is available in Orchestrator.

Run Test

This phase is where the Test Case is executed. The Placeholder activity changes at runtime into an Invoke Workflow File activity. This activity then invokes the Test Case with the execution template attached to it. This creates a temporary workflow file called Generated – TestCaseName.

The Test Case is wrapped in a Timeout Scope that has the Throw Exception After input value set to the TestTimeOut constant.

If the execution of the Test Case exceeds the TestTimeOut, it stops the execution. This is useful in case a process ends up in an infinite loop, as it stops the execution so the robot can be free.

TearDown

This phase finalizes the test case execution and performs necessary actions to clean up the environment for future runs.

In this stage you can:
- collect any logs or debug information about the test that was executed
- gracefully stop the application under test
- attach any files or output using the Attach Document activity

Customizing the template

To configure the template for your specific use case, follow these steps:

1. In the Data folder, open the Assets.json file, and add the Orchestrator assets you need to access.
   Use the Assets.json file for any type of assets, except credentials. To use credential assets defined in Orchestrator, add them as a Constant instead.
2. In the Data Manager, under Constants, add the credential assets you want to use. To access them add a Get Credential activity
   If the credential asset is stored in a different Orchestrator folder than the one where the process is running, create another Constant to store the folder name.
3. Change the TestTimeOut constant to modify the allowed execution time of a test case.

Feel free to add your custom flows and adapt the testing framework to suite your needs

Exercise

Create a new project based on the test framework and explore it's features.

Best practices - Build a Scalable Test Automation Framework in UiPath by following UiPath's recommended structure:

- Object Repository: Centralize UI elements for reusability and maintainability.
- Workflows (Reusable Components): Create modular workflows for common actions.
- Use Library projects to store reusable components for easy sharing across multiple test cases/test projects.
- Organize test cases logically into folders based on functionalities (e.g., Login Tests, API Tests, UI Tests).
- Use the Test Automation Framework template, to implement stable and scalable automation projects;
- Test cases should be independent of each other. One test case should not depend on another test case's run.
- If you find the Given part to be cumbersome, it might be a problem with how the test case was defined - maybe it is not atomic enough and some refactoring is required;
- A test case should have one specific purpose - each test should contain only one logical verification point, but it can have multiple verification activities for that point;
- Every feature should have a test. If exceptions are allowed, create a separate test case for each of them.
- Do not delete, move or rename the test cases outside of Studio. Perform these actions in Studio only. Use Import Test Cases in case there is a test cases from another project that should be referenced.

CONTINUE

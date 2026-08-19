Slide 18 of 28
Coded Test Cases
By
null null

What are they?

Coded automations allow you to create automation solutions using code instead of visual design (low-code). They serve as the equivalent of standard automations in Studio but provide the flexibility and extensibility of coding. Within Studio, there is a built-in C# code editor dedicated to designing and developing these coded automations.

When you create coded automations, you can leverage activity packages as services and activities as APIs. This allows for seamless integration with external systems, databases, APIs, and other services. Therefore, you can easily establish connections, retrieve data, send requests, perform operations, and exchange information with various external resources.

In addition to the available activity packs, any .Net object can be used. Also, additional .Net references can be retrieved from, for example, the nuget.org feed.

Types of coded automations

There are several new file types introduced by coded automation.
Let's check them out!

[ACCORDION -- three expandable panels, content below]

Coded Workflows
Coded Workflows are the equivalent of Sequences that are also entry points (e.g. Main.xaml in a new empty process project). Note that they can be set as a Main entry point as well. They can be invoked just like any XAML file, using the Invoke Workflow File activity.

Coded Test Cases
Coded Test Cases are the equivalent of Test Cases.

Code Source Files
Code Source Files have no exact match, they simply represent files containing source code. They are slightly similar to non-entry point XAML files, e.g. utility files or XAMLs implementing part of the business logic.

The programming language used for code inside these files is C# (irrespective of whether VB or C# is the expression language). Also, coded automations allow you to use custom classes and data types within workflows.

This programming language was chosen since it's a popular language used by many software developers, especially those familiar with the .NET ecosystem, with which UiPath integrates well. Other programming languages may also be supported in the future.

When you create a coded test case, you define a Given-When-Then structure. This structure consists of three phases:

Arrange - The arrange phase prepares the application.

Act - The act phase performs specific actions.

Assert - The assert phase verifies the expected results.

Coded test cases can also invoke other low-code workflows or test cases, allowing code reuse. This integration enables the creation of flexible test scenarios.

You can apply execution templates for Coded test cases, as well.

Structure

Coded automations feature a structured design with namespaces, helper classes, and entry point methods.

You can use coded automations only in Windows and Cross-platform projects.

Why is it useful

Here are some of the benefits of using coded automations:

- Enhanced productivity
- Complexity management
- Hybrid automation
- Improved performance
- Readability
- Collaboration

Now, almost everything that could be done in low-code automations can be done in coded automations, usually more quickly.

There are, however, a few scenarios where Coded Automation really shines: experienced software test engineers designing test automations.

E.g. Scenarios:
1. Tester familiar with writing Selenium/Appium/Playwright tests, low learning curve and enables much better collaboration and review.
2. Using Test Cloud to run both UiPath tests and tests in other frameworks in the Suite, all while being able to gradually port these tests to UiPath.

Exercise:

In the project provided open the folder Coded Test Cases.
Open the TC_Coded_Login.cs and examine the file. Then run it.
Note: if you renamed the project you will need to tweak the file dependencies to reflect the new namespace

Generate a coded test cases for one manual test case that has manual steps.

Coded automation — Tips and tricks

Here are some tips and tricks to help you design efficient and robust coded automations. You can use these insights to optimize your code, avoid errors, and maximize performance.

- It is recommended to leave namespaces as they are without making changes.
- Store an action inside a class and reuse it throughout your project, so you avoid duplicating code.
- You can remove namespaces that you imported during design time, but aren't necessary anymore.
- If you need to get data from multiple applications, separate the phases of the coded automation, so you don't mix data coming from various sources.

UiPath Studio User Guide
Learn more about using activity packages in coded automations.
[GO TO DOCS button]

CONTINUE

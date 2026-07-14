# 5. Coded Test Cases

## What are they?

**Coded automations** let you build automation solutions using code instead of visual (low-code) design. They're the equivalent of standard automations in Studio, but with the flexibility and extensibility of coding. Studio includes a built-in C# code editor for designing and developing them.

When you create coded automations, you can use activity packages as services and activities as APIs — enabling seamless integration with external systems, databases, APIs, and other services: connecting, retrieving data, sending requests, performing operations, and exchanging information.

Any .NET object can also be used, and additional .NET references can be pulled from feeds such as nuget.org.

## Types of coded automations

??? note "Coded Workflows"
    The equivalent of Sequences that are also entry points (e.g. `Main.xaml` in a new empty process project) — they can be set as a Main entry point too, and invoked like any XAML file using the Invoke Workflow File activity.

??? note "Coded Test Cases"
    The equivalent of Test Cases.

??? note "Code Source Files"
    No exact low-code equivalent — they're files containing source code, slightly similar to non-entry-point XAML files such as utility files or XAMLs implementing part of the business logic.

The language used inside these files is **C#**, regardless of whether VB or C# is the expression language — chosen for its popularity among .NET developers, with which UiPath integrates well. Other languages may be supported in the future. Coded automations also allow custom classes and data types within workflows.

When you create a coded test case, you define a Given-When-Then structure with three phases:

- **Arrange** — prepares the application.
- **Act** — performs specific actions.
- **Assert** — verifies the expected results.

Coded test cases can invoke other low-code workflows or test cases, enabling code reuse and flexible test scenarios. You can also apply execution templates to coded test cases.

## Structure

Coded automations feature a structured design with namespaces, helper classes, and entry point methods. They can only be used in Windows and Cross-platform projects.

## Why is it useful

- Enhanced productivity
- Complexity management
- Hybrid automation
- Improved performance
- Readability
- Collaboration

Almost everything possible in low-code automations can be done in coded automations — usually faster. Coded automation especially shines for experienced software test engineers designing test automations, for example:

1. Testers familiar with Selenium/Appium/Playwright get a low learning curve and better collaboration/review.
2. Using Test Cloud to run both UiPath tests and tests from other frameworks side by side, while gradually porting them to UiPath.

!!! example "Exercise"
    1. In the provided project, open the **Coded Test Cases** folder.
    2. Open `TC_Coded_Login.cs`, examine it, and run it.

        !!! note
            If you renamed the project, you'll need to tweak the file dependencies to reflect the new namespace.

    3. Generate a coded test case for one manual test case that has manual steps.

## Tips and tricks

- Leave namespaces as they are — avoid renaming them.
- Store an action inside a class and reuse it throughout your project to avoid duplicating code.
- Remove namespaces you imported at design time but no longer need.
- If you need data from multiple applications, separate the phases of the coded automation so you don't mix data from different sources.

📖 See the [UiPath Studio User Guide](https://docs.uipath.com){target=_blank} to learn more about using activity packages in coded automations.

---

[← API Testing](04-api-testing.md) · [Next: Additional Exercises →](06-additional-exercises.md)

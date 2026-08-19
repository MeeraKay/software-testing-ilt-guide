Slide 8 of 28
From manual test case to test automation
By
null null

Test Explorer

Test Explorer is a panel that shows information relevant to test automation. You can use Test Explorer and its sub-panels to group tests together, perform debugging, or analyze activity coverage.

When running or debugging a testcase, one can also see in the Test Explorer Panel the results and also the Activity Coverage which is the percentage of activities that were executed.

Conditions

Test Explorer results information is session-based. This means that if you close Studio the information shown in Test Explorer will be cleared.
The test cases are listed in Test Explorer based on an execution order.

Working with Test Explorer

To show only relevant information, you can use the Test Explorer toolbar to filter test results based on result state. Additionally, you can use multiple options to run the test cases again.

Descriptor Coverage

Descriptor Coverage is a panel that shows information on object recognition UI elements that have been covered during execution. The coverage results are shown in Test Explorer, in the Descriptor Coverage panel. You can use this panel to view activity coverage when you work with Selectors (opens in a new tab) or Object Repository (opens in a new tab).

Analyzing descriptor coverage results

To view coverage during test execution, you need to run a test case invoking workflows that contain Selectors or make use of Object Repository.

You can analyze selector coverage or debug workflows with failed coverage. If you run all your test cases, the panel shows the number of descriptor references that have passed and provides details on failed selectors. Similarly to Activity Coverage, you can view the activities that have been covered in the Design panel. You can double-click a failed descriptor resolution to go directly to the failed selector, within the workflow.

For test cases, the descriptor coverage percentage is relative to the total number of selectors that go into a test case execution. For example, if you have a test case with selectors and an invoked workflow with selectors, the coverage calculation will be based on the total number of selectors.

Autopilot for developers

Is designed to help developers create and test automations faster and easier.

Autopilot integrates seamlessly into the workflow design experience, accelerating and streamlining the development process.

This allows experienced developers to handle more strategic tasks while also lowering the entry barrier into developing automations for citizen developers.

[IMAGE/CAPTION: Autopilot for developers Features used in Test Automation Projects]

Capabilities

The powerful capabilities offered by Autopilot for developers include:

- Creating workflows, coded workflows, and test cases using natural language instructions.
- Generate coded workflows and test cases using custom prompts within the code editor.
- Generating and fixing complex expressions using natural language.
- Suggesting next steps in your automation by creating sequences of activities.
- Summarizing the inner workings of an activity or a sequence.
- Generating apps from Data Service entities, .pdf files, images, or text prompts

Exercise

Create your first automated test case using Autopilot for Developers:

1. Based on the Requirements created on previous exercise and Test Studio project already created
2. The autopilot relies on the imported Object Repository to identify and interact with UI elements
3. Go to Test Explorer Overview
4. Right click on the Test Case name and click on: Generate Test Case with Autopilot
5. Adjust it and run it

[End of lesson -- next slide preview shown: "Slide 9 - Data Driven Testing and Test Data Management"]

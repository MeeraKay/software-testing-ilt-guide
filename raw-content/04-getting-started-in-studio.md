Slide 4 of 28
Getting Started in Studio
By
null null

UiPath Studio

Studio provides specialized tools to integrate testing into the development and automation process. Studio allows you to perform both Application and RPA testing. You can use Studio to create, design, and map test cases and execution results to requirements and defects (e.g. Jira, Xray).

[IMAGE: UiPath Studio backstage view]

Test Automation Project

For application testing we use a project of type Test automation

We use the following activity packages:

UiPath.System.Activities

UiPath.UIAutomation.Activities

UiPath.Testing.Activities

Testing activities

The most important testing activities are the verify activities (assert). Let's look at a few of them:

Verify Expression

Verifies the truth value of a given expression. An Expression must be supplied in its respective property field.

Verify Expression With Operator

Verifies an expression by asserting it in relation to a given expression with an operator. The expressions tested with this activity must be inserted in their respective property fields.

Verify Control Attribute

Verifies the output of a given activity by asserting it in relation to a given expression. The activities tested with this activity must be inserted in the body of the activity and an Expression and Operator must be supplied in their respective property fields.

Verify Range

Verifies if an expression is located or not within a given range. The expressions tested with this activity must be inserted in their respective property fields.

Properties for verification activities

ContinueOnFailure - Specifies if the automation should continue even when the activity throws an error. The default value is True. As a result, if the field is False and an error is thrown, the execution of the project stops. If the value is set to True, the execution of the project continues regardless of any error.
TakeScreenshotIfFailed - If set to True, takes a screenshot of the target process if the verification has failed.
TakeScreenshotIfSucceded - If set to True, takes a screenshot of the target process if the verification has been successful.
AlternativeVerificationTitle - Specifies an alternative display name. This property overrides the default DisplayName, which is the verification activity name that shows up in Orchestrator.
OutputMessageFormat - Specifies the format of the output message.
Result - Reflects the state of the verification activity. You can use this to send notifications or create reports for failed verifications.

Test case

A Test case is a specification of the input, execution conditions, testing procedure, and expected results that define a single test.

Widely adopted as a best practice for Test Case design:

[TAB INTERACTION: GIVEN / WHEN / THEN -- three tabs, content of each below]

GIVEN
In the Given part, setup to prepare for the desired testing action is performed

WHEN
In the When part, the workflow to be tested should be invoked and the data to be compared with the "expected data" should be available

THEN
In the Then part, the expected result should be compared with the actual result and the "context clean-up" should be done

CONTINUE

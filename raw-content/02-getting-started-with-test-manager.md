Slide 2 of 28
Getting started with Test Manager
By
null null

What is Test Manager?

Test Manager is a web application part of UiPath Test Cloud, where you can plan, run, manage and analyze testing of applications.

Test Cloud offers a strong automation and testing ecosystem for managing all your testing operations: from automating tests, to distributing them, executing, and managing, you can perform all of these things in the context of a customizable cloud organization.

Why is Test Manager useful?

Testing involves a wide range of activities, from the creation and execution of manual and automated test cases to reporting, requirement and defect management, CI/CD integration, and others.

One of the biggest challenges is to make testing an integral part of the development process. This requires linking software development assets (e.g. user stories, epics, requirements) to software testing assets (e.g. test cases, test results, test executions), as well as a solution to manage and synchronize all the data generated in both processes. Test Manager is the component serving these purposes.

How does Test Manager work?

[IMAGE: Test Manager - Architecture design diagram]

What is the typical testing flow with Test Manager?

1

Requirements are created either in Test Manager (TM) or in external tool and imported in TM.

2

Tester defines, generate (using Autopilot) or imports Test Cases in TM and optionally documents them with Task Capture.

3

Test Developer goes over documentation and automates defined Test Cases (from step 2) in Studio.

4

Test Developer links Test Case (automation) from Studio to Test Case (design) in TM .

5

Test Developer publishes automated Test Cases from Studio to Orchestrator.

6

Test Developer creates test sets in Test Manager.

7

Test sets are being executed automated and/or manual from Test Manager.

8

Based on the Test Execution Results, reports are being generated. If needed defects are generated (optional and only if you link to an external ALM tool).

Import Project

You can import projects from external sources to conduct testing operations through Test Manager. Use this feature to transfer entire testing projects from different Application Lifecycle Management (ALM) systems to Test Manager.

Importing the project follows a schema that converts external system projects (e.g., testing applications) into a format that can be read by Test Manager. This includes objects such as requirements, test cases, test sets, test results, labels, custom fields, and attachments. The import process is done asynchronously and it should follow the expected format.

It's your turn now!

Import the following TMH file in your Test Manager instance.

Modify Name and Prefix by adding a suffix with your name. e.g. UiBank_{your name} and UIB{initials}

This is the project on which you will be working on.

[ATTACHMENT: UIB_UiBank_2024_03_01_18_18_46_3481.tmh -- 7.2 KB, project import file for Test Manager]

Test Manager Best Practices
CONTINUE

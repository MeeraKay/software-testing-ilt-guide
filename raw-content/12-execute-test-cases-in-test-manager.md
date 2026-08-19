Slide 12 of 28
Execute Test cases in Test Manager
By
null null

Test Sets - Overview

Test Sets are logical groups of test cases. The purpose of test sets is to define groups of tests that should be executed together within one run.

For instance, a smoke test is a group of tests that only check for top-critical capabilities. Whenever any test case from a smoke test fails, there is a critical problem. Executing a smoke test should not take too long.

By comparison, a regression test is a comprehensive test which should provide a detailed overview over the system under test. Execution often takes hours or even days.

To define the set of tests to be executed for those purposes, test sets are created. A test case can be assigned to several test sets.

Conditions

- Test sets in Test Manager can include both manual and automated test cases.
- It is possible to include test cases from multiple Studio projects in a test set. However, Test Manager cannot execute test cases from multiple Studio projects.
- Test sets linked from Orchestrator to Test Manager include only the test cases from Orchestrator.
- You can run test sets from either a default or a specified execution folder. This allows you to exclusively execute test cases that are part of that particular folder.
- Moreover, you also have the option to specify particular packages and their versions from which the test cases will be exclusively run.

1. In the Planning section, click Test Sets. The Test Sets page is displayed.
2. Click Create Test Set. The Create Test Set window is displayed.
3. Fill in the form as follows:
   - Name - Enter a name for the test set.
   - Description - (Optional) Enter a description for the test case. In order to add formatted text, you can use Markdown syntax.
   - Enable RPA activity coverage calculation (only for RPA testing) - Select this to view the activity coverage of the test set under Test Results, after each automated execution.
   - Labels - Add any number of labels which makes it easy to find test set with joint labels.
4. Click Create. The test set is created and displayed in the Test Sets page.

Before the deprecation of the Orchestrator Testing tab, you need to transfer all remaining test artefacts to Test Manager. You can import your Orchestrator test sets from the Test Sets section of your project. Learn how here (opens in a new tab).

Assigning test cases to a test set

You can simultaneously assign test cases to a test set in two different ways:

- Using Static Assignment - select the test cases manually. Learn more about it here (opens in a new tab).
- Using Dynamic Assignment - input the label of the test cases that you want to assign. Learn more about it here (opens in a new tab).

Executing test sets—Overview

You can execute tests either manually or automatically. Manual test executions are invoked through Test Manager, whereas automated executions are invoked through Test Manager and executed via Orchestrator.

To execute your test cases, you must first create a test set, which will be later executed.

Conditions

- You can use both Execute Manually and Execute Automated for test sets created in Test Manager as well as the linked test sets from Orchestrator.
- Only the test case versions included in the test set are executed. If you want to execute new test cases, you need to assign new versions to your test set.
- For Orchestrator test sets, you need to make sure that the latest packages are published.

[TAB INTERACTION: "Automated execution" / "Manual execution" -- both tab contents captured below]

Executing test sets manually

Both Test Manager test sets and test sets that have been linked from Orchestrator can be executed manually.

Let's look at the steps to Execute Manually:

1. Open your project in Test Manager and then navigate to Test Sets.
2. Select a test set and click the vertical ellipsis.
3. Select Execute Manually. The Manual execution assistant (opens in a new tab) opens in a new window. Make sure your popup blocker allows the window to be opened.

Note:
- Test cases that do not contain any manual steps will be skipped during execution without producing any result.
- Automated test case can have manual steps defined and can also be executed manually.

Alternatively, you can open your test set, click Execute and select Manually from the dropdown.

Manual execution assistant

The manual execution assistant lets you perform a set of manual tests one after each other. You need to set a result on each manual step to advance to the next test case in the test set. Through the Manual Execution Assistant, you need to treat and mark steps in each case either as passed or failed.

Use Set Failed or Set Passed to mark a step in each case.
Add comments, especially in case of a failure, to provide details about the particular result.

You can set several consecutive steps as passed by clicking Set Passed Till Here.

Once the last step of a test case has a result assigned, you can click Next. This enables you to go to the next test case from the test set.

Once you are finished with the last test case, clicking Done finishes the execution entirely.

Executing test sets automated

You can execute all test sets using Execute Automated. Orchestrator is invoked for test cases that have been linked to Test Manager.
To execute test sets linked from Orchestrator, make sure you create your test sets in Orchestrator.

You can also execute automated test if the test set includes test cases linked from Studio (opens in a new tab).

Conditions

To use the Execute Automated option, you need at least one automated test case in a test set.

- Test execution for test sets linked from Orchestrator includes only the test cases that have been published to the Orchestrator Tenant Process Feed in the latest package version. If you want to execute new test cases, you need to publish a new package version in Orchestrator, and then link the test set to Test Manager.
- If your Test Manager test set includes test cases from multiple Studio projects, then the project that has the highest number of test cases is considered for execution. Therefore, only the test cases from this project will be executed. In this case, you will receive the following message within Test Manager: "Test cases from multiple packages have been selected. Some of the test cases will not execute while running this test set." You can execute test sets including test cases from multiple Studio projects, only if you have a test set linked from Orchestrator.
- If your test set includes test cases that are duplicate in multiple Studio projects, the sorting is done by the project name in descending order. Only the test cases from the project that is placed first in the list will be executed

Let's look at the steps to Execute Automated:

1. Open your project in Test Manager and then navigate to Test Sets.
2. Select a test set and click the vertical ellipsis.
3. Select Execute Automated.

Note: Test cases that cannot be executed are skipped during execution through Orchestrator. Test cases that are not executed generate test case logs with no result.

Alternatively, you can open your test set, click Execute and select Automated from the dropdown.

Re-executing test set executions steps

1. Go to Execution and choose one of the following:
   - Select More Options for the test execution that you want to redo.
   - Open the test execution and select Tasks.
2. Select one of the following:
   - Re-execute manually (available only for manual test executions).
   - Re-execute automated (available only for automated test executions).
   - The Re-execute dialog appears.
3. Select Confirm and execute the manual steps or wait for the automated test set to finish.

Re-executing test set executions doesn't display the activity coverage anymore.

[VIDEO: embedded walkthrough -- "Now let's watch the video so we can get a better understanding of how to work with test sets in Test Manager"]

Exercise

Create a test set for your published tests.

Creating pending executions

A pending test execution is similar to a regular test execution made during a test set run, the only difference being that no tests are run immediately. A pending execution assigns the None result for each test case from the test set, allowing you to start tests later or to execute them in chunks or individually.

When you can use pending executions

- When you want to execute tests at a later time or not all at once, but still reflect the current state of the test set.
- When some tests are run manually while others are supposed to run automated.
- When you want the executed tests to reflect the current state of a test set including the selected test cases.

Enforcing an execution order

You can set a specific execution sequence for test cases within a test set or a test execution. This sequence determines the order in which the test cases run initially. However, any changes to the order within a test execution do not affect the order in the test set. So, the sequences you set within a test set and a test execution operate independently of each other.

You can enforce a specific execution order only for statically assigned test cases, with dynamically assigned ones following in a random order only after the static ones have been completed.

CONTINUE

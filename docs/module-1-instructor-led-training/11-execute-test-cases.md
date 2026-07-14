# 11. Execute Test Cases in Test Manager

## Test sets — overview

**Test sets** are logical groups of test cases, defining groups of tests that should be executed together within one run.

For example, a **smoke test** only checks top-critical capabilities — any failure signals a critical problem, and it shouldn't take long to run. A **regression test**, by contrast, provides a detailed, comprehensive overview of the system under test, and execution can take hours or days.

A test case can be assigned to several test sets.

!!! note "Conditions"
    - Test sets can include both manual and automated test cases.
    - Test cases from multiple Studio projects can be included in a test set, but Test Manager cannot execute test cases from multiple Studio projects in the same run.
    - Test sets linked from Orchestrator to Test Manager include only the test cases from Orchestrator.
    - You can run test sets from a default or specified execution folder, and optionally restrict to specific packages and versions.

### Creating a test set

1. In the **Planning** section, click **Test Sets**.
2. Click **Create Test Set**.
3. Fill in the form:
    - **Name** — a name for the test set.
    - **Description** *(optional)* — supports Markdown syntax.
    - **Enable RPA activity coverage calculation** *(RPA testing only)* — view activity coverage under Test Results after each automated execution.
    - **Labels** — add labels to make test sets with shared labels easy to find.
4. Click **Create**.

!!! info
    Before the Orchestrator Testing tab is deprecated, transfer all remaining test artifacts to Test Manager. You can import your Orchestrator test sets from the Test Sets section of your project.

### Assigning test cases to a test set

- **Static assignment** — select test cases manually.
- **Dynamic assignment** — input the label of the test cases you want to assign.

## Executing test sets

You can execute tests manually (invoked through Test Manager) or automatically (invoked through Test Manager, executed via Orchestrator). You must create a test set before executing it.

!!! note "Conditions"
    - Both Execute Manually and Execute Automated work for Test Manager test sets and linked Orchestrator test sets.
    - Only the test case versions included in the test set are executed — assign new versions to run new test cases.
    - For Orchestrator test sets, make sure the latest packages are published.

=== "Manual execution"
    Both Test Manager test sets and test sets linked from Orchestrator can be executed manually.

    1. Open your project in Test Manager and navigate to **Test Sets**.
    2. Select a test set and click the vertical ellipsis.
    3. Select **Execute Manually** — the Manual Execution Assistant opens in a new window (make sure your popup blocker allows it).

    !!! note
        Test cases with no manual steps are skipped without producing a result. Automated test cases can also have manual steps defined and be executed manually.

    Alternatively, open your test set, click **Execute**, and select **Manually** from the dropdown.

    **Using the Manual Execution Assistant:** work through one manual test after another. Set a result on each step to advance. Use **Set Failed** or **Set Passed** to mark a step, add comments (especially for failures), or use **Set Passed Till Here** to mark several consecutive steps at once. Click **Next** after the last step of a test case, and **Done** once the last test case is finished.

=== "Automated execution"
    You can execute all test sets using **Execute Automated** — Orchestrator is invoked for test cases linked to Test Manager. To execute test sets linked from Orchestrator, create the test sets in Orchestrator first.

    !!! note "Conditions"
        - Requires at least one automated test case in the test set.
        - Execution for Orchestrator-linked test sets includes only test cases published to the Orchestrator Tenant Process Feed in the latest package version.
        - If a Test Manager test set includes test cases from multiple Studio projects, only the project with the highest number of test cases is executed — you'll see a message that some test cases won't execute.
        - If duplicate test cases exist across projects, the project placed first (sorted by name, descending) is executed.

    1. Open your project in Test Manager and navigate to **Test Sets**.
    2. Select a test set and click the vertical ellipsis.
    3. Select **Execute Automated**.

    !!! note
        Test cases that can't be executed are skipped, generating logs with no result.

    Alternatively, open your test set, click **Execute**, and select **Automated** from the dropdown.

### Re-executing a test set

1. Go to **Execution**, then either select **More Options** on the execution you want to redo, or open the execution and select **Tasks**.
2. Choose **Re-execute manually** (manual executions only) or **Re-execute automated** (automated executions only).
3. Confirm, then complete the manual steps or wait for the automated run to finish.

!!! note
    Re-executing a test set no longer displays activity coverage.

!!! example "Exercise"
    Create a test set for your published tests.

### Pending executions

A **pending execution** behaves like a regular test execution, except no tests run immediately — every test case is assigned a `None` result so you can start tests later, or run them in chunks or individually.

Use pending executions when:

- You want to execute tests later, or not all at once, while still reflecting the current state of the test set.
- Some tests run manually while others run automated.
- You want executed tests to reflect the current state of the test set, including its selected test cases.

### Enforcing an execution order

You can set a specific execution sequence for test cases within a test set or a test execution. This determines the initial run order — changes made within a test execution don't affect the order in the test set, and the two operate independently.

You can only enforce a specific order for statically assigned test cases; dynamically assigned ones run in random order after the static ones complete.

---

[← Publishing Test Cases](10-publishing-test-cases.md) · [Next: Building Your Own AI Agents →](12-building-your-own-ai-agents.md)

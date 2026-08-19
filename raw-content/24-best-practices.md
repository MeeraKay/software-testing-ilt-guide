Slide 24 of 28
Best Practices
By
null null

Best practices

- Maintain the test cases and update them after any change request;
- Activity names are descriptive, annotations are added for non-obvious behaviors, activity names should reflect the action taken;
- Consider using simulate click/ type or send windows messages, whenever possible.
- Consider using detailed logging and exception handling to debug the process and avoid false negative results.
- Plan for recovery or retry for errors at different stages to avoid failed results.
- Use assets for variables that are likely to change and used many times;
- For scenarios where an application's state must be validated before proceeding with certain steps in a process, consider applying validation measures. These measures can include using extra activities that wait for the desired application state before other interactions (hard-coded delays are not considered good practice).
- Use version control (Git/Automation Ops) to track test script changes and ensure collaboration.

Optimize Test Execution Performance

- Run tests in unattended mode (background execution) for faster results.
- Reduce Execution Time by Avoiding Unnecessary Waits: replace static delays (Delay Activity) with dynamic wait mechanisms.
- Minimize UI interactions by using API and database validations where possible.

Workflow Analyzer

Workflow Analyzer is a static code analyzer that ensures your project meets high quality and reliability standards. A static code analyzer checks for inconsistencies without actually executing the project, as opposed to dynamic analyzers which step in during execution.

Workflow Analyzer uses a set of rules to check for various inconsistencies unrelated to project execution.

It is available in the Design ribbon tab, the Analyze File and Analyze Project buttons. The first performs an analysis on the file currently focused in the Designer panel, while the second analyzes all files in the automation project.

Testing Workflow Analyzer Rules

The rules in the Application Testing category carry the TA code in their ID and refer to workflows and automation projects. Through this set of rules, you can maintain stable automation for your projects when multiple stakeholders are working on them.

[TABLE]
| Rule Name | ID | Scope |
|---|---|---|
| Test Case Name Not Unique Within Project | TA-NMG-001 | Workflow |
| Test Case Naming Convention Broken | TA-NMG-002 | Workflow |
| Missing Verifications Within the Test Case | TA-DBP-001 | Workflow |
| Untested Workflows | TA-DBP-002 | Project |
| Test Manager Connected | TA-DBP-003 | Project |
| Unused Mocking | TA-DBP-004 | Project |
| Test Case Without Annotations | TA-DBP-005 | Workflow |
| Test Case/Workflow Too Complex | TA-DBP-006 | Workflow |
| Test Case Includes Too Many Branches | TA-DBP-007 | Workflow |

CONTINUE

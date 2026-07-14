# Other Agentic Features in Test Manager

## Autopilot Search

With Autopilot search, you can search for any test object within a project using natural language. If you're not sure what to search for, use one of the example search queries Autopilot provides. After results return, Autopilot also lets you perform actions on the resulting objects.

!!! tip "Video"
    Watch the walkthrough on searching for any test object within a project (link/embed from the source course).

## Prompt Library

The **Prompt Library** in Test Manager provides a curated collection of predefined and custom prompts that guide Autopilot — shaping the AI's behavior when generating test suggestions or analyzing requirements.

Predefined prompts address use cases including:

- End-to-End Flow Verification
- Rapid Test Idea Generation
- Elusive Issue Detection
- Boundary-Value Testing
- SAP Business Process Testing

These prompts accelerate generating relevant test scenarios or getting focused insights from requirements documentation.

### Best practices for prompt generation

1. **Leverage predefined prompts** — start with the library's predefined prompts to quickly initiate tasks and guide Autopilot effectively.
2. **Customize for your needs** — tailor prompts to your specific test cases or workflows for more accurate, relevant results.
3. **Be clear and concise** — ambiguous prompts lead to misinterpretation; straightforward language helps Autopilot understand your intent.
4. **Test and iterate** — evaluate outcomes and adjust prompts to refine results.
5. **Document effective prompts** — keep a record of prompts that work well, as a reference for future projects and team efficiency.

## AI-Powered Insights

Autopilot provides testers with actionable insights into test results without needing prebuilt templates. The goal of the resulting "test insights reports" is to help testers understand *why* test cases are failing, by generating a report with Autopilot.

The report can include up to five sections, each with multiple insights. For each insight, select the icon showing the number of test cases, or click **Show**, to view affected objects (test cases or test case logs) and search through them.

| Section | Description |
|---|---|
| Overview | Average failure rate, test set failure rate, and percentage of errors by severity for the selected test results. |
| Top Failing Tests | The most frequently failed test cases, with direct access to them. |
| Common Errors | The most common errors encountered during test executions. |
| Error Patterns | Categorizes errors so you can identify failure patterns and troubleshoot more easily. |
| Recommendations | Suggestions to prevent encountered errors and optimize test execution stability. |

!!! warning "Content gap in the source material"
    The original course lesson ends here, on a "Let's see how it works." callout with no follow-through (no video embed, no Continue button) — this looks like an unfinished slide upstream rather than a deliberate ending. Flagging so this section gets a proper close (e.g. the demo video, or a short wrap-up) before publishing.

---

[← Database Testing](05-database-testing.md) · [Next: SAP Heatmap and Change Impact Analysis →](07-sap-heatmap.md)

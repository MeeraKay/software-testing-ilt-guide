# SAP Heatmap and Change Impact Analysis

## SAP Heatmap

**Heatmap** is a data visualization solution that helps business users understand SAP system usage and answer what to test and where to start testing, based on real system data. Data is aggregated and summarized for daily, weekly, or monthly overlays, helping you determine test relevance and test coverage.

The size of a box on the Heatmap shows how relevant a test is for a specific goal — essentially, "how often and how heavily is this transaction used?"

### Test relevance

Box size is calculated and weighted based on:

- Number of users
- Number of executions
- Overall execution time
- Transaction complexity (based on the number of development objects)
- Transaction intensity

### Test coverage

Box color shows execution coverage via executed test cases:

- **Gray** — test case doesn't exist, or wasn't executed.
- **Red** — test case exists, but at least one execution has failed.
- **Green** — test case exists, and all executions passed.

The heatmap supports SAP ECC, SAP S/4HANA, and SAP EWM systems.

## Change Impact Analysis for SAP

The heatmap offers a **Change Impact Analysis** sublayer that analyzes your SAP system for changes and shows their testing status, so you can allocate testing effort more efficiently.

To analyze the impact of changes over your testing portfolio, select **Analyze Transports** in the top right (hover the info icon next to it for a preview of how many transports can be analyzed).

Powered by AI and machine learning, Change Impact Analysis for SAP scopes testing around any changes made in your SAP system, identifying the test cases that need to run so you test the right things.

!!! example "Exercise using SAP Heatmaps"
    1. Go to **Project Settings**.
    2. Then **Integrations**.
    3. Create a new SAP connection.
    4. Give it a name, and choose **Upload from CSV** as the data source.
    5. Add the CSV file below, then save.

    :material-file-download: **Heatmap DEMO CSV 2024.csv** (131.6 KB) — sample SAP heatmap data for the exercise

    **Finish by adding a test case to one transaction:**

    1. Click **Create Sales Order**.
    2. The block expands — find **Create Test Case** on the right and click it.
    3. Add some dummy steps.
    4. Run it manually.
    5. Observe the color change in the Heatmap.

---

[← Other Agentic Features in Test Manager](06-other-agentic-features.md) · [Next: CI/CD →](08-cicd.md)

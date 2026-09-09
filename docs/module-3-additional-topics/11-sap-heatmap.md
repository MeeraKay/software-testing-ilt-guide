# SAP Heatmap and Change Impact Analysis

## SAP Heatmap

**Heatmap for SAP** is a data visualization solution that helps business users understand SAP system usage and answer what to test and where to start testing, based on real system data. Data is aggregated and summarized for daily, weekly, or monthly overlays, helping you determine **test relevance** and **test coverage**.

![SAP Heatmap](../assets/images/SAP%20heatmap.gif)

The size of a box on the Heatmap shows how relevant a test is for a specific goal — essentially, "how often and how heavily is this transaction used?"


<video width="100%" controls style="border-radius: 6px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12), 0 4px 12px rgba(0, 0, 0, 0.08); margin: 20px 0;">
  <source src="../../assets/videos/SAP%20Heatmap.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>


### Test relevance

Box size is calculated and weighted based on:

- Number of users
- Number of executions
- Overall execution time
- Transaction complexity (based on the number of development objects)
- Transaction intensity

### Test coverage

Box color shows execution coverage via executed test cases:

- **<span style="color: #9E9E9E;">Gray</span>** — test case doesn't exist, or wasn't executed.
- **<span style="color: #F44336;">Red</span>** — test case exists, but at least one execution has failed.
- **<span style="color: #4CAF50;">Green</span>** — test case exists, and all executions passed.

!!! info
    The heatmap supports **SAP ECC, SAP S/4HANA,** and **SAP EWM** systems.

## Change Impact Analysis for SAP

The heatmap offers a **Change Impact Analysis** sublayer that analyzes your SAP system for changes and shows their testing status, so you can allocate testing effort more efficiently.

![Change Impact Analysis](../assets/images/Change%20Impact%20analysis.jpg)


To analyze the impact of changes over your testing portfolio, select **Analyze Transports** in the top right (hover the info icon next to it for a preview of how many transports can be analyzed).

Powered by AI and machine learning, Change Impact Analysis for SAP scopes testing around any changes made in your SAP system, identifying the test cases that need to run so you test the right things.


<video width="100%" controls style="border-radius: 6px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12), 0 4px 12px rgba(0, 0, 0, 0.08); margin: 20px 0;">
  <source src="../../assets/videos/Change%20Impact%20analysis.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

!!! example "Exercise using SAP Heatmaps"
    1. Go to **Project Settings**.
    2. Then **Integrations**.
    3. Create a new SAP connection.
    4. Give it a name, and choose **Upload from CSV** as the data source.
    5. Add the CSV file below, then save.

    :material-file-download: [**Heatmap DEMO CSV 2024.csv**](../assets/Files/Heatmap%20DEMO%20CSV%202024.csv) (131.6 KB) — sample SAP heatmap data for the exercise

    **Finish by adding a test case to one transaction:**

    1. Click **Create Sales Order**.
    2. The block expands — find **Create Test Case** on the right and click it.
    3. Add some dummy steps.
    4. Run it manually.
    5. Observe the color change in the Heatmap.

---

[Next → CI/CD](12-cicd.md){: .md-button .md-button--primary}

---

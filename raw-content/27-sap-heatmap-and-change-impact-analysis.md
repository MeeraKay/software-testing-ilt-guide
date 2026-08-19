Slide 27 of 28
SAP Heatmap and Change Impact Analysis
By
null null

SAP Heatmap

Heatmap is a data visualization solution that helps business users understand the usage of the SAP system and answer questions about what to test and where to start testing based on real system data. The data is aggregated and summarized to be visually presented in Heatmap via daily, weekly, or monthly overlays. Use heatmap for SAP to determine test relevance and test coverage.

You can use the Heatmap for SAP to more easily determine test relevance and test coverage. The size of the box on the Heatmap displays how relevant the test is for achieving a specific goal. Essentially, the size of the box answers the question: "How often and how heavily is this transaction used?"

Test Relevance

The size of the box in the Heatmap displays how relevant the test is for achieving a specific goal. Test relevance is calculated and weighted based on parameters such as:
- number of users
- number of executions
- overall execution time
- transaction complexity (based on the number of development objects)
- transaction intensity

Test Coverage

The colors of the boxes provide a visualization of the execution coverage of a transaction through executed test cases. The colors show the following:
- Gray: test case doesn't exist or wasn't executed.
- Red: test case exists, but at least one execution has failed.
- Green: test case exists, and all executions passed.

The heatmap supports the SAP ECC, SAP S/4HANA, and SAP EWM systems.

Change Impact Analysis for SAP

The heatmap offers the Change Impact Analysis sublayer that analyzes your SAP system for changes and shows the testing status of them, so you can allocate your testing efforts more efficiently.

To analyze the impact of changes in your SAP system over your testing portofolio, select Analyze Transports in the top right. Hover over the information icon next to Analyze Transports for a preview number of your transports that can be analyzed.

Powered by artificial intelligence (AI) and machine learning, Change Impact Analysis for SAP equips you with the information you need to scope testing around any changes made in your SAP system. Using impact analysis, Change Impact Analysis identifies test cases that need to be executed so you can ensure you're testing the right things.

Exercise using SAP Heatmaps

1. Go to Project Setting.
2. Then Integrations.
3. Create a new Sap connection.
4. Give it a name, and choose as Data Source the option Upload from CSV.
5. Add the csv file below, then Save.

[ATTACHMENT: Heatmap DEMO CSV 2024.csv -- 131.6 KB, sample SAP heatmap data for the exercise]

SAP Heatmap

Explore the newly added Heatmap from the menu.

Finish by adding a test case to one transaction:

1. For this exercise, click Create Sales Order.
2. The block expands and you will find Create Test Case option on the right side of the screen. Click it to create a test case.
3. Add some dummy steps
4. Run it manually
5. Observe the color change in the Heatmap

CONTINUE

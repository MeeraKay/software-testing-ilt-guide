# Generating Synthetic Test Data

## Generating synthetic test data

### Using activities

UiPath provides activities that generate synthetic values directly in a workflow, including Address, Given/Last Names, Random Dates, Numbers, Strings, and custom Values.

### Using Autopilot

Autopilot supports natural language prompts to generate contextually relevant test data for supported argument types, including `String`, `Int32`, `Int64`, `Double`, `Decimal`, and `Boolean`.

!!! example "Exercise 1: Synthetic test data creation using Test Data Activities"
    1. Create approximately 10 records of synthetic test data matching the UiBank Loans application structure.
    2. Store the generated data in an Excel file within the same folder.
    3. **Optional extension:** generate 100 records following the same requirements structure.

    !!! note ""
        The Address activity returns a Dictionary with key-value pairs (`Country`, `PostalCode`, `StreetNumber`, `StreetName`, `City`, `State`) accessible via bracket notation.

## Auto Generate for path coverage

Auto Generate uses symbolic execution to intelligently create data variations that cover execution paths. It supports numeric, Boolean, and String types, as well as arrays.

!!! example "Exercise 6: Generate a test case using Auto Generate"
    1. Locate **Test Case - Generate Loan Quotes.xaml** in the **3. Test Data Management > AI Generated** folder and review its arguments.
    2. Right-click the workflow and select **Create Test Case**.
    3. Enter a unique test case name and proceed to the Test Data configuration.
    4. In the Import Data Variation Source wizard, select **Auto Generate** from the Source dropdown.
    5. Wait for and review the generated test data variations.
    6. Execute the completed test case via Test Explorer and review all variations.

---

[Next → Database Testing](06-database-testing.md){: .md-button .md-button--primary}

---

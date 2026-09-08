# Data-Driven Testing and Test Data Management

## Introduction to data-driven testing

**Learning objectives**  by the end of this chapter, you will be able to:

1. Understand data-driven testing.
2. Manage test data.
3. Compare the six different data source options available in UiPath:
    - File (Excel/JSON)
    - Generate with Autopilot (AI-powered)
    - Data Service (Automation Cloud)
    - Existing Data (project-based)
    - Auto Generate (path coverage)
4. Create data-driven test cases using multiple data sources.
5. Apply best practices for test data management.

Data-driven testing lets you execute a single test case multiple times with different input datasets, instead of creating a separate test case for every scenario.

✅ Test multiple scenarios efficiently

✅ Separate test logic from test data

✅ Easily add new test variations

✅ Achieve better test coverage

!!! note "Prerequisites"
    Orchestrator 2022.4 or later is required to use data-driven testing functionality.

## Test data management

Test data management covers three main steps:

✅ **Designing** the appropriate data for each test scenario

✅ **Provisioning** that data into the environment where tests will run

✅ **Consuming** the data during test execution

This process can consume up to 50% of testing effort. Test data management presents the following challenges:

![Test Data Management Challenges](../assets/images/test-data-challenges.png)

<div class="flip-card-grid">
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">Manual complexity</div>
      <div class="flip-card-back">Preparing datasets by hand is time-consuming and error-prone.</div>
    </div>
  </div>
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">Specialized knowledge</div>
      <div class="flip-card-back">Creating realistic, valid data often requires domain expertise.</div>
    </div>
  </div>
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">Frequent refreshes</div>
      <div class="flip-card-back">Data needs to be updated regularly to stay relevant as systems change.</div>
    </div>
  </div>
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">Coverage gaps</div>
      <div class="flip-card-back">Incorrect or incomplete data can lead to scenarios going untested.</div>
    </div>
  </div>
</div>

### Data creation approaches

Three primary strategies exist for creating test data:

<div class="flip-card-grid">
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">Production data</div>
      <div class="flip-card-back">
        <div class="flip-card-back-title">Use copy of existing production database</div>
        <ul>
          <li>GDPR</li>
          <li>Low coverage</li>
          <li>Outdated</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">Anonymized production data</div>
      <div class="flip-card-back">
        <div class="flip-card-back-title">Use anonymized copy of production database</div>
        <ul>
          <li>Complex customization</li>
          <li>Expensive</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">Synthetic data</div>
      <div class="flip-card-back">
        <div class="flip-card-back-title">Generate data that mimics production</div>
        <ul>
          <li>High coverage</li>
          <li>Reduced privacy risk</li>
          <li>Easy reproduction</li>
        </ul>
      </div>
    </div>
  </div>
</div>

!!! note "Optional topics"
    Generating synthetic test data (using Activities and Autopilot) and Auto Generate for path coverage are covered as optional topics in [Module 3 — Additional Topics](../module-3-additional-topics/05-generating-synthetic-test-data.md).


## Data Driven Test Case

A Data Driven Test Case is a specification of the multiple inputs, execution conditions, testing procedure, and expected results.

### Creating a Data Driven Test Case

To create a Data Driven Test Case, navigate to an already created Test Case and right click. You should now be able to select **Add Test Data**.

![Add Test Data Menu Popup](../assets/images/Add%20Test%20Data%20Menu%20Popup.jpg)

## The six data source options

✅ **File** (Excel/JSON) for prepared data

✅ **Generate with Autopilot** using AI capabilities

✅ **Data Service** for consolidated cloud-based management

✅ **Existing Data** from project folders

✅ **Auto Generate** for path coverage optimization

When you create a data-driven test case, the Import Data Variation Source wizard guides you through selecting your preferred data source. The following image showcases the interface where you'll choose and configure your data source option:

![Import data variations Window](../assets/images/Import%20data%20variations%20Window.jpg)

### Hands-on Practice

We'll explore four approaches to data-driven test case creation through hands-on exercises. Each tab covers one data source type with step-by-step instructions to complete your exercise.

=== "📊 File (Excel/JSON)"

    File-based data sources let you drive a test case from an Excel spreadsheet or JSON file that you prepare and maintain outside of UiPath.

    !!! example "Exercise 1: Create a data-driven test case using Excel"
        :material-file-download: [**UiBankTestData.xlsx**](../assets/Files/UiBankTestData.xlsx) (9.2 KB) — sample data for this exercise

        1. Navigate to an existing test case.
        2. Right-click and select **Add Test Data**.
        3. Choose the Excel or JSON file containing your input data.
        4. Use the **UiBankTestData.xlsx** file above, matching the UiBank Loans application structure.

=== "🤖 Generate with Autopilot"

    Generate with Autopilot uses AI to create contextually relevant test data directly within Studio, based on a natural language prompt you provide.

    !!! example "Exercise 2: Generate test data by giving instructions in natural language"
        1. Create a new test case containing three arguments: `CountryName`, `CityName`, and `IBAN`.
        2. Access Autopilot and enter this prompt: *"Generate a list of 20 European countries with names typical to the country, cities from the country, and IBANs in the country's format."*
        3. Review and import the generated test data.

=== "☁️ Data Service"

    Data Service (transitioning to the Data Fabric naming) enables centralized entity management, collaboration, and data variation updates without republishing test cases.

    !!! example "Exercise 3: Create a data-driven test case using Data Service"
        
        1. Create a new data-driven test case for the UiBank create loan flow.
        2. Link it to the `UiBankLoanData` entity.
        3. Map workflow arguments to the Data Service entity.
        4. Add a Verify activity to compare actual versus expected rate.
        5. Execute the test case and observe the data variations.

=== "📁 Existing Data"

    **Existing data** is a built-in data source option that allows you to link a test case to an existing JSON or Excel dataset that has already been stored directly inside your project's Test Data folder. This approach separates test logic from execution data, allowing you to run the same automated workflow against multiple variations without manually changing variables.

    !!! example "Exercise 4: Create a data-driven test case using Existing Data"
        1. **Locate the data file:** You will find the JSON file under the Test Data folder.
        2. **Create a data-driven test case:** in Studio's Project panel, right-click on your workflow or folder, select **Add**, and choose **Data-Driven Test Case**. Provide a descriptive name for your test case.
        3. **Select the data source:** in the configuration window, select **Existing data** from the list of data source types.

## Comparing Data Storage Approaches

Each data source method has distinct advantages and limitations. Choose the approach that best aligns with your project requirements:

<div class="flip-card-grid">
  <div class="flip-card comparison-flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">📊 Files (Excel/JSON)</div>
      <div class="flip-card-back">
        <div class="flip-card-back-title">Pros & Cons</div>
        <strong>✅ Pros:</strong>
        <ul>
          <li><strong>Ease of Use:</strong> Excel is widely used and requires little training as it's a familiar tool for most users.</li>
          <li><strong>Readily Available Tool:</strong> No additional systems or licenses needed.</li>
        </ul>
        <strong>⚠️ Cons:</strong>
        <ul>
          <li><strong>Static Nature of Data:</strong> Excel files provide static test data. Any modifications require re-importing the updated file and re-publishing test cases to Orchestrator, which slows down the process and makes it unsustainable for dynamic testing.</li>
          <li><strong>Limited Access Control:</strong> Excel doesn't inherently offer robust access control or security features.</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="flip-card comparison-flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">📁 Existing Data </div>
      <div class="flip-card-back">
        <div class="flip-card-back-title">Pros & Cons</div>
        <strong>✅ Pros:</strong>
        <ul>
          <li><strong>Ease of Setup and Maintenance:</strong> Using existing data simplifies the setup process as you don't need to generate new data for each test case. You can focus on implementing test cases instead of spending time creating datasets.</li>
        </ul>
        <strong>⚠️ Cons:</strong>
        <ul>
          <li><strong>Data Obsolescence and Maintenance Overhead:</strong> Existing data tends to become outdated quickly. Testers may need to frequently update the test data by manually making changes to files, which can introduce human error and slow down testing cycles.</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="flip-card comparison-flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">☁️ Data Service</div>
      <div class="flip-card-back">
        <div class="flip-card-back-title">Pros & Cons</div>
        <strong>✅ Pros:</strong>
        <ul>
          <li>No-code, seamless, fully integrated</li>
          <li>Secure centralized storage</li>
          <li>Direct Studio integration—no external tools needed</li>
        </ul>
        <strong>⚠️ Cons:</strong>
        <ul>
          <li>Requires initial configuration</li>
          <li>10MB file size limit</li>
        </ul>
      </div>
    </div>
  </div>
</div>




## Summary

By completing these exercises, you've learned how to create data-driven test cases using four different data source approaches. This flexibility allows you to choose the method that best fits your project's needs—whether it's Excel files for simplicity, Autopilot for AI-generated data, Data Service for centralized management, or Existing Data for project-based datasets. 

---

[Next → Orchestrator](09-orchestrator.md){: .md-button .md-button--primary}

---

# 6. Connect Your Project to Test Manager and Import the Object Repository

## Launch the downloaded ILT Test Automation project

1. Launch UiPath Studio.
2. Select **Open Local Project**.
3. Browse to the extracted project folder and select the `project.json` file.
4. Click **Open** to load the project.

## Exercise: connect Studio to Test Manager

To complete the integration with Studio, you need to configure the Test Manager settings.

1. Open Studio, then open the downloaded project.
2. In the **Design** ribbon, navigate to **Test Manager → Test Manager Settings**.
3. Go to **Test Manager Configuration** and enter your Test Manager URL.
4. Provide the Test Manager URL from Automation Cloud and choose your project in **Default Project**. Once connected, this is reflected with a green icon.
5. Click **Connect** and log in using your Test Manager credentials.
6. Select your default project from the dropdown list.
7. Click **OK** to save changes.

Now you'll find the test cases that were part of the exercise, as well as the manual test cases, here in Studio — in the **Test Explorer**.

!!! note "Image needed"
    Insert a screenshot of the **Test Explorer panel in Studio** here.

## Import the Object Repository library

1. Click **Manage Packages** from the top ribbon.
2. Go to **Settings**.
3. Provide a unique name for the package source.
4. Click the ellipsis (**...**) button and browse to the custom location where the library was saved. Select the library and click **Add**.

The custom library now appears in the left panel alongside the other defined sources.

---

[← Test Automation Project](05-test-automation-project.md) · [Next: From Manual Test Case to Test Automation →](07-manual-to-automated-test-case.md)

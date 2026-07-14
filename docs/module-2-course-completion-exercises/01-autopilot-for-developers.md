# 1. Autopilot for Developers

These exercises use Autopilot in Studio Desktop to help you build and fix automations faster. Work through each card in order — they build on the project you downloaded earlier, in the **2. Autopilot for developers** folder.

!!! example "Card 1 — Correct Expression"
    Ever found yourself stuck while building a test case because of a complex expression and data type? Autopilot understands the context of your workflow — including variables, data types, and the expression you're building — and automatically suggests or applies the appropriate correction. Especially useful with unfamiliar or complex object types.

    1. Open `Correct expression _ rename.xaml` in the **2. Autopilot for developers** folder.
    2. Right-click the **Comment Out** activity and select **Enable Activity**.
    3. Notice validation errors appear in the workflow. Open the Expression Editor for the `To Variable` property, observe the `Files` variable, then close the editor.
    4. Open the Expression Editor for the `Set Value` property. Notice the validation error in the expression.
    5. Click the **Fix** button (magic wand) at the top of the Expression Editor.
    6. Observe the expression is automatically corrected and the validation error resolved.
    7. Click **Debug / Run**.

!!! example "Card 2 — Correct Workflow Errors"
    Want to focus on the real work instead of worrying about data types and conversions?

    1. Open `Correct WF errors.xaml` in the **2. Autopilot for developers** folder.
    2. Observe the first **Assign** activity — both variables are assigned numeric values, so they're of type `Integer`.
    3. Right-click the **Comment Out** activity and select **Enable Activity**.
    4. Notice the validation error. Open the Expression Editor for the `Set Value` property and review the expression and error.
    5. Use the **Autopilot** option at the bottom of the Editor window.
    6. Add an instruction in natural language — e.g. "Change the result of this expression to String" — then click the Autopilot icon on the right of the box.
    7. Observe the expression is automatically updated and the validation error resolved.
    8. Close the editor and click **Debug / Run**.

!!! example "Card 3 — Generate Expression"
    Why memorize expression syntax when you can simply describe what you need?

    1. Open `Generate expression.xaml` in the **2. Autopilot for developers** folder.
    2. Observe the **Assign** activity, renamed "Get the First Column."
    3. Notice the `To Variable` field is already configured with the variable `FirstColumnAsList`, which stores all values from the first column of a `DataTable`.
    4. Open Data Manager and inspect the data type of `FirstColumnAsList` — it's a complex type, making the required expression hard to write manually.
    5. Open the Expression Editor for the `Set Value` property.
    6. Paste the copied instruction into the Autopilot prompt box at the bottom of the editor, then click the Autopilot icon.
    7. Observe Autopilot replaces the `[Nothing]` expression with a valid one matching the instruction and required output type.
    8. Close the editor and click **Debug / Run**.

    !!! note
        Don't use the Autopilot option in step 4 — the next exercise shows how Autopilot can generate a whole workflow or test case.

!!! example "Card 4 — Generate Low-Code Workflow"
    This exercise is covered in the [Integration Service](02-integration-service.md) lesson.

!!! example "Card 5 — Stopwatch"
    Similar to the previous exercise — you'll provide a prompt to Autopilot, and it will generate the workflow for you.

    1. Open `Stopwatch.xaml` from the **2. Autopilot for Developers** folder.
    2. A sample instruction is provided in the workflow annotation.
    3. Click the instruction — notice the **Generate** option from Autopilot on the right.
    4. Click **Generate**.
    5. Observe Autopilot generate the workflow automatically based on the instruction.
    6. Review the generated workflow, then click **Debug** or **Run** to verify it executes successfully.

---

[← Overview](index.md) · [Next: Integration Service →](02-integration-service.md)

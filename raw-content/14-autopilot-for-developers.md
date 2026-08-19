Slide 14 of 28
Autopilot for developers
By
null null

Exercises using Autopilot in Studio Desktop

[NOTE: The following exercises are presented as separate cards/panels in the original course]

Card 1: Correct Expression

Ever found yourself stuck while building a test case because of a complex expression and data type?

[Fix]

It understands the context of your workflow - including variables, data types, and the expression you're building - and automatically suggests or applies the appropriate correction. This is especially useful when working with unfamiliar or complex object types.

Steps:
1. Open the Correct expression _ rename.xaml in the 2.Autopilot for developers folder
2. Right-click the Comment Out activity and select Enable Activity from the context menu.
3. Notice that validation errors appear in the workflow. Open the Expression Editor for the To Variable property. Observe the Files variable and then close the editor.
4. Next, open the Expression Editor for the Set Value property. Notice that the expression contains a validation error.
5. Click the Fix button with a magic wand at the top of the Expression Editor.
6. Observe that the expression is automatically corrected and the validation error is resolved.
7. Click on Debug / Run

Happy learning!

Card 2: Correct Workflow Errors

Want to focus on the real work instead of worrying about data types and conversions?

[Autopilot]

Steps:
1. Open the Correct WF errors.xaml in the 2.Autopilot for developers folder
2. Observe the first Assign activity. The two variables are assigned numeric values and are therefore of type Integer.
3. Right-click the Comment Out activity and select Enable Activity from the context menu.
4. Notice that validation errors appear in the activity. Open the Expression Editor for the Set Value property. Notice that the expression and the validation error.
5. We will use the Autopilot option placed in the bottom of the Editor window.
6. Add instructions in natural language - eg: Change the result of this expression to String. Click on the autopilot icon on the right end of the box.
7. Observe that the expression is automatically updated and the validation error is resolved.
8. Close the editor.
9. Click on Debug / Run

Happy learning!

Card 3: Generate Expression

Why memorize expression syntax when you can simply describe what you need?

Use the Autopilot option in the Expression Editor. Simply describe what you want in natural language, and Autopilot generates the expression for you.

Steps:
1. Open the Generate expression.xaml in the 2.Autopilot for developers folder
2. Observe the Assign activity. It is renamed Get the First Column
3. Notice that the To Variable field is already configured with the variable FirstColumnAsList. This variable will store all the values from the first column of a DataTable.
4. Open the Data Manager and inspect the data type of FirstColumnAsList. Notice that it is a complex data type, making the required expression difficult to write manually.
   [Note: Do not use the Autopilot option here. The next exercise demonstrates how Autopilot can help generate whole workflow or testcase.]
5. Open the expression editor of Set Value property
6. Paste the copied instruction into the Autopilot prompt box at the bottom of the editor.
7. Click on the autopilot icon on the right end of the box.
8. Observe that Autopilot replaces the [Nothing] expression with a valid expression that matches the instruction and required output type.
9. Close the editor.
10. Click on Debug / Run

Happy learning!

Card 4: Generate Low Code Workflow

This exercise is covered in the Integration Service lesson

Happy learning!

Card 5: Stopwatch

This exercise is similar to the previous one. You will provide a prompt to Autopilot, and it will generate the workflow for you.

Steps:
1. Open Stopwatch.xaml from the 2.Autopilot for Developers folder.
2. Sample instruction is provided in the workflow Annotation
3. Click on the instruction. Notice the Generate option by Autopilot on the right end
4. Click Generate.
5. Observe as Autopilot generates the workflow automatically based on the provided instruction.
6. Review the generated workflow and click Debug or Run to verify that it executes successfully.

Happy learning!

CONTINUE

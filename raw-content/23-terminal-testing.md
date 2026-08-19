Slide 23 of 28
Terminal Testing
By
null null

What is a Terminal?

Terminals, also known as command lines or consoles, allow us to accomplish and automate tasks on a computer without the use of a graphical user interface. Using a terminal allows us to send simple text commands to our computer to do things like navigate through a directory or copy a file, and form the basis for many more complex automations and programming skills.

What is a Mainframe computer?

A mainframe computer is a computer used primarily by large organizations for critical applications, bulk data processing (such as the census and industry and consumer statistics, enterprise resource planning, and large-scale transaction processing). A mainframe computer is larger and has more processing power than some other classes of computers, such as minicomputers, servers, workstations, and personal computers. Most large-scale computer-system architectures were established in the 1960s, but they continue to evolve. Mainframe computers are used as (super)servers.

Setup

Since users typically access terminal-based applications through a terminal emulator, it makes sense to test them in the same manner.
UiPath provides support for the terminal emulator in the UiPath.Terminal.Activities (opens in a new tab) package.

The Terminal pack contains activities designed to connect to a terminal and efficiently work within it. You can retrieve text, fields or screen positions, send keys, text, or wait for certain text or fields to appear as triggers.

The Terminal Session is the activity that enables the user to connect to the host system or via a 3rd party terminal emulator, such as Attachmate Reflection, Attachmate Extra, Rocket Bluezone, IBM Personal Communications, Reflection for UNIX, Reflection for IBM etc.

Recovery

Recovering from unexpected errors is one of the challenges related to building test automation for terminal-based applications. Because of their stateful nature, several actions may be required to return the terminal-based application to its 'base state', where each test is designed to start and stop. The solution is to build a recovery step that is executed at the conclusion of each test. The step identifies the current screen and then calls its 'Dismiss' action. While typing either 'F3' or 'F12' may suffice for most screens, others may require a series of actions.
In some cases it may be necessary to complete the current transaction. In any case, the recovery mechanism ensures that the target application is at a known starting state before each test begins.

Exercise: Terminal Testing

Create a test case that verifies if the density of Moon is greater than 3 using the configuration below for the terminal session.
More config info at: https://ssd.jpl.nasa.gov/?horizons (opens in a new tab)

What are the commands to do such? Explore.
Don't forget to install Terminal Activities.

[INTERACTIVE SCENARIO WALKTHROUGH -- 13 steps, content below]

1 of 13 -- Exercise: Terminal Testing
We will use the Command-line interface provided by NASA's Horizons system - https://ssd.jpl.nasa.gov/?horizons. (opens in a new tab)
No account or password is required
Create a test case that uses the Horizons System CLI to retrieve information about the Moon and verify that its density is greater than 3 g/cm³
[START button]

2 of 13 -- Step 1: Test case
Create a new Test Case

3 of 13 -- Step 2: Activity package
Install Terminal Activities.

4 of 13 -- Step 3: Terminal Activity
Go to the activity panel and search for Terminal activities

5 of 13 -- Step 4: Terminal Session
Drag and drop the Terminal Session activity into the designer.
Use the configuration shown in the image.
[IMAGE: Terminal Session activity configuration]

6 of 13 -- Step 5: Record
Click OK. The Recorder wizard opens.
Perform the required actions, then save and exit the Recorder. The recorded actions are automatically converted into workflow activities and added to your test case.
Alternatively, you can build the test case by dragging and dropping the required activities into the workflow.

7 of 13 -- Step 6: Moon
Time to send commands -
Click on Type - select Type from the drop down menu
Add 'Moon' into the Text box. Click OK

8 of 13 -- Step 7: Transmit
Send the command to terminal:
Click Type. Select Send Control Key from the drop down menu
The Control Key option is set to Transmit by default. Keep this setting and click OK.
You will receive response as shown in image
[IMAGE: terminal response screenshot]

9 of 13 -- Step 8: Density data
Send the next instructions
The Horizons System returns two matching options: 3 and 301. Since we want to retrieve the Moon's physical properties, including its density, we will use 301
Repeat the previous steps to send 301 using the Type and Transmit actions.

10 of 13 -- Step 9: Extract data
Observe the response. Density data is available. We have to extract or scrape that data.
Click Get Text, then choose Get Text at Position from the drop-down menu.
Use these parameters. Alternatively you can edit it while you test the test case
Row - 8, Column - 2, Length - 36

11 of 13 -- Step 10: Test the testcase
Save and Exit
The recorded actions are automatically converted into workflow activities and added to your test case.
Create a variable to hold the output from the Get Text at Position activity
Add a log message to confirm if the actions are executing

12 of 13 -- Step 11: Add Verification
To verify the output, use Verify Expression with Operator activity
The output is stored as a String. Before you can verify that the density is greater than 3, you must extract the numeric value from the text and convert it to a numeric data type. Use Autopilot to generate the required expression.

13 of 13 -- Happy learning!
[START AGAIN button]

CONTINUE

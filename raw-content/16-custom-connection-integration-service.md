Slide 16 of 28
Create a custom connection Integration Service
By
null null

Build and Connect a Custom Connector

Follow these steps to create and connect a custom connector using the UiPath Integration Service:

Step 1: Access Integration Service
- Go to cloud.uipath.com (opens in a new tab) and log in.
- Select your tenant.
- Navigate to the Integration Service.
- Choose a folder where this connector should be available.

Step 2: Build the Connector
- Click Build a New Connector from API Definition.
- Specify the URL: https://uibank-api.uipath.com/explorer/swagger.json (opens in a new tab)
- Change the Name and Description as desired.
- Leave all the resources selected.
- Click Create.

Step 3: Configure the Connector
- In the connector details, fill in the Base URL as: https://uibank-api.uipath.com/api/ (opens in a new tab)
- Click Save.

Step 4: Set Authentication
- Go to the Authentication tab.
- Set the Authorization value to Personal Access Token (PAT).
- Click Publish to finalize your connector.

Step 5: Obtain and Use Authentication Token
- Visit UiBank API Explorer (opens in a new tab).
- Expand the User section.
- Locate and expand the POST /users/login endpoint.
- Provide the login credentials in JSON format: {"username":"<your-username>","password":"<your-password>"} e.g. {"username":"demo","password":"12345678"}
- Click Try it out and Execute.
- In the response, find the token under the id key.

Step 6: Connect
- Return to your connector in Integration Service.
- Use the retrieved token to authenticate and establish the connection.

CONTINUE

# 3. Create a Custom Connection (Integration Service)

Follow these steps to create and connect a custom connector using UiPath Integration Service.

!!! example "Step 1 — Access Integration Service"
    1. Go to [cloud.uipath.com](https://cloud.uipath.com){target=_blank} and log in.
    2. Select your tenant.
    3. Navigate to **Integration Service**.
    4. Choose the folder where this connector should be available.

!!! example "Step 2 — Build the connector"
    1. Click **Build a New Connector from API Definition**.
    2. Specify the URL: `https://uibank-api.uipath.com/explorer/swagger.json`
    3. Change the name and description as desired.
    4. Leave all resources selected.
    5. Click **Create**.

!!! example "Step 3 — Configure the connector"
    1. In the connector details, fill in the base URL: `https://uibank-api.uipath.com/api/`
    2. Click **Save**.

!!! example "Step 4 — Set authentication"
    1. Go to the **Authentication** tab.
    2. Set **Authorization** to **Personal Access Token (PAT)**.
    3. Click **Publish** to finalize your connector.

!!! example "Step 5 — Obtain and use an authentication token"
    1. Visit the UiBank API Explorer.
    2. Expand the **User** section.
    3. Locate and expand the `POST /users/login` endpoint.
    4. Provide login credentials in JSON format, e.g. `{"username":"demo","password":"12345678"}`.
    5. Click **Try it out**, then **Execute**.
    6. In the response, find the token under the `id` key.

!!! example "Step 6 — Connect"
    Return to your connector in Integration Service and use the retrieved token to authenticate and establish the connection.

---

[← Integration Service](02-integration-service.md) · [Next: API Testing →](04-api-testing.md)

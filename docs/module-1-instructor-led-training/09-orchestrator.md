# 9. Orchestrator

## Overview

UiPath Orchestrator is the centralized platform for managing and executing test automations. Used together with UiPath Test Manager, Orchestrator offers robust features for organizing, deploying, executing, and monitoring test cases and resources at scale.

## Access management

Effective access management in Orchestrator ensures that only authorized individuals can perform specific actions within the testing environment — crucial for maintaining integrity, security, and efficiency.

### Roles and permissions

**Roles** define a set of permissions that determine what actions a user or group can perform. They can be assigned at different scopes:

- **Tenant-level roles** — apply across the entire Orchestrator tenant.
- **Folder-level roles** — apply to specific folders within the tenant.

Common roles include:

- **Orchestrator Administrator** — full access to all features, including user, tenant, and folder management. Recommended for system administrators.
- **Automation User** — can run jobs, manage triggers, view logs, and use most resources needed for automation execution.
- **Folder Administrator** — minimum folder-level permissions needed to manage their own folders and subfolders.

Custom roles can also be created to tailor permissions to specific needs.

**Permissions** are granular actions that a role allows, such as creating, editing, or deleting resources. Assigning appropriate permissions ensures users can perform their tasks without overstepping boundaries.

### Assigning users and groups to tenants and folders

**Assigning to tenants:**

1. Navigate to **Tenant → Manage Access** in Orchestrator.
2. Click **Assign access → User/Robot Account/Group**.
3. Search for the user or group to assign.
4. Select the appropriate role(s).
5. Click **Assign** to confirm.

**Assigning to folders:**

Folders in Orchestrator provide a hierarchical structure for organizing automation resources, including test cases, assets, and robots — enabling fine-grained access control and resource management. Orchestrator supports up to seven levels of folder hierarchy, and access permissions are inherited from parent folders.

1. Go to **Tenant → Folders**.
2. Select the desired folder.
3. Click **Assign Accounts/Groups**.
4. Search for the user or group.
5. Choose the role(s) to assign.
6. Click **Assign** to finalize.

!!! tip "Best practices for access control"
    - **Principle of least privilege** — assign the minimum permissions necessary.
    - **Use groups for role assignment** — simplifies administration and ensures consistency.
    - **Regularly review access rights** — periodically audit user and group permissions.
    - **Separate environments** — maintain distinct Dev/Test/Prod environments with appropriate access controls.

## License configuration

### Understanding UiPath licensing in Test Cloud

**User licenses**, assigned to individuals based on role:

- **App Tester – Named User** — manage and execute tests, and handle other automated processes for application testing.
- **App Test Developer – Named User** — includes all App Tester capabilities, plus the ability to create test automations in Studio and build Apps.

!!! info
    The user licenses (App Tester and App Test Developer) grant access to all products available within Test Cloud — no additional user licenses are needed beyond these two.

**Robot licenses**, which determine execution capabilities:

- **App Test Robot** — execute application tests, RPA tests, and robotic process automations, for app testing use cases only.

To get started with Test Cloud, you need at least one Test Cloud-specific user license (App Tester or App Test Developer) and App Testing Robot runtimes assigned to the tenant.

### Allocating user licenses

**Direct allocation to users:**

1. Access the UiPath Automation Cloud **Admin Portal**.
2. Go to **Licenses**.
3. Click **License Allocations to Users → Allocate Licenses**.
4. Choose the user(s) and assign the appropriate license type.
5. Click **Save**.

!!! note
    Direct allocation overrides any group-based license assignments for the user.

**Allocation via groups:**

1. In **Licenses**, scroll to **License Allocations to Groups**.
2. Click **Create Allocation Rule**.
3. Select the group(s) and the license types to allocate.
4. Click **Save**.

!!! note
    When a user is added to a group with an allocation rule, they automatically inherit the group's licenses; removing them from the group removes the inherited licenses.

### Managing robot licenses and runtimes

**Viewing and allocating runtimes:**

1. Navigate to the Test Cloud Orchestrator.
2. Go to **Tenant → License**.
3. Under **Testing Robots**, click **See More** and allocate runtimes to machines or machine templates.

!!! warning
    The number of allocated runtimes determines how many test cases can be executed concurrently — don't exceed the total available.

**Enabling or disabling machines:**

In **Machines**, toggle the **Active** column off to disable a machine (preventing license consumption) or on to re-enable it. You cannot disable a machine while robots on it are running.

!!! tip "Best practices"
    - Regularly audit license allocations against current team structures and project needs.
    - Optimize runtimes based on actual testing requirements.
    - Educate team members on license consumption implications.
    - Use group-based allocations for scalability.

## Resources: machines and assets

### Machines — provisioning execution environments

- **Standard machines** — physical or virtual environments configured to closely mimic the production setup for running test cases.
- **Machine templates** — reusable configurations applied to multiple machines, useful for consistency in large-scale testing environments.
- **Serverless machines** — a scalable, maintenance-free environment managed by UiPath. Ideal for background, cross-platform automations, limited to jobs of up to 15 minutes.

### Assets — managing test data and configurations

Assets store and manage data used across multiple automation projects, including test cases — text, boolean, integer, and credential types are supported.

- Assets can have global values or values specific to a particular robot or account, enabling dynamic configuration based on execution context.
- Assets with global values can be linked across multiple folders; assets with per-account values cannot be shared between folders, preserving data isolation.

!!! example "Exercise"
    Create and configure your own folder under the current ILT folder (e.g. "3-5 June") to run your tests.

    1. Enable your user to run **Personal Automation + Personal workspace**, give it an **Automation Developer** role, and — in the Enterprise setup — use **Custom Windows credentials**, specifying your `domain\username` without the password. Then add your user to your folder.
    2. Add an **App Test Robot** license to your machine, then add the machine to the folder you just created.

    !!! note "Image needed"
        Insert the Orchestrator screenshot walkthrough for folder/user setup and robot license allocation here.

---

[← Data-Driven Testing](08-data-driven-testing.md) · [Next: Publishing Test Cases →](10-publishing-test-cases.md)

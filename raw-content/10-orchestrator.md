Slide 10 of 28
Orchestrator
By
null null

Overview

UiPath Orchestrator is the centralized platform for managing and executing test automations. When used in conjunction with UiPath Test Manager, Orchestrator offers robust features for organizing, deploying, executing, and monitoring test cases and resources at scale.

Access Management

Effective access management in UiPath Orchestrator ensures that only authorized individuals can perform specific actions within the testing environment. This is crucial for maintaining the integrity, security, and efficiency of automated testing.

Understanding Roles and Permissions

Roles

Roles in Orchestrator define a set of permissions that determine what actions a user or group can perform. They can be assigned at different scopes:

Tenant-level roles: Apply across the entire Orchestrator tenant.

Folder-level roles: Apply to specific folders within the tenant.

Common roles include:

- Orchestrator Administrator: Full access to all features, including user, tenant, and folder management. Recommended for system administrators.
- Automation User: Can run jobs, manage triggers, view logs, and use most resources needed for automation execution.
- Folder Administrator: Minimum folder-level permissions needed to manage their own folders and subfolders

Custom roles can also be created to tailor permissions to specific needs.

Permissions

Permissions are granular actions that a role allows, such as creating, editing, or deleting resources. Assigning appropriate permissions ensures users can perform their tasks without overstepping boundaries.

Assigning Users and Groups to Tenants and Folders

Assigning to Tenants

To grant access at the tenant level:

1. Navigate to Tenant > Manage Access in Orchestrator.
2. Click Assign access > User/Robot Account/Group.
3. Search for the user or group to assign.
4. Select the appropriate role(s).
5. Click Assign to confirm.

This process allows users or groups to access resources across the tenant based on their assigned roles.

Assigning to Folders

Folders in Orchestrator provide a hierarchical structure for organizing automation resources, including test cases, assets, and robots. They enable fine-grained access control and resource management.

Folder Hierarchy

Orchestrator supports up to seven levels of folder hierarchy, allowing for structured organization of test resources. Access permissions are inherited from parent folders, simplifying the management of user roles and permissions.

For more granular control, assign users or groups to specific folders:

1. Go to Tenant > Folders.
2. Select the desired folder.
3. Click Assign Accounts/Groups.
4. Search for the user or group.
5. Choose the role(s) to assign.
6. Click Assign to finalize.

This ensures users have access only to the resources pertinent to their responsibilities.

Best Practices for Access Control

- Principle of Least Privilege: Assign users the minimum permissions necessary to perform their tasks.
- Use Groups for Role Assignment: Managing access through groups simplifies administration and ensures consistency.
- Regularly Review Access Rights: Periodically audit user and group permissions to maintain security.
- Separate Environments: Maintain distinct environments (e.g., Development, Testing, Production) with appropriate access controls to prevent unauthorized changes.

License Configuration

Proper license configuration ensures that your testing environment operates efficiently, with the right resources allocated to the appropriate users and machines.

Understanding UiPath Licensing in Test Cloud

UiPath offers a flexible licensing model tailored to various roles and testing needs within the Test Cloud environment. The primary license types relevant to Test Cloud include:

a. User Licenses

These licenses are assigned to individuals based on their roles:

- App Tester - Named User: This license allows users to manage and execute tests, as well as handle other automated processes for application testing.
- App Test Developer - Named User: This license includes all the capabilities of the App Tester license, plus the ability to create test automations in Studio and build Apps.

Note: The user licenses (App Tester and App Test Developer) grant access to all products available within Test Cloud. No additional user licenses are needed beyond these two for accessing Test Cloud products. The operations a user can perform in Test Cloud are determined by the type of user license they hold.

b. Robot Licenses

Robot licenses determine the execution capabilities within your testing environment:

- App Test Robot: This license enables you to execute application tests, RPA tests, and (robotic process) automations for app testing use cases only.

To get started with Test Cloud, you need to have:

- At least one of the Test Cloud-specific user licenses assigned (App Tester User or App Test Developer).
- App Testing Robot runtimes assigned to the tenant where you want to perform application testing.

Allocating User Licenses

Proper allocation of user licenses ensures that team members have the necessary permissions to perform their roles.

a. Direct Allocation to Users

1. Navigate to the Admin Portal: Access the UiPath Automation Cloud Admin portal.
2. Select Licenses: Go to the 'Licenses' section.
3. Allocate Licenses:
   - Click on 'License Allocations to Users'.
   - Select 'Allocate Licenses'.
   - Choose the user(s) and assign the appropriate license type (e.g., App Tester - Named User).
   - Click 'Save' to confirm the allocation.

Note: Direct allocation overrides any group-based license assignments for the user.

b. Allocation via Groups

1. Navigate to License Allocations: In the 'Licenses' section, scroll to 'License Allocations to Groups'.
2. Create Allocation Rule:
   - Click on 'Create Allocation Rule'.
   - Select the group(s) to which you want to assign licenses.
   - Choose the license types to allocate.
   - Click 'Save' to apply the rule.

Note: When users are added to a group with an allocation rule, they automatically inherit the group's licenses. If a user is removed from the group, the inherited licenses are also removed.

Managing Robot Licenses and Runtimes

Efficient management of robot licenses ensures optimal utilization of resources.

a. Viewing and Allocating Runtimes

1. Access Orchestrator: Navigate to the Test Cloud Orchestrator.
2. Go to Tenant > License: This section displays all available licenses.
3. Allocate Runtimes:
   - Click on 'See More' under the Testing Robots section.
   - Allocate the desired number of runtimes to machines or machine templates.

Note: The number of allocated runtimes determines how many test cases can be executed concurrently. It's essential not to exceed the total number of available runtimes.

b. Enabling or Disabling Machines

To control license consumption:

1. Navigate to Machines: In Orchestrator, go to the 'Machines' section.
2. Toggle Machine Status:
   - To disable a machine (preventing it from consuming a license), turn off the toggle in the 'Active' column.
   - To enable a machine, turn the toggle back on.

Important: Disabling a machine prevents it from consuming a license, but you cannot disable a machine if robots on that machine are currently running.

Best Practices

- Regular Audits: Periodically review license allocations to ensure they align with current team structures and project needs.
- Optimize Runtimes: Allocate runtimes based on actual testing requirements to prevent resource wastage.
- Educate Team Members: Ensure that users understand the implications of license consumption, especially when working with multiple machines or environments.
- Leverage Groups: Use group-based license allocations for scalability and easier management.

Resources

This chapter explores how UiPath Orchestrator supports automated software testing. You'll learn about the key Orchestrator resources involved in test case execution and how UiPath Test Cloud enables scalable and efficient test management.

Machines: Provisioning Execution Environments

1. Standard Machines
Standard machines are physical or virtual environments where robots execute automation tasks. In testing scenarios, these machines are configured to run test cases, ensuring that the environment closely mimics the production setup.

2. Machine Templates
Machine templates allow for the creation of reusable configurations that can be applied to multiple machines. This is particularly useful in large-scale testing environments where consistency across machines is essential.

3. Serverless Machines
Serverless machines, available through UiPath's Test Cloud, provide a scalable and maintenance-free environment for running test cases. These machines are managed by UiPath, eliminating the need for infrastructure provisioning. Serverless robots are ideal for executing background, cross-platform automations and are limited to running jobs for up to 15 minutes.

Assets: Managing Test Data and Configurations

Assets in Orchestrator are used to store and manage data that can be utilized across multiple automation projects, including test cases. They support various data types, such as text, boolean, integer, and credentials.

Creating and Configuring Assets

Assets can be created with global values or specific values assigned to particular robots or accounts. This allows for dynamic configuration of test cases based on the execution context.

Linking Assets Across Folders

Assets with global values can be linked across multiple folders, facilitating resource sharing and reducing redundancy. However, assets with specific per-account values cannot be shared between folders, ensuring data isolation where necessary.

Exercise

Based on what you just learned in this lesson create and configure your own folder under the current ILT folder (e.g. "3-5 June"), in order to run your tests.

Enable your user to run Personal Automation + Personal workspace, give an Automation developer role and in the Enterprise setup use Custom Windows credentials specifying your domain\username without the password then add your user to your folder.
[IMAGE CAROUSEL: screenshot walkthrough, step 1 of 2, illustrating folder/user setup in Orchestrator]

Add an App Test Robot license to your machine then add it to the folder you just created.
[IMAGE CAROUSEL: screenshot walkthrough, step 1 of 2, illustrating robot license allocation to a machine/folder]

CONTINUE

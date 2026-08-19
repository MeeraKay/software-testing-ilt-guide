Slide 28 of 28
CI/CD
By
null null

Overview

Continuous integration (CI) and continuous deployment (CD) represent a culture—and a set of principles and practices—aimed at delivering code changes more frequently and with greater reliability.

Building a CI/CD pipeline that is efficient in terms of process and practices is very important to support product releases and drive organizational success

Continuous integration (blue) is a process where code written by the developer is committed to a shared central code repository like Git, and every commit is built and tested to ensure that you identify and fix any issues early. Continuous integration has many benefits, including early integrating and testing, enhancing developer productivity, accelerating delivery, and finding/fixing bugs faster.

Continuous delivery (yellow) or deployment is a process where code changes are continuously and automatically prepared to be released in the production environment. This will provide a deployment-ready artifact after undergoing all the testing, validation, and verification processes. This requires manual step/approval to deploy to production. Continuous deployment is a process where code is pushed to production automatically.

Understanding CI/CD

CI/CD is a step-by-step approach to continuously and consistently code, build, test, release, and monitor a software product through automation.

Pipelines are pre-defined jobs that help understand what needs to be accomplished and when it has to be done. Jobs are executed in parallel as much as possible to speed up and accelerate the delivery.

A typical CI/CD pipeline would consist of stages where code gets pushed to the repository; the build gets triggered, build is tested and deployed to the production environment.

Building CI/CD pipelines are completely tailor-made based on the needs and requirements and could have multiple stages and jobs, and could be complex and comprehensive.

[VIDEO: embedded walkthrough -- "Let's watch the video and walk through the steps of executing a CI/CD pipeline"]

Integrating with third-party applications

[TAB INTERACTION: UIPATH CLI / AZURE DEVOPS EXTENSION / JENKINS PLUGIN -- content of each tab below]

UIPATH CLI

UiPath offers a command-line interface (CLI) that allows you to execute certain pre-defined tasks for RPA package management and testing.

The purpose of the UiPath CLI is to easily integrate those capabilities with third-party tools like GitLab, Jenkins, and many others, without a plugin.

Common use cases for the UiPath CLI involve:
- Packing Studio projects into NuGet packages.
- Deploying NuGet packages to Orchestrator.
- Running jobs in Orchestrator.
- Running Test Sets in Orchestrator.

For instructions on how to download the CLI and more information, click here (opens in a new tab).

AZURE DEVOPS EXTENSION

This extension allows you to build and deploy UiPath automation processes, as well as run UiPath automated test cases.

In order to pack projects created with UiPath Studio starting from 20.10, you need to use a version starting from 2.1 of this extension.

Prerequisites:
- Install .NET 6
- Azure DevOps organization and Azure Pipelines account
- UiPath Integration for Azure DevOps
- GitHub account for your repository
- Azure pipeline
- Choose the appropriate type of Agent in Azure DevOps. You have the option of selecting either an Azure-Hosted Agent or a Self-Hosted Agent to run your Pipeline.
  - Azure-Hosted Agent - This agent is automatically spawned and disposed of after each run. It has default public internet access. If you intend to build packages using custom dependencies from the Orchestrator feed or push projects to Orchestrator, ensure that your Orchestrator allows access from the public internet.
  - Self-Hosted Agent - In cases where your Orchestrator is not accessible from the public internet, you need to use a Self-Hosted Agent. Before using it, configure the networking appropriately to enable the agent to establish a successful connection to the Orchestrator and the specified feeds.

JENKINS PLUGIN

This plugin allows you to build and deploy UiPath automation processes, as well as run UiPath automated test cases.

In order to pack projects created with UiPath Studio starting from 2020.10, you need to use a version starting from 2.1 of this extension.

Note: Starting with April 2023, and 2023.4, new executions will be blocked in classic folders. For tasks that include a classic folder in their configuration, a Folder not found message is displayed, and the task is not performed. Learn more about classic folder removal here (opens in a new tab).

Prerequisites:
- Jenkins server running on Windows or Linux.
- At least one Jenkins slave running on Windows (required for step execution).
- Orchestrator instance (basic, federated or cloud authentication are supported).
- Testing features require Orchestrator version 2020.4 or higher.
- When using an on-premise Orchestrator under HTTPS, make sure to import the SSL Certificate so that the HTTPS calls to Orchestrator can be trusted.

For instructions on how to install, enable the plugin, and more information, click here (opens in a new tab).

Best practices

- Schedule and run automated tests in Dev/Test environments before deployment.
- Trigger test execution automatically using DevOps tools like Jenkins, Azure DevOps, or GitHub Actions.
- Leverage parallel execution across multiple robots to reduce test cycle time.
- Use API-based testing (Integration Service or via UiPath.WebAPI activities) when possible, to reduce UI dependency.
- Include the tests in the CI/CD pipeline;

Reference

Refer the Implementing CI/CD pipelines for UiPath test automation topic in https://academy.uipath.com/learning-plans/uipath-test-cloud-expert (opens in a new tab) course in the UiPath Academy.

[End of course -- last slide, no Continue button]

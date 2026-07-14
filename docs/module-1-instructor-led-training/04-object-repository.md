# 4. Object Repository

## What is Object Repository?

The Object Repository is a DOM-like repository system that lets you create, manage, and reuse UI taxonomies inside and across test automation projects. With Object Repository you can build a "UI API" for your application and share it with your team within minutes.

## Benefits of using the Object Repository

- UI elements across the project are managed, updated, and modified from a centralized place.
- Capture the elements you need in your automation with the Capture Elements wizard, increasing selector reliability by capturing elements together with their anchors.
- Automate faster by drag-and-dropping elements from the Object Repository panel.
- Objects are reusable in the local project or across projects when packaged as libraries.
- Upgrade application and process UI elements in one go with UI libraries.

## Object Repository structure

The structure of elements created with the Object Browser follows this hierarchy:

**Application → Version → Screen → UI Element → UI Descriptors**

## Best practices

- **Reusability** — Achieve reusability through local elements, snippets, and UI libraries in the Object Repository.
- **Use descriptive names** — Use meaningful, descriptive names for objects in the repository. Avoid generic names such as "Button1" and "Link2" — they become confusing over time.
- **Organize objects** — Group objects within a repository by screen, type of object (buttons, input fields, etc.), or another logical categorization.
- **Version control** — When publishing a new version of the same UI library, make sure to properly increment the version number in the Publish window.

## Manual creation of a repository

You can create your own repository from within the Object Repository panel by defining the application, each screen, and each element manually.

---

[← Getting Started in Studio](03-getting-started-studio.md) · [Next: Test Automation Project →](05-test-automation-project.md)

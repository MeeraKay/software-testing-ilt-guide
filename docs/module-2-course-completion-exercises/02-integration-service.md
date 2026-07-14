# 2. Integration Service

**UiPath Integration Service** is the platform component that lets UiPath robots connect to third-party applications through APIs — automating tasks across systems without diving into complex code, which improves efficiency and reduces manual errors.

## Key benefits

- **Pre-built connectors** — a wide range of ready-made connectors for popular applications.
- **Standardized authentication** — simplified setup and management of connections with consistent authentication methods.
- **Event-driven automation** — trigger automations based on events in connected applications.
- **Unified experience** — a consistent interface across UiPath Studio environments.

## Key components

**Connectors**
: Pre-built integrations that let UiPath interact with external applications' APIs, providing activities to read emails, update records, send messages, and more — reducing the need for custom code.

**Connector Builder**
: Lets you create custom connectors for applications without pre-built integrations. A user-friendly interface for defining connection settings, authentication methods, and specific actions or queries. Virtually any application with a RESTful API can be integrated.

**Connections**
: The authenticated links between UiPath and external applications, established through connectors. They store the credentials and settings needed to communicate securely, and can be created, modified, or deleted, and shared across folders in Orchestrator.

**Triggers**
: Let automations start based on specific events in connected applications — e.g. starting a process when a new email arrives or a CRM record updates. Enables real-time, event-driven automation.

By combining connectors, the Connector Builder, connections, and triggers, testers can build robust, scalable, automated workflows that integrate with a wide range of applications.

---

[← Autopilot for Developers](01-autopilot-for-developers.md) · [Next: Create a Custom Connection →](03-custom-connection-integration-service.md)

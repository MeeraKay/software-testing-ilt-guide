# Database Testing

With UiPath Test Cloud, you can perform **Data Validation Testing**, a part of database testing — checking that the data you deal with is valid and complete, and validating data and databases through any needed transformations without loss.

!!! note
    The Database Activities Pack lets you connect to a database and perform a full range of actions — executing transactions or queries and non-queries — against a large selection of databases (SQL Server, Oracle, DB2, and others), either directly or via ODBC/OLE DB.

## What database testing validates

- Schema
- Database tables
- Columns
- Keys and indexes
- Stored procedures
- Triggers
- Database server validations
- Data duplication validation

## Advantages

- Full control of test coverage and depth.
- Many bugs can be found effectively in the early development stage.

## Database Activities package

- **Connect** — connects to a database using a standard connection string.
- **Disconnect** — closes a connection to a database.
- **Start Transaction** — connects to a database and wraps a sequence that can perform multiple transactions; closes the connection when the activity ends.
- **Execute Query** — executes a query and returns the result in a `DataTable`.
- **Execute Non Query** — executes a non-query statement; for UPDATE/INSERT/DELETE, returns the number of affected rows.
- **Insert** — inserts a compatible `DataTable` into an existing table, returning the number of affected rows. If constraints aren't met, the activity fails and all written rows are rolled back.

!!! warning
    Windows projects require the 64-bit driver installed on the machine to establish a database connection.

!!! tip "Video"
    Watch the "Demo: Database Testing" walkthrough (link/embed from the source course).

---

[← Best Practices](04-best-practices.md) · [Next: Other Agentic Features in Test Manager →](06-other-agentic-features.md)

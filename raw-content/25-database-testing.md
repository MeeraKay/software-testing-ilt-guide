Slide 25 of 28
Database Testing
By
null null

With UiPath Test Cloud, we can perform Data Validation Testing, a part of Database testing.

Data Validation testing is a process that allows the user to check that the provided data, they deal with, is valid or complete. Data Validation Testing responsible for validating data and databases successfully through any needed transformations without loss.

Note: The Database Activities Pack enables the user to connect to a database and perform an entire palette of actions within it, such as executing transactions or queries and non queries.

Database Activities Pack allows connecting to a large selection of databases, such as SQL Server, Oracle, DB2, and others, either directly or via ODBC / OLE DB.

Database testing includes validating:
- Schema
- Database tables
- Columns
- Keys and Indexes
- Stored procedures
- Triggers
- Database server validations
- Validating data duplication

Advantages

- Full control of Test coverage and depth
- In early development stage, many bugs can be effectively found

Database Activities Package

The activities which are part of the database activities package are:

- Connect: Connects to a database by using a standard connection string.
- Disconnect: Closes a connection to a database.
- Start Transaction: Connects to a database and features a Sequence which can perform multiple transactions with the database. When this activity ends, the connection to the database is closed.
- Execute Query: Executes a query on a database and returns the query result in a Datatable.
- Execute Non Query: Executes an non query statement on a database. For UPDATE, INSERT, and DELETE statements, the return value is the number of rows affected by the command.
- Insert: Inserts a compatible DataTable variable in an existing Table. Returns the number of rows affected. If the constraints on the table aren't met, the activity will fail and all the written rows will be saved.

Note: Windows projects require having the 64-bit driver installed on the machine to establish a database connection.

[VIDEO: embedded walkthrough -- "Demo: Database Testing"]

CONTINUE

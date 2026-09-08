# Generating Synthetic Test Data

## Generating synthetic test data

### Using activities

UiPath provides activities that generate synthetic values directly in a workflow.

✅ **Address** — generates a random valid address.

✅ **Given Name** — selects a random value from a list of common given names.

✅ **Last Name** — selects a random value from a list of common last names.

✅ **Random Date** — generates a random date between two dates.

✅ **Random Number** — generates a random integer with a given length.

✅ **Random String** — generates a random string with a given length and case.

✅ **Random Value** — picks a value from a 1-column list.


!!! example "Exercise: Synthetic test data creation using Test Data Activities"


    Create 100 records of data having the structure as the given image (Requirements.png from 3.Test Data Management\Synthetic Data) and store it in an excel file in the same folder.

    !!! note ""
        The Address activity returns a Dictionary with key-value pairs, where each key represents a field name and its corresponding value contains the generated data.
        
        The Address activity generates the following fields:

        Country, PostalCode, StreetNumber, StreetName, City, State. 

        For example, if the output of the Address activity is stored in Var_Address, you can access individual values as follows:

        Var_Address("Country")

        Var_Address("PostalCode")

        Var_Address("StreetNumber")

        Var_Address("StreetName")

        Var_Address("City")

        Var_Address("State")



---

[Next → Database Testing](07-database-testing.md){: .md-button .md-button--primary}

---

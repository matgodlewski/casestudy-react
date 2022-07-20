# Problem description:
## You need to create React application, which fetches from an external service and presents a list of 'Development' APIs in the table, and store data using Redux. Additional requirements: hiding columns in the table, editing the description column, removing table records


## Task1 - Create ApisDetails container/component to fetch and present development APIs from 'https://api.publicapis.org/entries':
1. Create a component
2. Create a container for the component
3. Create new reducer and actions (implement async/await fetcher)
   The state should look like
   const initState = {
   allApisInDevsCategory: [],
   }

4. Present development APIs in the HTML table\
   index | api_name | link | CORS | description | category

## Task2 - Visibility columns - Create a list with checkboxes to add or remove visible columns (configuration should be stored in local storage using hooks)
## Task3 - Edit description column and remove record - Implement the ability to edit the description in the table record and extend columns by the 'Action' column with a remove button
## Task4 - Add styles to the app
## Task5 - Code refactoring

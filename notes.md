Creating the shelfie project.




1 - Created front-end and back-end directories
2 - Front End  
  A - Used create-react-app to create a react app in the front-end directory
3 - Back End  
  A - 'npm init -y' in the back-end directory to create package.json
  B - 'touch .gitignore' to create the file
    1 - Add node_modules
  C - 'npm install express body-parser massive dotenv cors' to install the package dependencies
  D - 'mkdir server'
      A - 'touch index.js' to create index.js

<h1>index.js</h1>
Create the server
  Require express, body-parser, massive, cors, dotenv

Configure the database
  Create on heroku
  Access the URI in SQL Tabs
    Make sure to add '  ?ssl=true  ' at the end
    Create the table using an SQL statement
      CREATE TABLE appData (
        EntryID SERIAL PRIMARY KEY NOT NULL,  
        BinID varchar(10) NOT NULL,
        ItemName varchar(50) NOT NULL,
        ItemPrice DECIMAL(10, 2)
        );
  Create .env
    Add to gitignore
    Put connection string from the database into .env

  Back to index.js ...
    Invoke massive and pass it the connection string

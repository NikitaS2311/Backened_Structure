This is the base nodejs project template, which anyone can use as it has been prepared keeping some of the most important code principles and project management recommendations.Fell free to change anything.

`src` -> Inside the src all the actual code regarding the actual source code regarding the project will reside, this will not include any kind of tests.(You might want to make separate texts folder)
Lets take a look on the `src` folder

`config`-> In this folder anything and everything regarding any configurations or setup of a library or module will be done. For example `dotenv` so that we can use the environment cariables anywhere in a cleaner fashion, this is done in `server-config.js`. One more example can be setup your logging librarythat can help to prrepare meaningful logs, so configuration for this library should also be done there.

`routes`-> In the routes folder, we register a router snd the corresponding middleware and controllers to it.

`middleware` ->
they are just going to intercept the incoming the incoming requests where we can write our validators, authenticators etc.

`controllers` -> they are kind of the last middleware as post them you call your business layer to execute the business logic. In controllers we just receive the incoming requests and data and then pass it to the business layer, and once business layer returns the an output, we structure the API respoonse in controllers and send the output.

`repositories`-> this folder contains all the logic using which can interact the DB by writing queries, all the raw queries or ORM queries will go here.

`services` -> contains the business logic and interacts with repositories for data from database

`utils`-> contains helper methods, error classes etc.
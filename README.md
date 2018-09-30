# MEAN_MyTasks
This is an app built using MEAN Stack which consists of a REST API for CRUD operations on database hosted in Mongo Labs. The front-end is designed using Angular JS and Bower, Bootstrap.

The page on the client-side has options to view, add, delete and update tasks.

Following are the different routes defined for the REST API on the server side.

GET /api/tasks - this route fetches all the tasks stored in the database

POST /tasks - this route lets you post tasks i.e., add new tasks to the database

GET /tasks/:id - this route lets you fetch a specific task by its id. Important to provide a valid id fetched by GET /tasks path in place of ':id'

PUT /tasks/:id - this route finds an existing task by its id and lets you update it, like updating the task to isDone.

DEL /tasks/:id - this route lets you delete a tasks by its id

Currently updating the user authentication and that is yet to be deployed on heroku. All the changes made to this API are validated using Postman.

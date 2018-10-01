# MEAN_MyTasks
This is an app built using MEAN Stack which consists of a REST API for CRUD operations on database hosted in Mongo Labs. The front-end is designed using Angular JS and Bower, Bootstrap.

The app is deployed on Heroku - https://mytaskslistrp.herokuapp.com/

The page on the client-side has options to view, add, delete and update tasks.

Following are the different routes defined for the REST API on the server side.

GET /api/tasks - this route fetches all the tasks stored in the database //called when app url is hit

POST /tasks - this route lets you post tasks i.e., add new tasks to the database //called when user types a task and clicks "enter"

GET /api/tasks/:id - this route lets you fetch a specific task by its id. Important to provide a valid id fetched by GET /tasks path in place of ':id' 

PUT /api/tasks/:id - this route finds an existing task by its id and lets you update it, like updating the task to isDone. //when user checks the checkbox next to a task to mark it as done

DEL /api/tasks/:id - this route lets you delete a tasks by its id //called when user clicks delete button

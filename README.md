# TODO backend api 

## Setup:-
1. Clone the repository in your machine.
2. Add config.env file in root folder.
3. Inside .env file write 
        PORT = 3000
        DATABASE_URL= "mongodb://127.0.0.1:27017/Node-Test"
4.  Node-Test (This is the name of the database created by me but the name will vary depending upon you).
5. After setting up the database, run the following command:-
    1. $ npm start  -- for starting server.
6. Now your server is running in localhost:3000/
7. Now head to postman and type: localhost:3000/

## For postman related function for testing:-

1. For displaying all the task :-  localhost:3000/Tasks
2. For display task by id :- localhost:3000/Tasks/:id
3. For creating task : - localhost:3000/Tasks
4. For updating task : - localhost:3000/Tasks/:id
5. For deleting task : - localhost:3000/Tasks/:id
6. For query params :-  localhost:3000/Tasks/query/?...



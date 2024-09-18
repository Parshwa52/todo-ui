First of all, I read the requirements of the assessment and checked the requirements of backend, frontend and database.

After getting the requirements, I created a rough design on how the system will look and how all the API communication will be done. After that, I started working on the project step by step.

Initially, my approach was to integrate the Supabase database with the Node.js backend APIs. So, I created a Supabase project and created a new PostgresSQL database. I got the project API key and URL which I can use in my Node.js project.

So, after getting Supabase API key and URL, I installed Supabase library in the nodejs project and setup a connection with database. Once, the database connection was set up, I created the CRUD APIs.

These CRUD APIs were for adding, updating, reading and deleting the tasks in the todo list.

These APIs were created in the Node.js project

GET /api/tasks - Get all the tasks

POST /api/tasks - Add a new task

PUT /api/tasks/:id - Update a particular task

DELETE /api/tasks/:id - Delete a particular task

I tested the backend on localhost and found that it was working so deployed the backend on Vercel.

Then, the next step was designing the front end part. So, I created a new Next.js project with Tailwind CSS for frontend and then I started designing UI Components. So, I installed a ShadCN component which can be reused in the Next.js project. I used Button, Select and Input as ShadCN components.

Now, I integrated the frontend with backend by creating the functions to add, update, delete and read the tasks.

I created a basic UI for task list where you get to see tasks with 3 statuses:

Pending - Tasks to do
Doing - Tasks you are currently doing
Done - Tasks which are done

After that I created a UI for adding a task

I just simply added a Input box and button to add the task.

After that, I added functionality to Edit and Delete the task for each task in task list

When you click Edit, you can change task name and status using Update button.

When you click Delete, your task will be deleted from the task list.

I thoroughly tested each and every functionality on localhost.

After that, I deployed this Next.js frontend on Vercel.

This is the Vercel frontend link: https://todo-ui-screen.vercel.app/

# mernassignmentcloudesign
PART 1: Create a form to save & edit task in database 
• Create components to create & edit task
• TASK Schema 
o Title (text)
o Description (text)
o Status (ENUM [Open, In-Progress, Completed])
o Datetime stamp (timestamp)
• RESTful API to create and edit task.
• Integrate the frontend and backend.
PART 2: Listing of task and ability to change task status with drag and drop
• Listing will contain three columns
o Open
o Work in progress
o Completed
• When a task is dropped to work in progress column, the status of the task is changed to 
work in progress in the database in real time.
• After refresh respective task should be in respective columns.

my task-
i use npm init -g to generate package.json file.
i use npm i mongoose to install mongoose package .
i use npm i express to install express package.
i use postmen as frontend .
i write to two api create and update as your given task and api hit to postman
url path of create api->localhost:3000/createform ->this url path hit to postman
url path of update api->localhost:3000/updateform/621d4778f4cb2d887194cf2c -> this url path hit to postman
i design schema like->
const FormSchema=mongoose.Schema({
    title:{type:String},
    Description:{type:String},
    Status:{
        type:String,
        enum:['open','In-progess','completed']
    },
},{timestamps:true});

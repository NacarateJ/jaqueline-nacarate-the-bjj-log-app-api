# The BJJ LogApp

Is an app designed for Jiu-Jitsers to keep track of the techniques learned in training classes. The old school way to do it is to have a paper notebook and keep a Jiu-Jitsu journal. But who has time for that? Having an app on the phone to fill up with all the information on the go will not only save time but also allow the user to write more precise notes since they can fill it up straight away after finishing the training session. The app also offers the option to upload a short video of the technique learned so the user can always come back and review it.  

- To handle the videos upload I'm using Multer - a node.js middleware for handling multipart/form-data. Once a video is uploaded, the file is saved in a Firebase Store and all the information about the video is saved in MySQL database.

- To stream the videos in the browser I'm using ImageKit - an image management service that provides image optimization and fast CDN (content delivery network )delivery. I configured it to fetch the videos straight from my Firebase Storage.

* To install and run the project you will need to clone or dowload the Front-end file - jaqueline-nacarate-the-bjj-log-app, and the Back-end file - jaqueline-nacarate-the-bjj-log-app-api.
* Run nmp i to download modules needed
* To start the Front-end run npm start
* To start the Back-end run npm run server
* It might ask about the Firebase-Key but just ignore it. Since the Firebase Storage is connected to ImageKit you should be able to have access to the videos I already have on the app.

PS: The BJJ LogApp is still a work in progress. On the profile page we have full CRUD operations for the videos and the next step is to implemet the same for the users. 

## Environment Variables
1. Front-end:
Add the following variables in .env file:

```REACT_APP_API_URL=https://localhost:8080```
  
2. Back-end:

```DB_LOCAL_DBNAME="the-bjj-log-app"```<br>
```DB_LOCAL_USER="YOUR DB USER NAME"```<br>
```DB_LOCAL_PASSWORD="YOUR DB PASSWORD"```<br>
```PORT = 8080```

## To connect to DB and data seeding

To connect the server with the databse we used a SQL query builder, knex.js. 

Install knex.js if it has not yet been installed:

```npm install knex --save```

Create a new database named "the-bjj-log-app" on your local machine using the [mysql client tool](https://www.mysqltutorial.org/mysql-create-database/).

Once the database has been created, run the latest migration file to build the database table. To do this run the command as follows:

```npm run migrate```

Once the tables have been created we can seed them to populate the tables with data. To do this run:

```npm run seed```

## Demo

<div align="center">

https://user-images.githubusercontent.com/114256348/212002972-54e8c887-8f15-40e0-982a-59380e1c2cb7.mp4

  </div>

Summary:
 
PositiveMe is a fullstack javascript application that aids users in finding silver-linings in their day to day happenings by guided journaling. This app supports basic CRUD operations - users should be able to: 

  * Create a new Journal Entry
  * View previous Journal Entries
  * Edit Journal Entries
  * Delete Journal Entries
  
  
  Inspiration: 
  
  One of the simplest and most helpful pieces of advice I have ever gotten from a teacher is the the power of "yet".  By adding this little, three letter word at the end of any negative, self-sabatoging thought,  I instantly feel like I can (eventually) conquer anything!  For example - "I can't do this" turns into "I can't do this...yet".  This practice is an example of positive thinking.  I know a lot of self-critical people, including myself, that struggle with practicing positive thinking.  Before it becomes a habit,  it requires daily practice, like journaling.  I wanted to provide an app for guided journaling,  specifically for thinking in more positive ways. 
  
  Built With
  
The API and client were deployed separately and stored in separate GitHub repos.

https://github.com/KatelinDeSerano/postive-me-api

Client Side

- HTML
- CSS
- JavaScript
- React

API

- Node.js
- JWT Authentication
- Mongo
- Mongoose 
- Express

DevOps

- Heroku
- TravisCI


Screenshots: 

![Landing Page](/src/images/landingPage.png?raw=true "Landing Page")

![Login Page](/src/images/login.png?raw=true "Login Page")

![Registration Page](/src/images/register.png?raw=true "Registration Page")

![User Dashboard](/src/images/dashboard.png?raw=true "User Dashboard")

![Journal History](/src/images/history.png?raw=true "Journal History")

Server API for PositiveMe client.
Create - Create Journal Entry
Read - Get a list of all Journal Entries for logged in User
Update - Update Journal Entry
Delete - Delete Journal Entry

Built With

Back End
-Node.js
-Mongo
-Mongoose
-Express
-JWT Authentication

DevOps
-Heroku
-TravisCI

Using the API

Authentication / Login

POST    	/api/auth/login

Bearer Authentication with JSON Web Token

Must supply valid Username and Password in request header
If authentication succeeds, a valid 7d expiry JWT will be provided in response body

Register New User

POST    	/api/users

Must supply First name, Last name, Username and Password in request body
If successful, a valid 7d expiry JWT will be provided in response body

Get All Journal Entries

GET    	/api/positive-me/{USER}

This endpoint retrieves all journal entries from user database
Must supply valid JWT via Bearer Authentication
If authentication succeeds, all properties will be returned

Create Journal Entry

POST       /api/positive-me/{JOURNAL-ENTRY-ID}

This endpoint adds a single journal entry to user database
Supply property object in request body
Must supply valid JWT via Bearer Authentication

Update Journal Entry

PUT       /api/positive-me/{JOURNAL-ENTRY-ID}

This endpoint updates a journal entry in user database
Supply journal entry ID as route parameter
Supply journal entry object in request body
Must supply valid JWT via Bearer Authentication

Delete Journal Entry

DELETE       /api/positive-me/{JOURNAL-ENTRY-ID}

This endpoint deletes a journal entry from user database
Supply journal entry ID as route parameter
Must supply valid JWT via Bearer Authentication
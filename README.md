This is a note taking app.
It is a personal project to improve my front-end development skills.
Backend is also deployed - one using mongoDB and another using postgreSQL.

Currently, basic functionalities are implemented and I am improving CSS and add more functionalities.

### to test site

You can visit https://ed-notes.netlify.com
You can create an account or
use test account
test@test.com
123456


### Deployment

Front End : https://ed-notes.netlify.com
Back End : https://ed-notes.herokuapp.com/   (postgreSQL)

### Installation

To install the application in a local dev environment, run `yarn install` in the root folder as well as the client folder. Then, in the root folder you run `yarn server` and in the client folder you run `yarn start`.

### Tech Stack Rationale

#### Front End

**Solution:** React, React Router, Redux (planed to add Styled Components, Semantic UI, Firebase Oauth)

- Organizes state and manages front-end part of the project, reduces need for page reloads during navigation
- Routing links
- DOM Manipulation
- Reusable components
- Performance
- Documentation and ease-of-use/implementation

#### Back End

**Solution:** Node, Express

- JavaScript on the front and back end
- Reduces server-side logic complexity -> faster development
- Minimalist and un-opinionated framework
- Performance and cross-platform coverage

#### Database

**Solution:** SQLite for dev and PostgreSQL for prod, Knex

- Structured schemas to define data
- Relationships between data
- Spread data across tables
- Able to query tables

### Front-end URLs

/     - landing page.  Short description of the site and button to enter the site 
     that direct to login page.
/Notes - display list of notes
/Notes/:id - display full content of the note with the matching id
/Notes/:id/edit - display edit page for the note with the matching id
/Notes/:id/delete - delete the note with the matching id
/addNote - display a page where user can add a new note
/login - login page
/register - registering a new user

### Using redux









### Back-end API

##### GET https://https://ed-notes.herokuapp.com/allnotes/:id

Returns an array of all the notes of logged users.

##### GET https://ed-notes.herokuapp.com/api//notes/:id

Returns an note of the id.

##### POST https://https://ed-notes.herokuapp.com/api//addnote

Add a new note to DB

##### PUT https://https://ed-notes.herokuapp.com/notes/:id

Edit an existing note of the id. The content of edited note is send as req.body in a format of
{
title : "title",
textBody : "notes"
}

##### DELETE https://https://ed-notes.herokuapp.com/api/notes/:id

Delete a note of the id

##### GET https://https://ed-notes.herokuapp.com/api/search

Returns those notes that matches query

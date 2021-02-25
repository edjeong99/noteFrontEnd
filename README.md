This is a note taking app.
It is a personal project to improve my front-end development skills.
I also coded Backend part using postgreSQL.

It's built using React and Redux.
Firebase auth is another main tech I used.

### to test site

You can visit https://noteapp-firebase.herokuapp.com/
You can create an account or
use test account
login : test@test.com
password : 123456


### Deployment

Front End : https://noteapp-firebase.herokuapp.com/
Back End : https://ed-notes.herokuapp.com/   (postgreSQL)

### Installation

To install the application in a local dev environment, run `yarn install` in the root folder as well as the client folder. Then, in the root folder you run `yarn server` and in the client folder you run `yarn start`.

### Tech Stack Rationale

#### Front End

**Solution:** React, React Router, Redux, Firebase Auth (planed to add Styled Components, Semantic UI)

- Organizes state and manages front-end part of the project, reduces need for page reloads during navigation
- Routing links
- DOM Manipulation
- Reusable components
- Performance
- Documentation and ease-of-use/implementation
- Firebase Auth manage user account and 3rd party login



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



## MERN Authentication

From Traversy Media
Backend folder


`npm i express dotenv mongoose bcryptjs jsonwebtoken cookie-parser`

then install nodemon as a dev dependency

`npm i -D nodemon`

- POST:
/api/user

`npm i express-async-handler`

### Order of export / import
userController --- export --- > --- import --- userRoutes --- export --- > --- import --- server

`npm i -D concurrently`
This package is to start the frontend and the backend using just one opened terminal, instead of having two: one for each forlder(back and front)
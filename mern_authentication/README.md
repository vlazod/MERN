`npm i express dotenv mongoose bcryptjs jsonwebtoken cookie-parser`

then install nodemon as a dev dependency

`npm i -D nodemon`

- POST:
/api/user

`npm i express-async-handler`

### Order of export / import
userController --- export --- > --- import --- userRoutes --- export --- > --- import --- server
                    
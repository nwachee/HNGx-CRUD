# HNGx-CRUD
- A simple REST API capable of CRUD operations on a "person" resource, interfacing with any database of your choice. Your API should dynamically handle parameters, such as adding or retrieving a person by name

## Tech Stack
- Node js
- Express
- Mongoose
- bcrypt
- Nodemon
- Morgan
- Cors
- Jsonwebtoken
- Joi
- Dotenv
- Helmet

## Installation
- Clone the [repo](https://github.com/nwachee/HNGx-CRUD.git) 
- Run `npm install ` in your terminal to install packages in package.json
- Create a `.env file` and fill in values for the following variables: - `MONGO_URI`, `JWT_SECRET`
- Finally run `npm start` in your terminal

### Endpoints : 
- Healthcheck: `/api/healthcheck` 
    [ GET: Server Health Check ]

- `user: `
    [ POST: create a new user]  `/api/auth`
    [ GET: get all users]  `/api/auth`
    [ GET: get a single user] `/api/auth/<id>`
    [ GET: get a single user by username] `/api/auth/@:username`
    [ PUT: update or replace auth] `/api/auth/<id>`
    [ DELETE: delete a user] `/api/auth/<id>`
 
 - `docs: `
   [ GET: get API Documentation] `/api/docs`

- Database Schema : 

- API Documentation : https://documenter.getpostman.com/view/23369669/2s9YC1XEzd

- API Live Link : https://edgegap.onrender.com
# HNGx-CRUD
- A simple REST API capable of CRUD operations on a "person" resource, interfacing with any database of your choice.

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
- Create a `.env file` and fill in values for the following variables: - `MONGO_URI`
- Finally run `npm start` in your terminal

### Endpoints : 
- Healthcheck: `/healthcheck` 
    [ GET: Server Health Check ]

- `user: `
    [ POST: create a new user]  `/api`
    [ GET: get all users]  `/api`
    [ GET: get a single user by ID] `/api/:<user_id>`
    [ PUT: update user by ID] `/api/:<user_id>`
    [ DELETE: delete a user by ID] `/api/:<user_id>`
 
 - `docs: `
   [ GET: get API Documentation] `/docs`

- Database Schema : https://dbdiagram.io/d/64fe69fa02bd1c4a5e4dcb09

- API Documentation : https://documenter.getpostman.com/view/23369669/2s9YC1XEzd

- API Live Link : https://hngx-qqlt.onrender.com
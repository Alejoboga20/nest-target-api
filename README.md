<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Setup Project in Development mode

1. Clone the project.

2. Create and fill **.env** file. You can use .**env.template** file as guide

3. Install dependencies:

   `yarn install`

4. Create Database using docker:

   `docker-compose up -d`

5. Start project in development mode:

   `yarn start:dev`

### Endpoints available

Create new user: `POST /users/signup`

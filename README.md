# Description

CRUD API using nodejs and express on local filesystem

## How to run?

- Clone this repository.
- Install all the dependencies using `yarn` or `npm install`.
- Start the server using `yarn start` or `npm run start`.

## Setup db

- Setup Postgresql in local machine
- Clone .env.example to .env and fill required database credentials
- Run migration using `yarn migrate`

## Creating new migrations

- Create new migration file with `yarn migrate:make alter_table_<table>_add_column_<column> -x ts`

## Rollback migrations

- Use `yarn rollback` to rollback migrations

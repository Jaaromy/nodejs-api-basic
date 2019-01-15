# motiion

Test application for Motiion, Inc.

## Build/Test/Run

1. Make sure you have Node version >= 8.9 installed

2. Run the following from the command line

```bash
git clone git@github.com:Jaaromy/motiion.git
cd motiion
npm install
npm test
npm start
```

## Swagger Documentation

After starting the application, the API documentation can be found by visiting the following url in a browser window:

[http://localhost:3000/v1/api-docs](http://localhost:3000/v1/api-docs)

Each of the API methods can be tested by clicking on the method to expand it and then pressing `Try it out` then `Execute`.

All methods can of course also be called by making a regular REST call to the appropriate endpoint.

## Architecture Overview

### Server

Node.js

Express

### Database

LowDB

### Validation

jsonschema

### Testing Framework

Jest

### Documentation

Swagger

## Notes

1. Types are completely defined in the database as [JSON schema](http://json-schema.org/) (minus the documentation, of course). Only additional properties need to be added to the database as they are then merged with the base properties during validation.

## Assumptions

1. Assumed that when new unit types are created, documentation will be updated to reflect the changes (by modifying the swagger.json file).

## Simplifications

1. While the documentation and endpoints were created for User and Type CRUD operations, they were not implemented and will return a 501 - Not Implemented response code.

2. Update and Delete operations were not implemented for Unit.

3. Security was ignored for purposes of the demo. Anyone can hit the endpoints and the app will automatically assume you are user id "1".

4. While there are basic unit/integration tests, there is not 100% code coverage.

## Next Steps

1. LowDB was used for this demo, but the solution is architected in such a way that a new database can be swapped in simply by creating a new "connector" file and referencing it in db.js. A more robust and scalable database (such as DynamoDB or MongoDB) would be an easy drop in.

2. Security and Authorization need to be implemented.

3. Full unit test coverage.

4. A framework such as `pm2` or `forever` should be used so that the application automatically restarts if there are issues.

5. Setting up CI/CD and deploying to a cloud service.

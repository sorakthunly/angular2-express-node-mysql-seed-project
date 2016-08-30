# Webpackcli

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.11-webpack.2.

## Description

This seed project sets up Angular 2 with Express.js, Node.js and MySQL. It performs basic connection with the database and builds simple API using the technology stack. The frontend contains setup of routing with Angular 2 r.c.5. 

Best of Luck!

## Installation

To use this seed project, download or clone this repository and go to the project folder and follow the steps below:

`npm install`

`cd backend`

`npm install`

Create a new tab in your terminal/command line and in there log in to your local MySQL database and follow the steps below:

`CREATE DATABASE webpackcli;`

`USE webpackcli;`

```mysql
CREATE TABLE users (
	id INT(11) NOT NULL AUTO_INCREMENT,
	username VARCHAR(30) NOT NULL PRIMARY KEY,
	hashedpassword VARCHAR(255) NOT NULL,
	CONSTRAINT user_id UNIQUE(id) 
);
```

Once completed, run in the backend folder:

`node server` 

Then create a new terminal or command line tab and go to the project folder and run `ng serve` for a dev server. 

In your browswer, navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). 
Before running the tests make sure you are serving the app via `ng serve`.

# MS SQL, Node.js, Express, TypeScript application.

## TO RUN PROJECT USE

1. Clone the repo

```sh
git clone https://github.com/vlasiuk-anatolii/dogs-api
```
2. Install NPM packages

```sh
npm install
```
3. Type in the terminal

```sh
npm start
```
4. After that, server will start on http://localhost:80

## Project Features

*  The application has an action called "Ping". If you execute this command:
```sh
curl -X GET 'http://localhost/ping'
```
 You will obtain the following message: 

```sh
"Dogshouseservice.Version1.0.1"
```
* The application has an action that allows querying dogs. It works in the following way:

```sh
curl -X GET 'http://localhost/dogs'
```
will be returned the following:

```sh
[
{"name": "Neo", "color": "red&amber", "tail_length": 22, "weight": 32},
{"name": "Jessy", "color": "black&white", "tail_length": 7, "weight": 14}
]
```

* API supports sorting by attribute, for example, 
```sh
curl -X GET 'http://localhost/dogs?attribute=weight&order=desc'
```

* API supports pagination, for example, 
```sh
curl -X GET 'http://localhost/dogs?pageNumber=3&limit=pageSize=10'
```
Both sorting and pagination work together.

* The application has an action that allows creating dogs. It works in the following way:
```sh
curl -X POST http://localhost/dog -H 'Content-Type: application/json' -d '{"name": "Doggy","color": "red","tail_length": 73,"weight": 33}'

```
* The application does not make it possible to add a dog with a name that is already in the database.
* The length of the dog's tail should not exceed 80.
* The weight of the dog should not exceed 100.
* The name of the dog should be no more than 30 characters.
* Name the color of the dog should not exceed 30 characters.
* Tail length and mass must be positive numbers.
* 5 seconds are allocated for processing the request and generating a response. At the end of this time, the response will receive a message about exceeding the specified time.

## THE APP WAS CREATED BY USING:
<h5 align="left">Languages, Frameworks and Tools:</h5>
<p align="left"> 
<a href="https://www.gnu.org/software/bash/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg" alt="bash" width="40" height="40"/></a> 
<a href="https://expressjs.com" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/></a> 
<a href="https://git-scm.com/" target="_blank" rel="noreferrer"><img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/></a> 
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/></a>
<a href="https://www.typescriptlang.org" target="_blank" rel="noreferrer"> <img src="https://www.typescriptlang.org/icons/icon-48x48.png?v=8944a05a8b601855de116c8a56d3b3ae" alt="typescript" width="40" height="40"/></a> 
<a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/></a>
<a href="https://sequelize.org/" target="_blank" rel="noreferrer"> <img src="https://sequelize.org/img/logo.svg
" alt="sequelize" width="40" height="40"/></a>  
<a href="https://www.microsoft.com/en-us/sql-server/sql-server-downloads" target="_blank" rel="noreferrer"> <img src="https://upload.wikimedia.org/wikipedia/de/8/8c/Microsoft_SQL_Server_Logo.svg" alt="mssql" width="40" height="40"/> </a> <a href="https://postman.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/> </a></p>

## Author

* **Vlasiuk Anatolii** - [Vlasiuk Anatolii](https://github.com/vlasiuk-anatolii) - *MS SQL, Node.js, Express, TypeScript application.*


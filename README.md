# Netbina test project

A simple React Web Application for translate English text to a few languages. because I can't find a good APIs so I was forced to use this [API](https://api.reverso.net/translate/v1/translation).

> We can better this project (add linter, resposive, improve test coverage, and etc) but as you know this project is just test.

## Run with docker:

please go to root directory and run:

1. `docker build -t translator .`
2. `docker run -it -p 3000:80 translator`

then you can run project on `http://localhost:3000`

## Run with npm:

please go to root directory and run:

1. `npm install`
2. `npm start`

## Run test:

please go to root directory and run:

`npm run test`

for see coverage use:

`npx jest --coverage`

## Warning:

maybe you see some warning like :

> Attempt to set a forbidden header was denied: Connection.
> don't worry. this problem is from API service.

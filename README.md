# e-learning-platform

### Description
```
this project mimics a typical e-learning paltform with courses are dynamically fetched from a json file and displayed.
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
### json file is located in db.json(Mock API) and it is served by listening at
```
localhost://http://localhost:3000/courses
```
### Run this on your terminal to install json server for you to be able to access the json file on local host
```
npm install -g json-server

```
### Run the json-server,after installing json-server, you can serve the db.json file by running
```
json-server --watch db.json --port 3000
```
### To stop the json-server, press CTRL + C in the terminal where the server is running.

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

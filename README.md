# e-learning-platform

### Description
```
this project mimics a typical e-learning paltform with courses are dynamically fetched from a json file and displayed.
```

## Project setup
```
npm install
```
Technologies Used
The following major technologies are used in this project:

Vue.js 3: A progressive JavaScript framework for building user interfaces.
Vuetify 3: A Vue.js UI library with material design components for building responsive and visually consistent UIs.
Tailwind CSS: A utility-first CSS framework for designing custom user interfaces without writing much custom CSS.
json-server: Used to simulate a mock API for development.

### Compiles and hot-reloads for development
```
npm run serve
```
### Go to your browser to veiw the project
```
http://localhost:8080
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

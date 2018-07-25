# Career Atlas

This is a new way to search for jobs! Career Atlas is a location based job search application that uses a variety of information to create a new experience.

## Getting started

Make sure you have the correct versions of npm for this project

```
$ node -v
v8.7.0
$ npm -v
6.0.0
```

### Installing Node and npm
If you do not have node or npm, use [homebrew](https://brew.sh/) to install or upgrade. Once you have homebrew installed you can run the following to install:

```
$ brew install node
$ brew install npm
```

if you have the wrong version you can use homebrew to update node and npm with the following commands:

```
$ brew upgrade node
$ brew upgrade npm
```

### To get running on your computer

1. Clone this repo to your computer
2. run `npm install` to make sure all dependencies are installed
3. run `npm start` to start the server on localhost:3001

### How to use

This is just the backend so you will need to use an API development tool like [Postman](https://www.getpostman.com/) or curl through the terminal.

Check out the [routes](server/routes/routes.js) to see a list of all of the available routes to use and make sure to check out the models so the correct data is being sent.

### Env Variables
In order to get some of the endpoints working you must have the correct env variables. Check out the `.env.sample` file to see what you need.

### Indeed API
You can sign up for the Indeed APi [here](https://www.indeed.com/publisher). You will need to get a publisher ID and the url for this app to work correctly.

### Testing

I'm using [Jest](https://facebook.github.io/jest/) for testing. Run `npm run test` to run the testing suite

## Contributing

### Issues, Comments or Suggestions

Please visit the [issues page](https://github.com/Rdore88/career_atlas_node/issues) to report bugs or to suggest new features

### Developer work flow

1. Fork the repo
2. Checkout branch for feature
3. Develop!
4. Make sure to test your code and pass all tests by running `npm run test`
5. Make a PR!

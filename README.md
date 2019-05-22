- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- The project is using Material UI (UI components, Grids) [Material UI](https://material-ui.com/)
- The project is using Redux (State magnament) [Redux](https://es.redux.js.org/)
- The project is using Redux-Saga (Middleware) [Redux-Saga](https://github.com/redux-saga/redux-saga)
- The project is using Jest (Unit testing) [Jest](https://jestjs.io/)

## Get started

Create an env file on the root of your directory to set the following env variables:

```
API_URL = YOUR_API_URL
API_KEY = YOUR_API_KEY
```

If you are console lover you could use:

```
$ export API_URL = YOUR_API_URL
$ export API_KEY = YOUR_API_KEY
```

Notes: Don't worry i'll upload the .env file is up on github, so you don't need to set this steps.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

## Notes

- All the components are covered by test, they can be improved.
- I'm following **component - container pattern**.
- For redux, the application doesn't have much interaction between the components, so i followed **duck pattern**.
- The application could have a pagination, the backend have a good api response to make it done.
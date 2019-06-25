## GitHint

Codebase for [GitHint GitHub app](https://githint.herokuapp.com) documentation.

[GitHint](https://github.com/apps/githint-bot) ensures that your pull requests follow specified conventions.

![](https://camo.githubusercontent.com/7dae22e63277199f47c25ad0911d03d83d6d937e/68747470733a2f2f67697468696e742e6865726f6b756170702e636f6d2f696d616765732f73637265656e73686f74732f70617373696e672d74657374732e706e67)

There are conventions that may not be easily checked with tools like ESLint or Hound CI. These could range from arbitrary checks like `A pull request must be raised by a user whose first name is not more than 6 characters long` to more practical checks like `A pull request must have at least 2 review comments`. GitHint thrives on checking these kinds of conventions.

GitHint fetches metadata about pull requests, commits, branches, trees, and passes the metadata to user-defined scripts for evaluation. Such scripts are expected to return `true` or `false` to determine if a pull request is ready to be merged.

To start using GitHint, first [install the GitHint GitHub app](https://github.com/apps/githint-bot/installations/new) on your repository and add a [.githint.json file](https://githint.herokuapp.com/config) to the root directory of the repository. That's it!

For more info visit the [documentation](https://githint.herokuapp.com/).

----------------------

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

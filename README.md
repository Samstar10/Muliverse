# Muliverse
#### Author: Samuel Muli
This is a simple blog site built with React.js. It allows users to create, edit and delete articles.

## Getting Started
## Available Scripts
Clone the repository

In the project directory, you can run:
### `npm install`
Installs all dependencies.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Using JSON Server to Mimic a Backend Database

To start up JSON Server, run `json-server --watch db.json` in your terminal.
**Note**: Running this command will instruct `json-server` to use a `db.json`
file in your terminal's current directory, so make sure to run this command from
the same directory as this repository.

Once the server is running, you'll see a list of available resource paths in the
terminal.

## Features
1. View a list of all your articles.
2. Create a new article by clicking the "Add New Article" button.
3. Edit or delete existing articles from the list.
4. Click on an article to view its details.
5. Filter articles by keywords in the search bar.

## Contributing
If you'd like to contribute to this project, follow these steps:

1. Fork the repository
2. Clone the repository.
3. Create a new branch for your feature:
    `git checkout -b feature-newfeature`
4. Make changes and commit them:
    `git commit -m 'Add new feature'`
5. Push to the branch:
    `git push origin feature-newfeature`
6. Create a pull request

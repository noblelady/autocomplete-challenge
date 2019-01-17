This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Autocomplete Challenge

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### How it works

This is a single page web app with two inputs, one for cities and the other for books.

Once at least 3 letters are entered into the appropriate text input then you will get either a list of suggestions or the no results found message.

#### Data Store
It was stated that a data store should be used. so I opted for just the regular react state store. I didn't want to make things overly complex.

#### Manage Objects in the Array

One of the issues that needed addressing was how to deal with both datasets, because one is an array of strings and the other is an array of objects. So in the AutoInput we have the handleChange function which checks to see if we have objects of strings.

If it is an object we assume that it is under the book dataset. and use the 'title' key for the primary check then the 'author key for the other check'. I probably could have done something else with getting the first key and then the second key in the object, but since I was assuming that all the objects in the books array would have the same structure that wasn't a real issue.

So I instead got all the values for the titles and mapped that to an array which I then used the filtering for. If the filteredTitles is empty I then use the filteredAuthors.

I would also like to apologize for the color scheme, I'm not that great at making things pretty without a designer.

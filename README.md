# Alchemy React Base Template

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Use this template for all your "from scratch" deliverables. To start, simply run

- `npm install`
- `npm start`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Rubric

Your Supabase List/Detail Encyclopedia

### Step Zero

Make a table on supabase like the `beanie_babies` table. Feel free to use any .json you find on the web (star wars characters, pokemon, plants, etc). Turn it into a CSV using an online tool, and paste the CSV into supabase to auto-generate a table.

| User should be able to . . .                                                         |             |
| :----------------------------------------------------------------------------------- | ----------: |
| Visit the deployed app on Netlify, with link in the About section of the Github repo |  **required for grading** |

| Events                                                                                |             |
| :----------------------------------------------------------------------------------- | ----------: |
| On the home page load, fetch and display a list of the first 20 or so `items` from supabase without errors.  |       2 |
| On next page click, fetch and display a list of the next 20 `items`. This button should be disabled on page 1.  |        2 |
| On prev page click, fetch and display a list of the previous 20 `item`s.  |        2 |
| When the user clicks on an `item`, navigate to that item's detail page |        2 |
| On detail page load, fetch and display the correct `item` based on the id in the URL |        2 |

| Components                                                                                |             |
| :----------------------------------------------------------------------------------- | ----------: |
| `App()` : has routes to the `ItemPage` and `ItemDetail` components, with appropriate `exact path` props |2|
| `<Item>({ items })` : takes in the correct props and renders `Link` components to the detail page |2|
| `<Item>List({ items })` : takes in the correct props and renders an `item` for each item in the array |2|
| `<Item>Page` : tracks items and page state correctly, refetching whenever the page state changes, passes props correctly to `<Item>List` |2|
| `<Item>s Detail` : uses the correct `react-router-dom` hook to get the id from the URL, then uses that id to fetch the correct `item` |2|

### Stretch goal ideas

- Add a search bar. Initially, just launch a new search on change using your `useEffect`. Ideally, though, this search should occur on submit. Ooooor you can look into throttling/debouncing your function call to limit the number of calls that are made on change!
- Add search params to the URL on change. That way you can copy and paste link to the exact right search and send it to somebody else. You'll need to use the query params to set the initial state of your current page and search query

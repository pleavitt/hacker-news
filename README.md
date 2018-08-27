# Hacker News Search

A React Redux application that consumes data from the Hacker News API. This is a frontend that takes a search query from the user and returns links related to the search from the Hacker News website.

## Demo
Click [here](https://pleavitt.github.io/hacker-news/) for a demonstration of the application

## Tech
* React
* Redux
* Redux Thunk middleware
* Bulma CSS Framework
* Material UI Framework

## Purpose of this application

This app was built for the primary purpose as a for a prospective employer.

## Current Issues

- Previous results can sometimes embed themselves into the search results
- If you click the Next Page button and no results are returned, the Results Navigation component does not render.
- Clicking the Previous and next buttons trigger a search for what currently exists in the search field, not the next page of results for the current query.
- The close button for the error notification is currently not functional.

## Todo

- Make state immutable
- Remove instances of Bulma CSS framework
- Return an extendable list instead of a list with 20 elements


Important to note - the API takes a little while to load, please give it time :)

Book Haven
A simple React web application that allows users to search for books from the Open Library API, view details about them, and add/remove books from a personal reading list.

Technologies Used
React.js: A JavaScript library for building user interfaces. It’s used here to build dynamic, component-based UI elements for the book search and reading list features.

React Hooks: Specifically, useState and useEffect hooks are used to manage component state and lifecycle methods. These hooks enable interactive features such as fetching data, managing form inputs, and conditionally rendering elements.

Open Library API: An open API from Open Library is used to fetch book data. When a user searches for a book, an API call is made to get matching book details, such as title, author, and cover image.

CSS: Custom CSS styles are used to style the layout and components of the app. Flexbox and CSS Grid are used for component alignment.

React Router: react-router-dom is used for navigation between the home page and the reading list.

Approach Taken

1. Component-Based Architecture:
   The app is broken down into reusable components, making the code modular and easier to maintain. The primary components are:

App: The root component that manages the state of the book search results and reading list.
Search: A form component that allows users to enter a search query.
BookList: Displays a list of books, either search results or books added to the reading list.
Book: Displays individual book details and provides buttons to add or remove the book from the reading list. 2. State Management with Hooks:
useState: Used extensively to manage state for books, reading list, and UI interactions such as showing/hiding modals.
useEffect: Used to fetch random book categories upon initial app load to provide a default set of books to browse. 3. Asynchronous API Calls:
API calls to the Open Library are handled asynchronously using JavaScript’s fetch API. The app sends search queries to Open Library's API and displays the results in real-time.

4. Conditional Rendering:
   Components like the “Add to Reading List” and “Remove from My List” buttons are conditionally rendered based on whether a book is already in the reading list.
   Modal popups are conditionally shown when users click on the "Read About Me" button for more detailed information.
5. Responsive UI Design:
   The layout adapts to different screen sizes using CSS Grid and Flexbox, ensuring a good user experience across devices.

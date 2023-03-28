# Movie Searching

Author: Jonathan Baxter

This project demonstrates a Vue Project built with Nuxt.js to call out to an API using an Express.js server to format the data in an appropriate JSON string.

## Setup Instructions
- Clone th repo
- Create a .env file and place it in the webservice folder with an API key to Movie Database formatted as: API_KEY="Your API Key Here"
- Run NPM Install in both webservice and webapp folders to build the appropriate projects.
- In one terminal/console, run: nodemon while inside webservice folder, this will activate the local express server. And inside the web app run: npm run dev. This will have the environments work the way they are meant to run while being tested locally.

## How it works
- Type in a string into the search box and click the search button. Results should display appropriately in the bottom of the site.

## What to look for in the code

Current build of the site includes the following:
- Webapp
  - Built with Nuxt.js to build the application.
  - Utilizes styling and formatting with css flexbox principles.
    - Part of the styling is to go for a modern neutral look with mostly neutral colors.
  - Importing different fonts using google fonts.
  - Styling the text to be different and using the appropriate html tags to improve seo when possible.
  - Created multi component in view to separate a header from the search component.
  - I made the view responsive in design. If the max-width of your screen is below 768 pixels, the content will adjust accordingly to be more mobile friendly.
- Webservice
  - Express.js basic server that sets server on port 3001
  - Calls out to Movie Search API using movie search's formatting and retrieving results based on user's search text.
  - Retrieves API results and formats results into a JSON array to be returned to the front end.
  - Included an additional check to make sure the search only returns 10 in case the api still potentially returns more.

## What I learned from this challenge

Bear in mind, I have a  lot of previous background with Express.js and Vue.js, so I was really excited to test out the other suggestion on this for Nuxt.js.

Most of my vue projects I've done the view quickstart and this is so much cleaner. One thing I was trying to do was test out the server side rendering like Next.js can do, but didn't have enough time to see it work in action. 

## What I'd like to do in the future with this project
- Set up the project to be run online. I know there is a little extra work with setting up Express.js to be run on a server so going through those steps to host this on even my portfolio at jonbaxt.me (I'm quite happy with the look and feel I'd love to put this online).
- Maybe more functionality with the express server. Connect to a postgres database to save your favorite movies (definitely a post MVP idea).
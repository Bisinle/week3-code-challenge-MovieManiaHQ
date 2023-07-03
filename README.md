![Screenshot from 2023-07-03 15-18-14](https://github.com/Bisinle/week3-code-challenge-MovieManiaHQ/assets/121357281/c6382850-f9e4-4c19-8feb-160682bfbd7f)## MovieManiaHQ




## Description


![Alt text](logo.png)

this JavaScript code fetches movie data from a server, `dynamically` creates movie cards with interactive details, a`llows users to view movie information`, `buy tickets (updating ticket count on the server)`, and d`elete movies from the list (deleting them from the server)`. The code enables an interactive movie browsing experience on a web page.

The code performs a `fetch` request to a local server at `"http://localhost:3000/films"` to retrieve data about various movies. The server likely stores information about movie titles, descriptions, posters, runtimes, showtimes, ticket availability, and other details.

If the fetch request is successful (status code 200), the code logs "SUCCESS" to the console. Otherwise, it logs "UNSUCCESSFUL."

The response data from the server is then parsed as JSON, and the function "movieCards" is called, passing the parsed movie data as an argument.

The "`movieCards" functio`n is responsible for creating and populating movie cards based on the received movie data. It selects various HTML elements using querySelector to modify their contents and attributes accordingly.

For each movie in the data, the function dynamically creates a movie card with details such as the movie poster, title, runtime, and other information. It also adds event listeners to the movie cards to handle interactions when a user clicks on a card.

![Screenshot from 2023-07-03 15-18-14](https://github.com/Bisinle/week3-code-challenge-MovieManiaHQ/assets/121357281/5cb408b4-b45e-4429-a0bd-456d9d62177e)



When a user clicks on a movie card, `a popup appears displaying more detailed information about the selected movie,` such as its `description`, `quality`, `showtime`, and `available tickets`. The code calculates the number of available tickets based on the difference between the movie's capacity and the number of tickets already sold. If the movie is sold out, it marks the card as "sold-out."
![Screenshot from 2023-07-03 15-17-27](https://github.com/Bisinle/week3-code-challenge-MovieManiaHQ/assets/121357281/36a6fe9e-5b1a-4fea-b774-9cbad83f2911)



The code also provides a `"Buy Ticket"` button inside the popup for each movie card. When a user clicks this button, the script sends a request to the server to update the number of sold tickets for the respective movie, simulating a ticket purchase.
![Screenshot from 2023-07-03 15-18-01](https://github.com/Bisinle/week3-code-challenge-MovieManiaHQ/assets/121357281/172754c2-edca-41de-9ddf-844a2a48ea91)


Additionally, each movie card contains a "Delete" button that, when clicked, sends a request to the server to delete the corresponding movie from the database.

## Project Setup
To set up the project, follow these steps:
1. Clone the repository to your local machine.
2. Open the any of the `index.js` file in your preferred code editor.
3. Customize the script by modifying the variables, functions, or logic to suit your requirements.
4. Run the JavaScript file using a JavaScript runtime environment


## Author & License
This code was written by `Abdiwadud Mohamed`. It is released under the `Bisinle` license.

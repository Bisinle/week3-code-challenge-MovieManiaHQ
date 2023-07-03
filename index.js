const movieUL = document.querySelector("#films");
movieUL.classList.add("movieUL");
let currentId = null;
///////////////////////////////////////////////////////////////////
fetch(`http://localhost:3000/films`)
  .then((res) => {
    if (res.ok) {
      console.log("SUCCESS");
    } else {
      console.log("UNSSUCCESSFUL");
    }

    return res.json();
  })
  .then((data) => {
    movieCards(data);
  });

// document.addEventListener('DOMContentLoaded',(e)=>{
//   e.preventDefault()

//   console.log("dom LOADED");
//   const a = document.querySelector('#popup')
//   a.classList.add('active')
//   const ls = movieUL.querySelector('.card')

//   console.log(a);
//   console.log(ls);
//   if (a.classList.contains('active'))
//   console.log('see');

// })

function ticketCaclculator(moviecapacity, movietickets) {
  if (moviecapacity > movietickets) {
    return moviecapacity - movietickets;
  } else {
    alert("NO AVALABLE TICKETS");
    return `Sold Out`;
  }
}

function movieCards(moveObject) {
  console.log(moveObject[0]);
  const movieDetails = document.querySelector("#popup");
  const moviePoster = document.querySelector("#popup img");
  const movieTitle = document.querySelector("#movieTitle");
  const movieDescription = document.querySelector("#movieDescription");
  const movieLink = document.querySelector("#movieLink");
  const RunTime = document.querySelector("#RunTime");
  const ShowTime = document.querySelector("#ShowTime");
  const quality = document.querySelector("#quality");
  const avalabletickets = document.querySelector(" #avalabletickets");
  const buyNow = document.createElement("h4");
  buyNow.setAttribute("id", "buyNow");
  buyNow.setAttribute("class", "byNowButton");
  buyNow.textContent = "Buy Ticket";
  const buyNowSpan = document.querySelector("#buyNowSpan");

  for (const movie of moveObject) {
    const movieItem = document.createElement("li");
    movieItem.innerHTML = `

		<div class="card movie_card " id="card${movie.id}">
        <img src=
        "${movie.poster}"" alt="...">
          <a id="details" href="#popup">
               <i id="play" class="fa-solid  fa-circle-play"></i>
               </a>
               <a id="delete" class="delete" href="#popup">
               <i class="fa-solid fa-trash-can fa-lg"></i>
               </a>
               


        <div class="card-body">
          <h5 class="card-title">${movie.title}</h5>
               <div id="spans">
               <span class="movie_info">2019</span>
               <span class="movie_info movie">Movie</span>
               <span class="movie_info ">${movie.runtime} min</span>
                </div>
             
              
        </div>
      </div>


    `;

    movieUL.append(movieItem);
    const card = document.getElementById(`card${movie.id}`);
    card.setAttribute("data-movie-id", `${movie.id}`);
    card.setAttribute("data-movie-ticketsSold", `${movie.tickets_sold}`);

    buyNowSpan.append(buyNow);

    card.addEventListener("click", () => {
      // card.classList.add("active");
      movieUL.classList.add("active");
      movieDetails.classList.add("active");
      moviePoster.setAttribute("src", `${movie.poster}`);

      movieTitle.textContent = ` ${movie.title}`;
      movieDescription.innerHTML = `
      <h4>Description</h4>
      <br>
      <p>${movie.description}         
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      </p>
      
      `;
      quality.textContent = `${movie.quality} `;
      RunTime.textContent = `${movie.runtime} mins`;
      ShowTime.textContent = `${movie.showtime} `;
      let ticketCaclc = ticketCaclculator(movie.capacity, movie.tickets_sold);
      if (ticketCaclc === `Sold Out`) {
        card.classList.add("sold-out");
        buyNow.classList.add("sold-out");
        console.log(card);
      }
      avalabletickets.textContent = `Tickets: ${ticketCaclc}`;
    });

    movieLink.addEventListener("click", () => {
      card.classList.remove("active");
      movieUL.classList.remove("active");
      movieDetails.classList.remove("active");
    });

    // byNow.addEventListener("click", (event) => {
    //   if (event.target.classList.contains("popup")) {
    //     const cardId = event.target.getAttribute(`card${movie.id}`);
    //     // Get the movie ID from the clicked button
    //     console.log(cardId);
    //   }
    // });
    // buyNow.addEventListener('click',()=>{

    // })
  }
  const lists = movieUL.querySelectorAll(".card ");

  for (let i = 0; i < lists.length; i++) {
    lists[i].addEventListener("click", () => {
      const cardID = parseInt(lists[i].getAttribute("data-movie-id"));
      const soldTickets = parseInt(
        lists[i].getAttribute("data-movie-ticketsSold")
      );

      // console.log(cardID);
      // currentId = cardID;
      BuyNowEventAdder(cardID, soldTickets);
    });
  }

  //add an even listener to the delet button
  const DeleteButton = movieUL.querySelectorAll(".delete");
  // console.log(DeleteButton);
  for (let i = 0; i < DeleteButton.length; i++) {
    DeleteButton[i].addEventListener("click", () => {
      movieDetails.classList.remove("active");
      const cardID = parseInt(lists[i].getAttribute("data-movie-id"));

      DeleteCard(cardID);
    });
  }
}

function BuyNowEventAdder(id, soldTickets) {
  buyNow.addEventListener("click", buyNowClickHandler);

  function buyNowClickHandler() {
    updateTheServer(id, soldTickets);

    // Remove the event listener for the "buyNow" button after it's clicked once
    buyNow.removeEventListener("click", buyNowClickHandler);
  }

  // Add the event listener to the "buyNow" button
  buyNow.addEventListener("click", buyNowClickHandler);
}
function updateTheServer(id, soldTickets) {
  fetch(`http://localhost:3000/films/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      tickets_sold: soldTickets + 1,
    }),
  })
    .then((res) => {
      res.json();
    })
    .then((data) => {
      console.log(data);
    });
}

function DeleteCard(id) {
  fetch(`http://localhost:3000/films/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

// function goGetter(id) {
//   // Remove previous event listener from "buyNow" button

//   // Define the click handler for "buyNow" button
//   const buyNowClickHandler = () => {
//     console.log("hello " + id);
//   };
//   buyNow.removeEventListener("click", buyNowClickHandler);

//   // Add the new event listener to "buyNow" button
//   buyNow.addEventListener("click", buyNowClickHandler);
// }

// function goGetter(id) {
//   buyNow.addEventListener("click", () => {
//     if (currentId) {
//       console.log(idArray);
//     } else {
//       console.log("No movie card is currently selected.");
//     }
//   });
// }

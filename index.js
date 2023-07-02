const movieUL = document.querySelector("#films");
movieUL.classList.add("movieUL");

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

function movieCards(moveObject) {
  console.log(moveObject[0]);
  for (const movie of moveObject) {
    const movieItem = document.createElement("li");
    movieItem.innerHTML = `

		<div class="card movie_card " id="card${movie.id}">
        <img src=
        "${movie.poster}"" alt="...">
          <a id="details" href="#popup">
               <i id="play" class="fa-solid  fa-circle-play"></i>
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
    // console.log(card);
    const movieDetails = document.querySelector("#popup");
    const moviePoster = document.querySelector("#popup img");
    const movieTitle = document.querySelector("#movieTitle");
    const movieDescription = document.querySelector("#movieDescription");
    const movieLink = document.querySelector("#movieLink");
    const RunTime = document.querySelector("#RunTime");
    const ShowTime = document.querySelector("#ShowTime");
    const quality = document.querySelector("#quality");
    const avalabletickets = document.querySelector(" #avalabletickets");
    const byNow = document.querySelector(" #byNow");
    // 

    //ShowTime

    card.addEventListener("click", () => {
      // card.classList.add("active");
      movieUL.classList.add("active");
      movieDetails.classList.add("active");
      moviePoster.setAttribute("src", `${movie.poster}`);
      console.log(moviePoster);

      movieTitle.textContent = ` ${movie.title}`;
      movieDescription.innerHTML = `
      <h4>Description</h4>
      <br>
      <p>${movie.description}         Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      </p>
      
      `;
      quality.textContent = `${movie.quality} `;
      RunTime.textContent = `${movie.runtime} mins`;
      ShowTime.textContent = `${movie.showtime} `;
      avalabletickets.textContent = `Tickets: ${movie.tickets_sold}`;
      console.log(avalabletickets);

      console.log(card);
    });
    card.addEventListener("mouseleave", () => {});

    movieLink.addEventListener("click", () => {
      card.classList.remove("active");
      movieUL.classList.remove("active");
      movieDetails.classList.remove("active");
    });
  }
}

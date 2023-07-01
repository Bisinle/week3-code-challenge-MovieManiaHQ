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
    const movieTitle = document.querySelector("#movieTitle");
    const movieDescription = document.querySelector("#movieDescription");
    const movieLink = document.querySelector("#movieLink");

    card.addEventListener("click", () => {
      // card.classList.add("active");
      movieUL.classList.add("active");
      movieDetails.classList.add("active");

      if (movieDetails.classList.contains("active")) {
        document.body.style.overflow = "hidden";
      } else {
        body.style.overflow = "auto";
      }
      //grap the elemets on the popup and insert the content
      movieTitle.textContent = ` ${movie.title}`;
      movieDescription.textContent = `${movie.description}`;

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

const movieUL = document.querySelector("#films");
movieUL.classList.add("movieUL");

const movieDetails = document.querySelector("#popup");
const moveTitle = document.querySelector("#moveTitle");
const movieDescription = document.querySelector("#movieDescription");
const movieLink = document.querySelector("#movieLink");

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
  console.log(moveObject);
  for (const movie of moveObject) {
    const movieItem = document.createElement("li");
    movieItem.innerHTML = `

		<div class="card movie_card " id="card${movie.id}">
        <img src=
        "${movie.poster}"" alt="...">
        <div class="card-body">
            <i class="fas fa-play play_button" data-toggle="tooltip" data-placement="bottom" title="Play Trailer">
            </i>
          <h5 class="card-title">${movie.title}</h5>
                 <span class="movie_info">2019</span>
                 <span class="movie_info float-right"><i class="fas fa-star"></i> 9 / 10</span>
        </div>
      </div>


    `;

    movieUL.append(movieItem);
    const card = document.getElementById(`card${movie.id}`);
    const linkId = document.getElementById(`popup${movie.id}`);
    console.log(card);

    card.addEventListener("click", () => {
      // console.log(movie.title);
      card.classList.add("active");
    });
    card.addEventListener("mouseleave", () => {});
    card.classList.remove("active");
    // movieDetails.classList.remove("active");
  }
}

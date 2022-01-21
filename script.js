const main = document.getElementById("main");
const input = document.getElementById("search-input");
const submit = document.getElementById("search-submit")

const showMovie= (img, title, date) => {``
	main.innerHTML += `
		<div class='col-5 m-3'>
			<div class='card'>
				<img src='${img}' alt=''>
				<div class='card-body'>
					<h1>${title}</h1>
					<p>${date}</p>
					<div class='btn'></div>
				</div>
			</div>
		</div>
		`;
};

function getMovie() {
	fetch(`http://www.omdbapi.com/?s=${input.value}&apikey=5f818047`)
	.then((response) => {
		return response.json();
	})
	.then((response) => {
		main.innerHTML = "";
		response.Search.forEach(movie => {
			showMovie(movie.Poster, movie.Title, movie.Year);
		});
	})
	.catch((error) => {
		console.error(error.message);
	});
}

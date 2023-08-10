import React from "react"

function MovieCard({ movie: { id, title, vote_average, poster_path } }) {
	return (
		<div className="movieCard">
			<img
				className="moviePoster"
				src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
				alt=""
			/>
			<div className="movieCardFooter">
				<div className="movieCardDetails">
					<h4 className="movieCardTitle">{title}</h4>
					<p className="movieCardRating">{vote_average}</p>
				</div>
				<div className="favButton">#</div>
			</div>
		</div>
	)
}

export default MovieCard

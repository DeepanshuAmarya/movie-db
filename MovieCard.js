import './MovieCard.css';

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <h3>{movie.movie}</h3>
      <p><strong>Rating:</strong> {movie.rating}</p>
      <p><strong>Genre:</strong> {movie.genre}</p>
      <p><strong>Year:</strong> {movie.year}</p>
    </div>
  );
}

export default MovieCard;

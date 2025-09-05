import { Card } from 'react-bootstrap';

function MovieCard({ movie }) {
    return (
        <Card className="movie-card rounded m-2" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={movie.Poster} alt={movie.Title} />
            <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Text>
                    <strong>Year: </strong> {movie.Year}
                </Card.Text>
            </Card.Body>
        </Card>
    )
};

export default MovieCard;
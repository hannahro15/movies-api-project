import { Card } from 'react-bootstrap';

function MovieCard() {
    return (
        <Card className="movie-card rounded m-2">
            <Card.Body>
                <Card.Title>Sample Movie</Card.Title>
                <Card.Text>
                    This is a sample movie card to test the layout.
                </Card.Text>
            </Card.Body>
        </Card>
    )
};

export default MovieCard;
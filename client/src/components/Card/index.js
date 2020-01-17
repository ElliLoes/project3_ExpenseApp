import React from "react";
import BsCard from "react-bootstrap/Card";
// import "./style.css";

function Card() {
    return (
        <BsCard style={{ width: '18rem' }}>
            <BsCard.Body>
                <BsCard.Title>Card Title</BsCard.Title>
                <BsCard.Subtitle className="mb-2 text-muted">Card Subtitle</BsCard.Subtitle>
                <BsCard.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </BsCard.Text>
                <BsCard.Link href="#">Card Link</BsCard.Link>
            </BsCard.Body>
        </BsCard>
    );
}

export default Card;
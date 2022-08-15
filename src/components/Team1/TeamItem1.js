import React from 'react';
import { LoremIpsum } from 'react-lorem-ipsum';
import './Team.css';
import {Card, Image} from "react-bootstrap";
import schufimafi from "../../assets/img/schufimafi.png";




const TeamItem= ({ name, img, cardStyle,handlePointerEvent }) =>  {
    return (
        <article className={cardStyle}>
            <Card
                bg='light'
                text='dark'
                className="mb-2 home-description"
                onMouseDown={handlePointerEvent}
                onTouchStart={handlePointerEvent}
            >
                <Card.Body>
                    <Image src={img} className="home-main-img" alt={name} />
                    <Card.Title className="home-card-title">{name}</Card.Title>
                </Card.Body>
            </Card>
        </article>
    );
}

export default TeamItem;

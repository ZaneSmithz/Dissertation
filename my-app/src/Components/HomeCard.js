import React from 'react'
import {Card, Button} from 'react-bootstrap';
import './CSS/Dashboard.css';

const HomeCard = (props) => {
    return (
        <Card className="homeCardMain homeCardSpacing">
            <div className="homeCardTextAlign">
                <Card.Body>
                    <p1 className="mx-5">{props.firstName}  {props.lastName}</p1>
                    <p1 className="mx-5">{props.moduleNum} </p1>
                    <p1 className="mx-5">{props.chapterNum}</p1>
                </Card.Body>
            </div>
            
        </Card>
    
        
    )
}

export default HomeCard;
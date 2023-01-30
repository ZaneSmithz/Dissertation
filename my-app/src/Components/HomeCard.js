import React from 'react'
import {Card, Button} from 'react-bootstrap';
import './CSS/Dashboard.css';

const HomeCard = (props) => {
    return (
        <Card className="homeCardMain homeCardSpacing">
        
                <Card.Body>
                <div className="homeCardTextAlign">
                    <div className='test'>
                    <p> {props.firstName} {props.lastName}</p>
                    </div>
                    <div className='test'>
                    <p className="mx-5">Module {props.moduleNum}</p>
                    </div>
                    <div className='test'>
                    <p className="mx-3">Chapter {props.chapterNum}</p>
                    </div>
                    </div>
                </Card.Body>
        
            
        </Card>
    
        
    )
}

export default HomeCard;
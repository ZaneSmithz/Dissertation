import {useState, useEffect, React} from 'react'
import {Card, Button} from 'react-bootstrap';
import './CSS/Dashboard.css';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import {BLOCKS, INLINES} from '@contentful/rich-text-types'

const ModuleCard = ({ moduleItems }) => {

    const richTextOptions = {
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => {
                return <span> hello world! </span>
            }
        }
    }

    console.log(moduleItems.map(item => item));
    return (
        <Card className="homeCardMain homeCardSpacing">
                <Card.Body>
                    {moduleItems.map((item,i) => 
                    <h key={i}> {item.moduleTitle} </h>)}
                    
                </Card.Body>
        </Card>
    
        
    )
}

export default ModuleCard;
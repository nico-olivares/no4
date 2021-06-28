import React from 'react';
import { Card } from 'semantic-ui-react';
// import './ExperienceCard.css';


//experince component.
export default function ExperienceCard({item}) {


    return (
        <Card>
            
            <Card.Content>
            <Card.Header className='card-title' >{item.title}</Card.Header>
            <Card.Meta className='card-description' >
                <span className='date'>{item.years}</span>
                <span className='date'>{item.institution}</span>
            </Card.Meta>
            <Card.Description className='card-description' >
                {item.description}
            </Card.Description>
            </Card.Content>
            
        </Card>
        
    )

}
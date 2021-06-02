import React from 'react';
import { Card, Transition } from 'semantic-ui-react';
// import './ExperienceCard.css';


//experince component.
export default function ExperienceCard({item}) {


    return (
        <Card>
            
            <Card.Content>
            <Card.Header>{item.title}</Card.Header>
            <Card.Meta>
                <span className='date'>{item.years}</span>
                <span className='date'>{item.institution}</span>
            </Card.Meta>
            <Card.Description>
                {item.description}
            </Card.Description>
            </Card.Content>
            
        </Card>
        
    )

}
import React from 'react';
import { Card, Transition } from 'semantic-ui-react';
// import './ExperienceCard.css';


//experince component.
export default function EducationCard({item}) {


    return (
        <Card>
            
            <Card.Content>
            <Card.Header>{item.title}</Card.Header>
            <Card.Meta>
                <p className='date'>{item.institution}</p>
                <p className='date'>{item.years}</p>  
            </Card.Meta>
            <Card.Description>
                {item.description}
            </Card.Description>
            </Card.Content>
            
        </Card>
        
    )

}
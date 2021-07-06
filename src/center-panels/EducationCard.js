import React from 'react';
import { Card } from 'semantic-ui-react';
import './EducationCard.css';


//experince component.
export default function EducationCard({item}) {


    return (
        <Card>
            
            <Card.Content>
            <Card.Header className='card-title' >{item.title}</Card.Header>
            <Card.Meta className='card-description' >
                <p className='date'>{item.institution}</p>
                <p className='date'>{item.years}</p>  
            </Card.Meta>
            <Card.Description className='card-description' >
                {item.description}
            </Card.Description>
            </Card.Content>
            
        </Card>
        
    )

}
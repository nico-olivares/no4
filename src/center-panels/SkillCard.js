import React from 'react';
import './SkillCard.css';
import { Container, Card, Label } from 'semantic-ui-react';

//experince component.
export default function SkillCard({item, title}) {


    return (
        <div>
            <Container className='single-skill-group' fluid >
                <h3 className="title" >
                    {title}
                </h3>
                {item.map((skillSet, index) => {
                    return (
                        <Container className="single-skill-card" fluid>
                            <h3 className="subtitle" >{skillSet.title === title ? '' : skillSet.title}</h3>
                            <Container fluid>
                                {skillSet.skills.map((singleSkill) => {
                                    return (
                                    <Label className="skill-label" color={index === 0 ? 'olive' : index === 1 ? 'yellow' : 'orange'} size='large' >
                                        <Label.Detail>{singleSkill}</Label.Detail>
                                    </Label>)
                                })}
                            </Container>
                        </Container>
                    )
                })}
            </Container>
        </div>
        
    )

}
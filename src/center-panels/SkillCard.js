import React from 'react';
import './SkillCard.css';
import { Container, Label, Button, Popup } from 'semantic-ui-react';

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
                                    if (singleSkill.url === null) {
                                        return (
                                            <Label className="skill-label" color={index === 0 ? 'olive' : index === 1 ? 'yellow' : 'orange'} size='big' >
                                                {singleSkill.skill}
                                            </Label>
                                        )
                                    } else {
                                        return (
                                            <Popup content={singleSkill.url} trigger={(
                                            <Button className="skill-label" color={index === 0 ? 'olive' : index === 1 ? 'yellow' : 'orange'} size='big' >
                                                <a className="skillATag" href={singleSkill.url} target="_blank" rel='noreferrer' >
                                                    {singleSkill.skill}
                                                </a>
                                            </Button>)} />
                                        )
                                            }
                                })}
                            </Container>
                        </Container>
                    )
                })}
            </Container>
        </div>
        
    )

}
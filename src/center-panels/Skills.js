import React from 'react';
import './Skills.css';
import getSkillsItem from '../data/skillsItems';
import SkillCard from './SkillCard';
import { Transition, Container } from 'semantic-ui-react';

//experince component.
export default function Skills({panelIsVisible}) {

    const skillsArray = getSkillsItem();
    

    return (
        <div>
            <Transition visible={panelIsVisible} animation='fly left' duration={1500}  >
                <div className='skills-container' >
                    <h2> Skills</h2>
                    <div className='skill-subcontainer' >
                        <Container className='skill-cards-container'  >
                            {skillsArray.map(item => {
                                return <SkillCard item={item.skillGroups} title={item.title} />
                            })}
                        </Container>
                    </div>
                    
                </div>
            </Transition>
        </div>
        
    )

}
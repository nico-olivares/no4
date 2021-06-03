import React from 'react';
import './Skills.css';
import getSkillsItem from '../data/skillsItems';
// import ExperienceCard from './ExperienceCard';
import { Transition, Container, Card, Label } from 'semantic-ui-react';

//experince component.
export default function Skills({item, panelIsVisible}) {

    console.log(item);

    return (
        <div>
            <Transition visible={panelIsVisible} animation='fly left' duration={1500}  >
                <div className='skills-container' >
                    <h2> Skills</h2>
                    <div className='skill-subcontainer' >
                        <Container className='skill-cards-container' fluid color='red' >
                            <p>Hello world</p>
                        </Container>
                    </div>
                    
                </div>
            </Transition>
        </div>
        
    )

}
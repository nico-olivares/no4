import React from 'react';
import './Experience.css';
import getExperienceItem from '../data/experienceItems';
import ExperienceCard from './ExperienceCard';
import { Transition } from 'semantic-ui-react';

//experince component.
export default function Experience({item, panelIsVisible}) {

    console.log(item);

    return (
        <div>
            <Transition visible={panelIsVisible} animation='fly left' duration={1500}  >
                <div className='experience-container' >
                    <h2>{item.title} Experience</h2>
                    <div className='exp-card-container' >
                        {item.children.map(thisItem => {
                            return <ExperienceCard item={thisItem} />
                        })}
                    </div>
                    
                </div>
            </Transition>
        </div>
        
    )

}
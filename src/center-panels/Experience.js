import React from 'react';
import './Experience.css';

import ExperienceCard from './ExperienceCard';
import { Transition } from 'semantic-ui-react';

//experince component.
export default function Experience({item, panelIsVisible}) {


    return (
        <div>
            <Transition visible={panelIsVisible} animation='fly left' duration={1500}  >
                <div className='experience-container' >
                    <h2>{item.title} Experience</h2>
                    <div className='exp-card-container' >
                        {item.children.map((thisItem, index) => {
                            return <ExperienceCard key={index} item={thisItem} />
                        })}
                    </div>
                    
                </div>
            </Transition>
        </div>
        
    )

}
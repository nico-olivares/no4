import React from 'react';
import './Education.css';
import { Transition } from 'semantic-ui-react';
import EducationCard from './EducationCard';

//education component and subparts
export default function Education({item, panelIsVisible}) {

    return (
        <Transition visible={panelIsVisible} animation='fly left' duration={1500}  >
            <div className="education-container" >
                <h2>Education</h2>
                <div className='education-card-container' >
                    {item.map(thisItem => {
                        return <EducationCard item={thisItem} />
                    })}
                </div>
            </div>
        </Transition>
    )

}
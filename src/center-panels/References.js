import React, { useState, useEffect } from 'react';
import './References.css';
import { Transition } from 'semantic-ui-react';
import Carousel from './Carousel.js';


export default function References({ panelIsVisible, referenceArray }) {

    let [ numberOfReferences, setNumberOfReferences ] = useState(2);

useEffect(() => {
    if (window.screen.width < 900) setNumberOfReferences(1);
}, [])


    return (
        <Transition visible={panelIsVisible} animation='fly left' duration={1500}>
            <div>
                <Carousel componentArray={referenceArray} horizontal={true} duration={30000} numberShowing={numberOfReferences} />
            </div>
        </Transition >
    )

}
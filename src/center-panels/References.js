import React from 'react';
import './References.css';
import { Transition } from 'semantic-ui-react';
import Carousel from './Carousel.js';


export default function References({ panelIsVisible, referenceArray }) {


    return (
        <Transition visible={panelIsVisible} animation='fly left' duration={1500}>
            <div>
                <Carousel componentArray={referenceArray} horizontal={true} duration={30000} numberShowing={2} />
            </div>
        </Transition >
    )

}
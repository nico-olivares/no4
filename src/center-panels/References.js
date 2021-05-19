import React from 'react';
import './References.css';
import { Transition } from 'semantic-ui-react';
import { Carousel } from './Carousel.js';

export default function References({ panelIsVisible }) {


    return (
        <Transition visible={panelIsVisible} animation='fly left' duration={1500}>
            <Carousel />
        </Transition >
    )

}
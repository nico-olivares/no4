import React from 'react';
import './References.css';
import { Transition } from 'semantic-ui-react';
import Carousel from './Carousel.js';
import getReferences from '../data/references';

export default function References({ panelIsVisible }) {


    return (
        <Transition visible={panelIsVisible} animation='fly left' duration={1500}>
            <div>
                <Carousel references={getReferences()} interval={30000} />
            </div>
        </Transition >
    )

}
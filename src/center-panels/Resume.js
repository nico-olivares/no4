import React from 'react';
import './Resume.css';
import { Transition } from 'semantic-ui-react';

export default function Resume({ panelIsVisible}) {


    return (
        <Transition visible={panelIsVisible} animation='fly left' duration={1500}  >
                <iframe title='resume' width='100%' height='100%' src='./docs/Olivares.Nicolas.Resume.pdf' />
        </Transition>
    )

}
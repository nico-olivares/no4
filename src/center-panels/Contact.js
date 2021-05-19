import React from 'react';
import './Contact.css';
import { Transition } from 'semantic-ui-react';

//contact component
export default function Contact({ panelIsVisible }) {


    return (
        <Transition visible={panelIsVisible} animation='fly left' duration={1500}>
        <div>These are my Contacts</div>
        </Transition>
    )

}
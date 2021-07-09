import React from 'react';
import './Life.css';
import { Transition, Container } from 'semantic-ui-react';
import Carousel from './Carousel';



//personal life component
export default function Life({item, photosArray, panelIsVisible, duration}) {

    

    return (
        <Transition visible={panelIsVisible} animation='fly left' duration={1500}  >
                <div className='life-container' >
                    <h2>{item.title}</h2>
                    <div className='life-subcontainer' >
                        <Container className='life-text-container large-text'  >
                            {item.description}
                        </Container>
                    </div>
                    <div className='life-carousel' >
                        <Carousel componentArray={photosArray} horizontal={true} duration={duration} numberShowing={1} />
                    </div>
                    
                </div>
            </Transition>
    )

}
import React, { useState, useEffect } from 'react';
import { act } from 'react-dom/test-utils';
import { Transition, Card, Button } from 'semantic-ui-react';
import './Carousel.css'


export default function Carousel({ references, interval }) {
const back = '<<';
const forward = '>>';
let timer = null;

const myUseEffectTimeout = () => {
    timer = setTimeout(() => {
        if (activeIndex === references.length -1) {
            setActiveIndex(0);
        } else {
            setActiveIndex(activeIndex + 1);
        }
    }, interval);
}


const [ activeIndex, setActiveIndex ] = useState(0);

useEffect(() => {
    clearTimeout(timer);
    myUseEffectTimeout();
}, [activeIndex]);

    return (
        <div className='carousel' >
            <Button primary onClick={() => {
                if (activeIndex === 0) {
                    setActiveIndex(references.length - 1);
                } else {
                    setActiveIndex(activeIndex - 1);
                }
                clearTimeout(timer);
            }} >
                {back}
            </Button>
            {references.map((item, index) => {
                return (
                    <Transition visible={index === activeIndex ? true : false } animation={index === activeIndex ? 'fade left' : 'fade right'} duration={600} >
                        <Card index={index} >
                            <Card.Content header={item.from} />
                            <Card.Content description={item.reference} />
                        </Card>
                    </Transition>
                )
            })}
            <Button primary onClick={() => {
                if (activeIndex === references.length - 1) {
                    setActiveIndex(0);
                } else {
                    setActiveIndex(activeIndex + 1);
                }
                clearTimeout(timer);
            }} >
                {forward}
            </Button>

        </div>
    )
}
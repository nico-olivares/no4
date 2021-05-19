import React from 'react';
import { Transition, Card, Button } from 'semantic-ui-react';


export default function Carousel({ references, interval }) {
const back = '<<';
const forward = '>>';
console.log('the references are ', references);
    return (
        <div>
            <Button primary>
                {back}
            </Button>
            {references.map((item, index) => {
                return (
                    <Card index={index} >
                        <Card.Content header={item.from} />
                        <Card.Content description={item.reference} />
                    </Card>
                )
            })}
            <Button primary>
                {forward}
            </Button>

        </div>
    )
}
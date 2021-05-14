import './Portfolio.css'
import { Grid, Embed, Modal, Button, Image, Header, Transition } from 'semantic-ui-react';
import { useState } from 'react'

//portfolio component. This component gets reused for each different portfolio item
export default function Portfolio({item, panelIsVisible }) {
    const [ open, setOpen ] = useState(false);

return (
    <div className="portfolio-container">
        <Transition visible={panelIsVisible} animation='fly left' duration={400}  >
            <Grid divided >
                <Grid.Row>
                    <Grid.Column>
                        <h1 style={{textAlign: 'center'}} >{item.title}</h1>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row centered columns={1} >
                    <Grid.Column className='image-column'>
                            <Modal closeIcon size='fullscreen'
                            onClose={() => setOpen(false)}
                            onOpen={() => setOpen(true)}
                            open={open}
                            trigger={<a href='#' ><Image src={`./media/apps/${item.image}`} fluid /></a>}
                            >
                            <Modal.Header>{item.title}</Modal.Header>
                            <Modal.Content >
                                <Embed
                                    icon='right circle arrow'
                                    placeholder={item.image}
                                    url={item.deployment}
                                    active='true'
                                />
                            </Modal.Content>
                            
                        </Modal>
                    </Grid.Column>
                </Grid.Row>
                
                <Grid.Row columns={4} >
                    <Grid.Column>
                        <p>Stack:</p>
                    </Grid.Column>
                    {item.stack.map((stackItem, i) => <Grid.Column key={i} ><p>{stackItem}</p></Grid.Column>)}
                </Grid.Row>
                <Grid.Row>
                        <Grid.Column>
                            <p>Github: <a href={item.github} target="_blank" >{item.github}</a></p>
                        </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                        <Grid.Column>
                            <p>Deployment: <a href={item.deployment} target="_blank" >{item.deployment}</a></p>
                        </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <p>{item.description}</p>
                    </Grid.Column>
                </Grid.Row>
                
            </Grid  >
        </Transition  >
    </div>
)
}

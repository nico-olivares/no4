import './Portfolio.css'
import { Grid, Embed, Modal, Image, Transition } from 'semantic-ui-react';
import { useState } from 'react'

//portfolio component. This component gets reused for each different portfolio item
export default function Portfolio({item, panelIsVisible }) {
    const [ open, setOpen ] = useState(false);
    // const [ loading, setLoading ] = useState(false);


    


return (
    <div className="portfolio-container">
        <Transition visible={panelIsVisible} animation='fly left' duration={1500}  >
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
                            trigger={<button className='portfolio-button' href='#' ><Image src={`./media/apps/${item.image}`} fluid /></button>}
                            >
                            <Modal.Header>{item.title}</Modal.Header>
                            <Modal.Content >
                                    
                                        <Embed
                                            icon='right circle arrow'
                                            placeholder={item.image}
                                            // url={item.deployment}
                                            active='true'
                                             >
                                                <iframe id='website-frame' title='website' src={item.deployment} 
                                                 />
                                                
                                        </Embed>
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
                            <p>Github: <a href={item.github} rel='noreferrer' target="_blank" >{item.github}</a></p>
                        </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                        <Grid.Column>
                            <p>Deployment: <a href={item.deployment} rel='noreferrer' target="_blank" >{item.deployment}</a></p>
                        </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column className='portfolio-description' >
                        <p>{item.description}</p>
                    </Grid.Column>
                </Grid.Row>
                
            </Grid  >
        </Transition  >
    </div>
)
}

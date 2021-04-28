import './Portfolio.css'
import { Grid, Embed, Modal, Button, Image, Header } from 'semantic-ui-react';
import { useState } from 'react'

function Portfolio({item}) {
    const [ open, setOpen ] = useState(false);

return (
    <div className="portfolio-container">
        <Grid divided >
            <Grid.Row>
                <Grid.Column>
                    <h1>Title: {item.title}</h1>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <p>Readme: {item.description}</p>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={4} >
                <Grid.Column>
                    <p>Stack:</p>
                </Grid.Column>
                {item.stack.map((stackItem) => <Grid.Column><p>{stackItem}</p></Grid.Column>)}
            </Grid.Row>
            <Grid.Row>
                    <Grid.Column>
                        <p>Github: <a href={item.github} >{item.github}</a></p>
                    </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                    <Grid.Column>
                        <p>Deployment: <a href={item.deployment} >{item.deployment}</a></p>
                    </Grid.Column>
            </Grid.Row>
            <Grid.Row centered columns={1} >
                <Grid.Column className='image-column'>
                        <Modal closeIcon size='fullscreen'
                        onClose={() => setOpen(false)}
                        onOpen={() => setOpen(true)}
                        open={open}
                        trigger={<a href='#' ><Image src={item.image} size='large' /></a>}
                        >
                        <Modal.Header>Select a Photo</Modal.Header>
                        <Modal.Content image>
                            <Image size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' wrapped />
                            <Modal.Description>
                            <Header>Default Profile Image</Header>
                            <p>
                                We've found the following gravatar image associated with your e-mail
                                address.
                            </p>
                            <p>Is it okay to use this photo?</p>
                            </Modal.Description>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button color='black' onClick={() => setOpen(false)}>
                            Nope
                            </Button>
                            <Button
                            content="Yep, that's me"
                            labelPosition='right'
                            icon='checkmark'
                            onClick={() => setOpen(false)}
                            positive
                            />
                        </Modal.Actions>
                    </Modal>
                </Grid.Column>
            </Grid.Row>
        </Grid  >
    </div>
)
}

export default Portfolio;
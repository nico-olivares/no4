import { Grid, Embed } from 'semantic-ui-react';

function Portfolio({item}) {

return (
    <div className="portfolio-container">
        <Grid.Row>
            <h1>Title: {item.title}</h1>
        </Grid.Row>
        <Grid.Row>
            <p>Readme: {item.description}</p>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column>
                <p>Stack used:</p>
            </Grid.Column>
            {item.stack.map((stackItem) => <Grid.Column><p>{stackItem}</p></Grid.Column>)}
        </Grid.Row>
        <Grid.Row>
            <Grid.Column>
                <p>Github:</p>
            </Grid.Column>
            <Grid.Column>
                <p>{item.github}</p>
            </Grid.Column>
            
        </Grid.Row>
        <Grid.Row>
            <Grid.Column>
                <p>Deployment:</p>
            </Grid.Column>
            <Grid.Column>
                <p>{item.deployment}</p>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Embed className='embedFrame' icon='right circle arrow' placeholder="" url={item.deployment} />
        </Grid.Row>
    </div>
)
}

export default Portfolio;
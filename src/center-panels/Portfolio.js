import { Grid, Embed } from 'semantic-ui-react';

function Portfolio({item}) {

return (
    <div className="portfolio-container">
        <Grid.Row>
            <h1>{item.title}</h1>
        </Grid.Row>
        <Grid.Row>
            <p>{item.description}</p>
        </Grid.Row>
        <Grid.Row>
            {item.stack.map((stackItem) => <Grid.Column><p>{stackItem}</p></Grid.Column>)}
        </Grid.Row>
        <Grid.Row>
            <Grid.Column>
                <p>{item.github}</p>
            </Grid.Column>
            <Grid.Column>
                <p>{item.deployment}</p>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Embed icon='right circle arrow' placeholder="" url={item.url} />
        </Grid.Row>
    </div>
)
}

export default Portfolio;
function portfolioItemObject(title, description, stack, github, deployment, imageUrl) {
    this.title = title;
    this.description = description;
    this.stack = stack;
    this.github = github;
    this.deployment = deployment;
    this.image = './media/apps/' + imageUrl;
}

const portfolioItems = [
    new portfolioItemObject('Doomsday Preppers', 'A website about prepping', ['js', 'React', 'node', 'Express', 'webtoken', 'npm'], 'https://github.com/nico-olivares/pandemicprep2', 'https://panprep2.herokuapp.com/', 'doomsday.png')
]

function getPortfolioItem(name) {
    return portfolioItems.find((item) => item.title === name);
}



export default getPortfolioItem;
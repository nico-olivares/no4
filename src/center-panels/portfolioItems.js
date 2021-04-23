function portfolioItemObject(title, description, stack, github, deployment) {
    this.title = title;
    this.description = description;
    this.stack = stack;
    this.github = github;
    this.deployment = deployment;
}

const portfolioItems = [
    new portfolioItemObject('Doomsday Preppers', 'A website about prepping', ['js', 'React'], 'https://github.com/nico-olivares/pandemicprep2', 'https://panprep2.herokuapp.com/')
]

function getPortfolioItem(name) {
    return portfolioItems.find((item) => item.name === name);
}

export default getPortfolioItem;
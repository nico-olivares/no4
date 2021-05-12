

const portfolioItems = [
    {
        title: 'Doomsday Preppers', 
        description: `An eCommerce website tailored towards the ddoomsday prepper community. It has relevant doomsday news, and an array of preparation/readiness products.`, 
        stack: ['React', 'Bootstrap', 'JavaScript', 'Express', 'node', 'PostgreSQL', 'webtoken', 'npm'], 
        github: 'https://github.com/nico-olivares/pandemicprep2', 
        deployment: 'https://panprep2.herokuapp.com/', 
        image: 'doomsday.png'
    }, {
        title: `webkey`,
        description: `One key to rule them all. webkey is a master bookmark website where users can store their bookmarks and have them available anywhere independent of browser or computer.`,
        stack: ['React', 'Bootstrap', 'JavaScript', 'HTML', 'CSS', 'Express', 'node', 'PostgreSQL', 'webtoken', 'npm'],
        github: ``,
        deployment: `https://web-key.herokuapp.com`,
        image: `webkey.png`
    }, {
        title: `Hermes News`,
        description: `Hermes News is an implementation of the Currents News API. The API delivers news from all over the world. Hermes News presents the news in a concise and friendly way and provides tools to filter and tailor the delivery to your tastes and needs.`,
        stack: ['JavaScript', 'API', 'HTML', 'CSS'],
        github: ``,
        deployment: `https://news-olivares.netlify.app`,
        image: `news.png`
    }, {
        title: `Harvard Art`,
        description: `Harvard Art is an implementation of the Harvard Art API that grants access to their full digital catalog. Harvard Art allows you to search and filter the catalog to facilitate the catalog exploration and to help find what you are looking for.`,
        stack: ['JavaScript', 'API', 'HTML', 'CSS'],
        github: ``,
        deployment: `https://harvard-art-olivares.netlify.app`,
        image: `harvard-art.png`
    }, {
        title: `Arcade Central`,
        description: `Arcade Central is a digital arcade with two fun games to play. It contains a Mankala that can be played solo against the computer (be warned that the computer is pretty good at it). It can also be played in two player mode if there's two of you playing. The second game is the classic Minesweeper designed just like the original. Have fun!`,
        stack: ['JavaScript', 'HTML', 'CSS'],
        github: ``,
        deployment: `https://arcade-olivares.netlify.app`,
        image: `arcade.png`
    }, {
        title: `Calculator`,
        description: `A dual mode calculator. It can switch between regular calculator and an RPN calculator. As an RPN calculator it is a powerful tool.`,
        stack: ['JavaScript', 'HTML', 'CSS'],
        github: ``,
        deployment: `https://calculator-olivares.netlify.app`,
        image: `calculator.png`
    }, {
        title: `Retro Draw`,
        description: `A drwaing game that lets you color tiles and draw at will. The number of tiles can be changed so the drawing can have more details and be more precise.`,
        stack: ['JavaScript', 'HTML', 'CSS'],
        github: ``,
        deployment: `https://pixel-draw-olivares.netlify.app`,
        image: `pixel-draw.png`
    }, {
        title: `Matrix Rain`,
        description: `A Java app that I developed for my classroom. It was for a science experiment in which we tried to figure if attention improved or deteriorated with different kinds of music. The object of the game is to find as many of a given letter as possible. The letter can be selected as well as the number of total letters to be found (length of the game).`,
        stack: ['Java 13+'],
        github: ``,
        deployment: `./apps/MatrixRain.jar`,
        image: `matrix.png`
    }, {
        title: `Number Sense`,
        description: `A math app meant to help first and second graders with basic math facts.`,
        stack: ['Java 6+'],
        github: ``,
        deployment: `./apps/Number_sense_v20.jar`,
        image: `NumberSense.png`
    }, {
        title: `Add and Subtract`,
        description: `A math app meant to help first and second graders with additon and subtraction fluency. It scafolds addition and subtraction concepts, like parts of 10 and more.`,
        stack: ['Java 6+'],
        github: ``,
        deployment: `./apps/Number_sense_v20.jar`,
        image: ``
    }, {
        title: `Sight Words Center`,
        description: `A reading app that lets students test demselves against different level sight words lists. Students can select the list (they are in order), and they can select the length of time the word is in front of them. From fractions of a second to up to 3 seconds per word. One of the last lists is sight words sentences.`,
        stack: ['Java 6+'],
        github: ``,
        deployment: `./apps/Number_sense_v20.jar`,
        image: ``
    }
]

function getPortfolioItem(name) {
    return portfolioItems.find((item) => item.title === name);
}



export default getPortfolioItem;
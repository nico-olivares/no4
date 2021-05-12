

const skillsItems = [
    {
        title: 'Doomsday Preppers', 
        description: `An eCommerce website tailored towards the ddoomsday prepper community. It has relevant doomsday news, and an array of preparation/readiness products.`, 
        stack: ['React', 'Bootstrap', 'JavaScript', 'Express', 'node', 'PostgreSQL', 'webtoken', 'npm'], 
        github: 'https://github.com/nico-olivares/pandemicprep2', 
        deployment: 'https://panprep2.herokuapp.com/', 
        image: 'doomsday.png'
    }
]

function getSkillsItem(name) {
    return skillsItems.find((item) => item.title === name);
}



export default getSkillsItem;
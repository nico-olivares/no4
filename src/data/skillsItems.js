

const skillsItems = [
    {
        title: 'Hard Skills', 
        skillGroups: [
            {
                title: 'Programming - Proficiency: Extensive', 
                skills: [
                    'React.js', 'JavaScript', 'HTML', 'CSS', 'Express.js', 'Node.js', 'PostgreSQL', 
                    'JQuery', 'npm', 'git', 'GitHub', 'Postman', 'Bootstrap', 'Semantic UI', 'JSON Web Tokens', 'bcrypt'
            ]
            }, {
                title: 'Programming - Proficiency: Intermediate', 
                skills: [ 'Java', 'Svelte' ]
            }, {
                title: 'General Software',
                skills: ['Word', 'PowerPoint', 'Excel', 'Adobe Creative Cloud', 'mac ecosystem']
            }
        ]
    }, {
                title: 'Soft Skills',
                skillGroups: [
                    {
                        title: 'Soft Skills',
                        skills: [
                            'excellent communicator (teacher)', 'cordial and likable', 'problem solver', 'critical thinker', 'honest', 'fast learner', 'self motivated', 'curious', 'life long learner', 'polymath'
                        ]
                    }
                ]
    }
            
]

function getSkillsItem(name = '') {
    if (name === 'all items') {
        return skillsItems.map(item => item.title);
    }
    return skillsItems;
}



export default getSkillsItem;
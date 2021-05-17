

const skillsItems = [
    {
        title: 'Hard Skills', 
        skills: [
            {
                title: 'Programming - Proficiency: Extensive', 
                skills: [
                    'React.js', 'JavaScript', 'HTML', 'CSS', 'Express', 'Node.js', 'PostgreSQL', 'JQuery', 'npm', 'git', 'github', 'Java'
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
                skills: [
                    {
                        title: 'Soft Skills',
                        skills: [
                            'excellent communicator (teacher)', 'cordial and likable', 'problem solver', 'critical thinker', 'honest', 'fast learner', 'self motivated', 'curious', 'life long learner', 'polymath'
                        ]
                    }
                ]
            }
            
]

function getSkillsItem(name) {
    if (name === 'all items') {
        return skillsItems.map(item => item.title);
    }
    return skillsItems.find((item) => item.title === name);
}



export default getSkillsItem;
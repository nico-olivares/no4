

const skillsItems = [
    {
        title: 'Hard Skills', 
        skillGroups: [
            {
                title: 'Programming - Proficiency: Extensive', 
                skills: [
                    {
                        skill: 'React.js',
                        url: 'https://en.wikipedia.org/wiki/React_(JavaScript_library)'
                    }, {
                        skill: 'JavaScript', 
                        url: 'https://en.wikipedia.org/wiki/JavaScript'
                    }, {
                        skill: 'HTML',
                        url: 'https://en.wikipedia.org/wiki/HTML'
                    }, { 
                        skill: 'CSS',
                        url: 'https://en.wikipedia.org/wiki/CSS'
                    }, { 
                        skill: 'Express.js',
                        url: 'https://en.wikipedia.org/wiki/Express.js'
                    }, { 
                        skill: 'Node.js',
                        url: 'https://en.wikipedia.org/wiki/Node.js'
                    }, { 
                        skill: 'PostgreSQL',
                        url: 'https://en.wikipedia.org/wiki/PostgreSQL'
                    }, { 
                        skill: 'JQuery',
                        url: 'https://en.wikipedia.org/wiki/JQuery'
                    }, { 
                        skill: 'npm',
                        url: 'https://en.wikipedia.org/wiki/Npm_(software)'
                    }, { 
                        skill: 'Git',
                        url: 'https://en.wikipedia.org/wiki/Git'
                    }, { 
                        skill: 'GitHub',
                        url: 'https://en.wikipedia.org/wiki/GitHub'
                    }, { 
                        skill: 'Postman',
                        url: 'https://www.postman.com/api-platform'
                    }, { 
                        skill: 'Bootstrap',
                        url: 'https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)'
                    }, { 
                        skill: 'Semantic UI',
                        url: 'https://react.semantic-ui.com/'
                    }, { 
                        skill: 'JSON Web Tokens',
                        url: 'https://en.wikipedia.org/wiki/JSON_Web_Token'
                    }, { 
                        skill: 'bcrypt',
                        url: 'https://en.wikipedia.org/wiki/Bcrypt' }
            ]
            }, {
                title: 'Programming - Proficiency: Intermediate', 
                skills: [ {
                    skill: 'Java',
                    url: 'https://en.wikipedia.org/wiki/Java'
                }, { 
                    skill: 'Svelte',
                    url: 'https://en.wikipedia.org/wiki/Svelte'
                }]
            }, {
                title: 'General Software',
                skills: [{
                    skill: 'MS Word', 
                    url: 'https://en.wikipedia.org/wiki/Microsoft_Word'
                }, { 
                    skill: 'PowerPoint', 
                    url: 'https://en.wikipedia.org/wiki/Microsoft_PowerPoint'
                }, { 
                    skill: 'Excel', 
                    url: 'https://en.wikipedia.org/wiki/Microsoft_Excel'
                }, { 
                    skill: 'Adobe Creative Cloud', 
                    url: 'https://en.wikipedia.org/wiki/Adobe_Creative_Cloud'
                }, { 
                    skill: 'mac ecosystem',
                    url: 'https://en.wikipedia.org/wiki/MacOS'
                }]
            }
        ]
    }, {
                title: 'Soft Skills',
                skillGroups: [
                    {
                        title: 'Soft Skills',
                        skills: [{
                            skill: 'excellent communicator (teacher)', 
                            url: null
                }, { 
                            
                            skill: 'cordial and likable', 
                            url: null
                }, { 
                            
                            skill: 'problem solver', 
                            url: null
                }, { 
                            
                            skill: 'critical thinker', 
                            url: null
                }, { 
                            
                            skill: 'honest', 
                            url: null
                }, { 
                            
                            skill: 'quick learner', 
                            url: null
                }, { 
                            
                            skill: 'self motivated', 
                            url: null
                }, { 
                            
                            skill: 'curious', 
                            url: null
                }, { 
                            
                            skill: 'life long learner', 
                            url: null
                }, { 
                            
                            skill: 'polymath',
                            url: 'https://en.wikipedia.org/wiki/Polymath'
                        }

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
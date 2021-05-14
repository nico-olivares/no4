

const experienceItems = [
    {
        title: 'Programming', 
        children: [
            {
                title: 'Pascal',
                years: 'circa 1994',
                employer: 'Adolfo Ibanez Univeristy - Student',
                description: `During my business administration studies I took a CS class based on Pascal. As part of the course we developed a basic bank application using Pascal.`
             }, {
                 title: 'Objective-C',
                 years: '2006-2012',
                 employer: 'slef',
                 description: `When my school got mac computers for teachers and students I taught myself Objective-C and coded a few apps for my classroom using Xcode. Some of the apps I later rewrote in Java when my school moved to PCs.`
             }, {
                 title: 'Java',
                 years: '2010-2018',
                 employer: 'self',
                 description: `When my school moved back to PCs I started learning Java in an effort to be able to keep developing for my classroom. Java was perfect for my needs as it was multi-platform and we still had some macs around. At first I rewrote some of the same apps I had first coded in Objective-C, but later I wrote some new apps as well.`
              }, {
                  title: 'JavaScript Full Stack',
                  years: '2020 to present',
                  employer: 'Fullstack Academy student and self',
                  description: `From April to October of 2020 I attended a Fullstack bootcamp by UNF - Fullstack Academy. There I learned the JavaScript full stack including HTML, CSS, JavaScript, Express, PostgreSQL, React, node, git, github, and more. The camp was project driven. Each week (sometimes longer periods) we would code a project. The last two projects were group efforts and involved git control and team work. I got to be the leader of the second group for the Capstone project, the largest project of the camp. After the camp was over I have kept coding and learning to keep my skills sharp and improve as much as I can.`
              }
        ]
    }, {
        title: 'Educating',
        children: [
            {
                title: 'Teacher',
                years: '2004 - present',
                employer: 'Duval County Public Schools - Crown Point Elementary',
                description: `During my time as a teacher I have taught K, 1, 2, 3, and 5th grades. I have taught Reading, Writing, Math, and Science, as well as English as a Second Language. I have lead my grade level, and participated in the school leadership. I have been a math mentor and model, technology resource for teachers, and I have put together the school's yearbook for the past 8 years.`
            }
        ]
    }
]

function getExperienceItem(name) {
    return experienceItems.find((item) => item.title === name);
}



export default getExperienceItem;
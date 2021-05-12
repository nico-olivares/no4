

const experienceItems = [
    {
        title: 'Programming', 
        children: [
            {
                title: 'Pascal',
                years: 'circa 1994',
                employer: 'Adolfo Ibanez Univeristy',
                description: `During my business administration studies I took a CS class based on Pascal. As part of the course we developed a basic bank application using Pascal.`
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
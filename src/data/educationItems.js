

const educationItems = [
    {
        title: 'Full Stack Developer', 
        institution: `UNF - Fullstack Academy`, 
        years: '4-2020 / 10-2020', 
        description: `
        This was a six-month full stack web developer boot camp. It was 100% hands-on and project based. 
        Each week we were introduced new concepts and tasked to complete a project that utilized those concepts and previous ones as well. 
        At the very end there were two massive team projects. For those we had to use everything we had learned as well as git control and teamwork. 
        I was voted project lead by my team for the last and largest project.
        `
    }, {
        title: 'Masters in Education',
        institution: 'Jacksonville University',
        years: '2002-2004',
        description: `
        In 2002 I attended a Masters in Arts of Education at Jacksonville University. 
        At the time I was volunteering at a school in Jacksonville and wanted to transition into education. 
        It was that Masters that turned me into the teacher I am today.
        `
    }, {
        title: 'MBA',
        institution: 'Universidad Adolfo Ibañez',
        years: '1993-1997',
        description: `
        I attended a five-year business administration program. I studied the ins and outs of business administration ranging from marketing to finance, 
        and accounting. It led me to work in finance for the next several years.
        `
    } , {
        title: 'High School Diploma',
        institution: 'Escuela Naval "Arturo Prat"',
        years: '1991-1992',
        description: `
        I attended the Chilean Officer’s Naval Academy for two years. These were the most important two years in my formation as a person. 
        In the navy, I learned discipline of course, self -discipline, honor, work ethic, and to give my all to the tasks I set out to complete, 
        and more. Those two years greatly impacted the man I am today.
        `
    }
]

function getEducationItem(name) {
    if (name === 'all items') {
        return educationItems.map(item => item.title);
    }
    return educationItems;
}



export default getEducationItem;
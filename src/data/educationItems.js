

const educationItems = [
    {
        title: 'Full Stack Developer', 
        institution: `UNF - Fullstack Academy`, 
        years: '4-2020 / 10-2020', 
        description: `This was a six months full stack web developer boot camp. It was 100% hands on and project based. Each week we were introduced new concepts and tasked to complete a project that utilized those concepts and previous ones as well. At the very end there were two massive team projects. For those we had to use everything we had learned as well as git control and team work. I was the leader of the last and largest project.`
    }, {
        title: 'Masters in Education',
        institution: 'Jacksonville University',
        years: '2002-2004',
        description: `In 2002 I attended a Masters in Arts of Education at Jacksonville University. At the time I was volunteering at a school in Jacksonville and wanted to transition into education. It was that Masters that turned me into the teacher I am today.`
    }, {
        title: 'MBA',
        institution: 'Universidad Adolfo Ibañez',
        years: '1993-1997',
        description: `I attended a five year business administration program. In Chile that program is not considered an MBA, but because it's more than a 4 year degree here, the degree accreditation firm that transcribed my transcripts from Chile to U.S. equivalent stated that my degree here would equate to an MBA. Either way I was taught al the ins and outs of business administration ranging from marketing, to finance, and accounting. It lead me to work in finance for the next several years.`
    } , {
        title: 'High School Diploma',
        institution: 'Escuela Naval "Arturo Prat"',
        years: '1991-1992',
        description: `I attended the Chilean officers naval academy for two years. These were the most important two years in my formation as a person. At the navy I learned discipline of course, self discipline, honor, to give my all to the tasks I set out to complete, and more. Who I am today is greatly impacted by those two years.`
    }
]

function getEducationItem(name) {
    if (name === 'all items') {
        return educationItems.map(item => item.title);
    }
    return educationItems;
}



export default getEducationItem;
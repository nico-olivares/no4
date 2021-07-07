

const experienceItems = [
    {
        title: 'Programming', 
        children: [
            {
                title: 'JavaScript Full Stack',
                years: '2020 to present',
                institution: 'Fullstack Academy student and self',
                description: `
                From April to October of 2020, I attended a Fullstack bootcamp by UNF - Fullstack Academy. 
                There I learned the JavaScript full stack including HTML, CSS, JavaScript, Express, PostgreSQL, React, node, git, github, and more. 
                The camp was project driven. Each week (sometimes longer periods) we would code a project. 
                The last two projects were group efforts and involved git control and teamwork. 
                For the final group project, my peers asked me to be project leader. Our Capstone project was the largest project of the camp. 
                After the camp was over, I have continued to code and learn in order to keep my skills sharp and improve as much as possible.
                `
            },
            {
                title: 'Java',
                years: '2010-2018',
                institution: 'self',
                description: `When my school moved back to PCs I started learning Java in an effort to be able to keep developing for my classroom. Java was perfect for my needs as it was multi-platform and we still had some macs around. At first I rewrote some of the same apps I had first coded in Objective-C, but later I wrote some new apps as well.`
             }, 
             {
                title: 'Objective-C',
                years: '2006-2012',
                institution: 'self',
                description: `When my school got mac computers for teachers and students I taught myself Objective-C and coded a few apps for my classroom using Xcode. Some of the apps I later rewrote in Java when my school moved to PCs.`
            }, 
            {
                title: 'Pascal',
                years: 'circa 1994',
                institution: 'Universidad Adolfo Ibañez - Student',
                description: `During my business administration studies I took a CS class based on Pascal. As part of the course we developed a basic bank application using Pascal.`
             } 
        ]
    }, {
        title: 'Educating',
        children: [
            {
                title: 'Teacher',
                years: '2004 - present',
                institution: 'Duval County Public Schools - Crown Point Elementary',
                description: `
                During my time as a teacher, I have taught K, 1, 2, 3, and 5th grades. 
                I have taught Reading, Writing, Math, and Science, as well as English as a Second Language. 
                I have been lead teacher for various grade levels, and I am currently on the school leadership team. 
                I have been a math mentor and model, technology resource for teachers, and in charge of the the school yearbook for the past 8 years.
                `
            }
        ]
    }, {
        title: 'Finance',
        children: [
            {
                title: 'Junior Controller',
                years: '2000 - 2002',
                institution: `Nestle Chile`,
                description: `
                As a junior controller I translated complex financial data to include profit and sales reports so that it 
                was easily understood by customers. I interpreted and organized large sets of data so that users could make 
                financial decisions with accurate and timely information. I also provided cost analysis to determine the profitability of new products. 
                `
            }, {
                title: 'Junior Financial Risk Assessment',
                years: '1997-2000',
                institution: 'BBVA Chile',
                description: `
                As a junior financial risk analyst, I oversaw the approval of loans to small to medium size companies. 
                By 1999, I had autonomy to approve loans up to $600,000. I could analyze higher amounts and make 
                recommendations to a committee for approval. 
                `
            }
        ]
    }, {
        title: 'Military',
        children: [
            {
                title: 'Navy Cadet',
                years: '1991-1992',
                institution: 'Escuela Naval "Arturo Prat"',
                description: `
                As a navy cadet, I trained for two years to become a Navy officer at the Chilean Navy. 
                At that time the coveted and elite officer's training was a 5-year program that begun with the last 
                two years of high school and continued for three more. I was accepted into the program and completed 
                my last two years of high school there. I learned discipline, commitment, camaraderie, and much more. 
                A large portion of who I am today can be traced back to these two years of my life.
                `
            }
        ]
    }
]

function getExperienceItem(name) {
    if (name === 'all items') {
        return experienceItems.map(item => item.title);
    }
    return experienceItems.find((item) => item.title === name);
}



export default getExperienceItem;
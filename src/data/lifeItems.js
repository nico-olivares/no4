

const lifeItems = [
    {
        title: 'Biography', 
        description: `
        My name is Nicolas Olivares. I was born and raised in Chile, living most of my life in the capital of Santiago. I attended the Chilean Officer's Naval Academy, completed an MBA program at Valparaiso University and worked in finance for a few years. In November of 2001, I met my wife-to-be in Lima, Peru after a string of uncanny coincidences and circumstances. A few months later, I moved to the U.S. permanently, and we got married in 2003.  Our son was born in 2006 and our daughter in 2011. We are now going on 18 years strong.
        
        When I came to the U.S. I switched careers and became a teacher. I wanted to do something good for the world and teaching was one of my passions. I have been a teacher for as long as I've been married. While teaching, I taught myself coding for fun and made small apps for my classroom. Now I'm turning that passion into my career! 
        `,
        images: ['./media/20080403_IMG_0307.JPG', './media/20080403_IMG_0307.JPG', './media/20080403_IMG_0307.JPG' ]
    }, {
        title: 'Family', 
        description: `
        I have been married to my wife Lee since 2003. We have two wonderful children, Matias who is now 15 and Lucia who is 10. My family is a great part of my life. We are a grounded and happy family who enjoy spending time together. My wife and I strongly agree that happy families are made by the little moments and honesty rather than through material conquest.
        `,
        images: ['./media/20080403_IMG_0307.JPG', './media/20080403_IMG_0307.JPG', './media/20080403_IMG_0307.JPG' ]
    }, {
        title: 'Interests', 
        description: `
        Other than my family and coding, my two great loves are Kitesurfing and Karate. Kitesurfing is my number one passion in life after my family. I love the feeling of speeding through the water and jumping higher than humanly possible. It's a great feeling and if there’s wind, I’m at the beach, ready to go!  
    
        I have been practicing one form or another of martial arts for most of my life. For the last seven years I've been practicing Shorin-Ryu Karate-Do at the Chintokan Dojo in Jacksonville. The clip is from my beginnings. Now I hold a brown belt. Karate is both physically and intellectually demanding which is what appeals to me.
        `,
        images: ['./media/20080403_IMG_0307.JPG', './media/20080403_IMG_0307.JPG', './media/20080403_IMG_0307.JPG' ]
    }
]

function getLifeItem(name) {
    if (name === 'all items') {
        return lifeItems.map(item => item.title);
    }
    return lifeItems.find((item) => item.title === name);
}



export default getLifeItem;
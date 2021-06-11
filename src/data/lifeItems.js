

const lifeItems = [
    {
        title: 'Biography', 
        description: `My name is Nicolas Olivares. I was born and raised in Chile where among many other things I attended the Chilean Officer's Naval Academy, I completed an MBA program, and then worked in finance for a few years. In mid 2001 I met my wife-to-be, although at the time we were just friends. We met online in a chat room. 
        She wanted to practice her Spanish and we started talking. After a few conversations and emails not much came of it, except that after 9/11 I emailed her out of concern for her family and friends. She told me that all hers were fine and we connected again. By chance we found that both of us were traveling to Lima, Peru on the same day. 
        She was going on a two week vacation, while I was attended a wedding and was going to be there for a long weekend. I invited her to attend the wedding with me and the rest is history. A few months later I moved to the U.S. permanently and `,
        images: ['./media/20080403_IMG_0307.JPG', './media/20080403_IMG_0307.JPG', './media/20080403_IMG_0307.JPG' ]
    }, {
        title: 'Family', 
        description: `I have been married to my wife Lee for sixteen years. We have two wonderful children. Matias who is now 13 and Lucia who is 9. My family is of course a great part of my life. We are a simple family and my wife and I agree on the pursuit of happiness through a simple and honest life rather than through material conquest.`,
        images: ['./media/20080403_IMG_0307.JPG', './media/20080403_IMG_0307.JPG', './media/20080403_IMG_0307.JPG' ]
    }, {
        title: 'Interests', 
        description: `Other than my family and coding, my two great loves are Kitesurfing and Karate. Kitesurfing is my number one passion in life after my family. I'm not a great kitesurfer, but I'm okay and I love it. The feeling of speeding through the water, of jumping higher than humanly possible. It's a great feeling, but hard to explain. It's a bit like trying to explain apple pie to someone that has never had one. I have been practicing one form or another of martial arts for most of my life. For the last seven years I've been practicing Shorin-Ryu Karate-Do at the Chintokan Dojo in Jacksonville. The clip is from my beginnings. I hold now a brown belt. Karate is both physically and mentally demanding which is what appeals to me.`,
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
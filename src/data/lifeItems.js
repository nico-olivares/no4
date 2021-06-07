

const lifeItems = [
    {
        title: 'Biography', 
        description: `My name is Nicolas Olivares. I was born and raised in Chile where among many other things I attended the Chilean Officer's Naval Academy, I completed an MBA program, and then worked in finance for a few years. In mid 2001 I met my wife-to-be, although at the time we were just friends. We met online in a chat room. 
        She wanted to practice her Spanish and we started talking. After a few conversations and emails not much came of it, except that after 9/11 I emailed her out of concern for her family and friends. She told me that all hers were fine and we connected again. By chance we found that both of us were traveling to Lima, Peru on the same day. 
        She was going on a two week vacation, while I was attended a wedding and was going to be there for a long weekend. I invited her to attend the wedding with me and the rest is history. A few months later I moved to the U.S. permanently and `,
        image1: './media/20080403_IMG_0307.JPG',
        image2: './media/20080403_IMG_0307.JPG',
        image3: './media/20080403_IMG_0307.JPG'
    }, {
        title: 'Family', 
        description: `Something about my family`,
        image1: './media/20080403_IMG_0307.JPG',
        image2: './media/20080403_IMG_0307.JPG',
        image3: './media/20080403_IMG_0307.JPG'
    }, {
        title: 'Interests', 
        description: `Something about my interests.`,
        image1: './media/20080403_IMG_0307.JPG',
        image2: './media/20080403_IMG_0307.JPG',
        image3: './media/20080403_IMG_0307.JPG'
    }
]

function getLifeItem(name) {
    if (name === 'all items') {
        return lifeItems.map(item => item.title);
    }
    return lifeItems.find((item) => item.title === name);
}



export default getLifeItem;
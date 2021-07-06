const splashPhotos = [
    {
        address: './media/splash/7 tazas1.jpg',
        alt: 'Las Siete Tazas in Chile, photo 1'
    },
    {
        address: './media/splash/7 tazas2.jpg',
        alt: 'Las Siete Tazas in Chile, photo 2'
    },
    {
        address: './media/splash/7 tazas3.jpg',
        alt: 'Las Siete Tazas in Chile, photo 3'
    },
    {
        address: './media/splash/beach1.jpg',
        alt: 'Cachagua, Chile'
    },
    {
        address: './media/splash/beach2.jpg',
        alt: 'Zapallar, Chile'
    },
    {
        address: './media/splash/beach3.jpg',
        alt: 'Crescent Beach, Florida'
    },
    {
        address: './media/splash/Palatka.jpg',
        alt: 'Saint Johns River, Palatka, Florida'
    },
    {
        address: './media/splash/stgo.jpg',
        alt: 'Cerro Santa Lucia, Santiago, Chile'
    },
    {
        address: './media/splash/vina1.jpg',
        alt: 'Valparaiso, Chile, photo 1'
    },
    {
        address: './media/splash/vina2.jpg',
        alt: 'Valparaiso, Chile, photo 2'
    },
    {
        address: './media/splash/vina3.jpg',
        alt: 'Vina del Mar, Chile'
    }
];


const familyPhotos = [
    {
        address: './media/personal/family/family.jpg',
        alt: 'My family'
    },
    {
        address: './media/personal/family/babi.jpg',
        alt: 'My dear mom with my children'
    },
    {
        address: './media/personal/family/grandparents.jpg',
        alt: 'My family with the grandparents'
    },
    {
        address: './media/personal/family/kids.jpg',
        alt: 'My children, photo 1'
    },
    {
        address: './media/personal/family/kids2.jpg',
        alt: 'My children, photo 2'
    }
];

const hobbiesPhotos = [
    {
        address: './media/personal/hobbies/Kitesurfing.gif',
        alt: 'Kitesurfing at Jacksonville Beach, Florida'
    }, {
        address: './media/personal/hobbies/Kitesurfing2.gif',
        alt: 'Kitesurfing at Huguenot Park, Florida'
    },
    {
        address: './media/personal/hobbies/Karate.gif',
        alt: 'First karate demo'
    },
    {
        address: './media/personal/hobbies/BikeJumpV2.gif',
        alt: 'Mountain biking at Graham Swamp Trail, Beverly Beach, Florida'
    }
    
];

const biographyPhotos = [
    {
        address: './media/personal/biography/01kid.jpg',
        alt: 'Nicolas at age 5 in Kindergarten'
    },
    {
        address: './media/personal/biography/02young.jpg',
        alt: 'Nicolas in his teens'
    },
    {
        address: './media/personal/biography/03cadete.jpg',
        alt: 'Nicolas at 17 about to enter the Naval Academy'
    },
    {
        address: './media/personal/biography/04cadete.jpg',
        alt: 'Nicolas at 18 marching in the navy'
    },
    {
        address: './media/personal/biography/05cadete.jpg',
        alt: 'Nicolas and grandmother leaving the Naval Academy grounds'
    }
];




/**
 * 
 * @returns Array An array with 2 objects. Each object represents a random photo.
 */
function getSplashPhotos() {
    const size = splashPhotos.length;
    let first = Math.floor(Math.random() * size);
    let second = first;

    while (first === second) {
        second = Math.floor(Math.random() * size);
    }
    return [ splashPhotos[first], splashPhotos[second]]
}

/**
 * 
 * @returns Array An array of objects representing photos.
 */
function getFamilyPhotos() {
    return familyPhotos;
}

/**
 * 
 * @returns Array of objects representing hobbies gifs
 */
function getHobbiesPhotos() {
    return hobbiesPhotos;
}

function getBiographyPhotos() {
    return biographyPhotos;
}

export {getSplashPhotos, getFamilyPhotos, getHobbiesPhotos, getBiographyPhotos}
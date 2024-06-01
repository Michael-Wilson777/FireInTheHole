import carolinaReaper from '../assets/peppers/carolinareeper.png';
import cayenne from '../assets/peppers/cayenne.png';
import charlestonHot from '../assets/peppers/charlestonhot.png';
import cherryBomb from '../assets/peppers/cherrybomb.png';
import chipotle from '../assets/peppers/chipotle.png';
import devilsTongue from '../assets/peppers/devilstongue.png';
import dragonsBreathe from '../assets/peppers/dragonsbreath.png';
import ghostPepper from '../assets/peppers/ghostpepper.png';
import hatch from '../assets/peppers/hatchchile.png';
import jalapeno from '../assets/peppers/jalapeno.png';
import manzano from '../assets/peppers/manzano.png';
import nagaViper from '../assets/peppers/nagaviper.png';
import pepperX from '../assets/peppers/pepperx.png';
import poblano from '../assets/peppers/poblano.png';
import scotchBonnet from '../assets/peppers/scotchbonnet.png';
import serrano from '../assets/peppers/serrano.png';
import spanishNaga from '../assets/peppers/spanishnaga.png';
import superChile from '../assets/peppers/superchile.png';
import tabascoPepper from '../assets/peppers/tabascopepper.png';
import whiteBullet from '../assets/peppers/whitebullethabanero.png';
import habanero from '../assets/peppers/habanero.png';


export const INVENTORY = [
    {
        id: 0,
        name: 'Pepper X',
        img: pepperX,
        featured: false,
        Scoville: 3180000,
        seeds: true,
        powder: false,
        dried: true,
        description:
            `The world's hottest pepper, delivering an unmatched fiery intensity that will elevate your culinary adventures to scorching new heights!`
    },
    {
        id: 1,
        name: 'Carolina Reaper',
        img: carolinaReaper,
        featured: false,
        Scoville: 2200000,
        seeds: true,
        powder: false,
        dried: true,
        description:
            'World-renowned record-breaking chili, packing an intense heat and fruity flavor that will ignite your taste buds like never before!'
    },
    {
        id: 2,
        name: 'Ghost Pepper',
        img: ghostPepper,
        featured: false,
        Scoville: 1041427,
        seeds: true,
        powder: false,
        dried: true,
        description:
            'Legendary chili known for its intense, lingering heat and bold flavor that will challenge even the most daring spice enthusiasts!'
    },
    {
        id: 3,
        name: 'Habanero',
        img: habanero,
        featured: false,
        Scoville: 350000,
        seeds: true,
        powder: true,
        dried: true,
        description:
            'vibrant chili pepper that delivers a perfect balance of fiery heat and fruity sweetness to spice up your favorite dishes!'
    },
    {
        id: 4,
        name: 'Scotch Bonnet',
        img: scotchBonnet,
        featured: false,
        Scoville: 350000,
        seeds: true,
        powder: false,
        dried: true,
        description: 
            'Caribbean favorite chili, offering a fiery kick paired with a unique, fruity flavor that adds a tropical twist to your culinary creations!'
    },
    {
        id: 5,
        name: 'Jalapeno',
        img: jalapeno,
        featured: false,
        Scoville: 8000,
        seeds: true,
        powder: true,
        dried: true,
        description:
            'Versatile chili pepper known for its moderate heat and fresh, crisp flavor that enhances any dish with the perfect touch of spice!'
    },
    {
        id: 6,
        name: 'Chipotle',
        img: chipotle,
        featured: false,
        Scoville: 8000,
        seeds: true,
        powder: true,
        dried: true,
        description:
            `Smoky, dried jalapeño that infuses your dishes with a rich, deep flavor and a mild to moderate heat for a truly unique taste experience!`
    },
    {
        id: 7,
        name: `Dragon's Breath`,
        img: dragonsBreathe,
        featured: false,
        Scoville: 2480000,
        seeds: true,
        powder: false,
        dried: false,
        description:
            `The ultra-hot chili pepper that delivers an unprecedented level of heat and a bold flavor, perfect for those who crave an extreme spice challenge!`
    },
    {
        id: 8,
        name: 'Spanish Naga',
        img: spanishNaga,
        featured: false,
        Scoville: 1200000,
        seeds: true,
        powder: false,
        dried: false,
        description:
            `Fiery chili pepper renowned for its intense heat and distinctive flavor, guaranteed to add a powerful kick to your culinary creations!`
    },
    {
        id: 9,
        name: 'Cayenne',
        img: cayenne,
        featured: false,
        Scoville: 50000,
        seeds: true,
        powder: true,
        dried: true,
        description:
                `The classic chili pepper prized for its vibrant red hue, moderate heat, and versatile flavor, ideal for adding a spicy kick to any dish with a touch of zest!`
    },
    {
        id: 10,
        name: 'Super Chile',
        img: superChile,
        featured: false,
        Scoville: 50000,
        seeds: true,
        powder: false,
        dried: false,
        description:
            `Fiery powerhouse pepper renowned for its scorching heat and bold flavor, sure to electrify your taste buds and elevate any dish to new levels of spiciness!`
    },
    {
        id: 11,
        name: 'Serrano',
        img: serrano,
        featured: false,
        Scoville: 23000,
        seeds: true,
        powder: true,
        dried: true,
        description:
            `The zesty chili with a kick, delivering a vibrant flavor and moderate heat that adds a spicy flair to your favorite dishes, perfect for salsa, sauces, and more!`
    },
    {
        id: 12,
        name: `Devil's Tongue`,
        img: devilsTongue,
        featured: false,
        Scoville: 325000,
        seeds: true,
        powder: false,
        dried: false,
        description:
            `The fearsome chili pepper that boasts a fiery heat and a fruity sweetness, guaranteed to tantalize your taste buds and add a devilish kick to your culinary creations!`
    },
    {
        id: 13,
        name: 'Tabasco Pepper',
        img: tabascoPepper,
        featured: true,
        Scoville: 50000,
        seeds: true,
        powder: false,
        dried: true,
        description:
            `The iconic chili renowned for its tangy flavor and moderate heat, perfect for adding a zesty kick to sauces, marinades, and dishes, delivering a taste of Louisiana's culinary heritage!`
    },
    {
        id: 14,
        name: 'Charelston Hot',
        img: charlestonHot,
        featured: false,
        Scoville: 100000,
        seeds: true,
        powder: false,
        dried: false,
        description:
        `A Southern gem with a perfect balance of heat and flavor, adding a touch of Lowcountry spice to your dishes for a taste of true Southern hospitality!`
    },
    {
        id: 15,
        name: 'Naga Viper',
        img: nagaViper,
        featured: false,
        Scoville: 1382118,
        seeds: true,
        powder: false,
        dried: false,
        description:
            `A fiery fusion of heat and flavor, boasting a scorching intensity that will awaken your senses and elevate your culinary adventures to daring new heights!`
    },
    {
        id: 16,
        name: 'White Bullet Habanero',
        img: whiteBullet,
        featured: false,
        Scoville: 400000,
        seeds: true,
        powder: false,
        dried: false,
        description:
            `A spicy sensation with a crisp, clean heat and a hint of fruity sweetness, perfect for adding a bold kick to your favorite dishes with a touch of elegance!`
    },
    {
        id: 17,
        name: 'Poblano',
        img: poblano,
        featured: false,
        Scoville: 2000,
        seeds: true,
        powder: false,
        dried: true,
        description:
            `The mild yet flavorful chili prized for its rich, earthy taste and versatility, perfect for adding a subtle kick to your dishes and enhancing their depth with a touch of Mexican flair!`
    },
    {
        id: 18,
        name: 'Manzano',
        img: manzano,
        featured: false,
        Scoville: 30000,
        seeds: true,
        powder: false,
        dried: true,
        description:
            `A unique chili with a crisp, crunchy texture and a sweet, tangy flavor profile, perfect for adding a delightful twist to your dishes and infusing them with a refreshing kick!`
    },
    {
        id: 19,
        name: 'Cherry Bomb',
        img: cherryBomb,
        featured: false,
        Scoville: 5000,
        seeds: true,
        powder: false,
        dried: true,
        description:
            `The vibrant red chili bursting with flavor and a mild, sweet heat, perfect for adding a pop of color and a hint of spice to your culinary creations, making every dish a delicious explosion of taste!`
    },
    {
        id: 20,
        name: 'Hatch Chile',
        img: hatch,
        featured: false,
        Scoville: 8000,
        seeds: true,
        powder: true,
        dried: true,
        description:
            `The beloved Southwestern chili prized for its robust flavor and versatile heat, perfect for adding a touch of New Mexican charm to your dishes, whether roasted, stuffed, or blended into sauces!`
    }
];
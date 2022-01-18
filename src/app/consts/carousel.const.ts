import { ICarousel } from 'src/app/models/ICarousel.metadata';

// Constant of the items to show in carousel
export const CAROUSEL_ITEMS: ICarousel[] = [
    {
        id: 1,
        title: {
            first: 'IMAGEN',
            second: 'UNO' 
        },
        subtitle: 'lorem ipsum',
        link: '/',
        image: 'assets/img/1.jpg'
    },
    {
        id: 2,
        title: {
            first: 'IMAGEN',
            second: 'DOS' 
        },
        subtitle: 'lorem ipsum',
        link: '/',
        image: 'assets/img/2.jpg'
    },
    {
        id: 3,
        title: {
            first: 'IMAGEN',
            second: 'TRES' 
        },
        subtitle: 'lorem ipsum',
        link: '/',
        image: 'assets/img/3.jpg'
    }
];
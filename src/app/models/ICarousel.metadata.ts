// Interface of the content that an item in carousel has
export interface ICarousel {
    id: number;
    title?: {
        first: string;
        second: string;
    };
    subtitle?: string;
    link?: string;
    image: string;
    marginLeft?: number;
}
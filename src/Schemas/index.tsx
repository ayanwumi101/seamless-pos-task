export interface HeroComponentProps {
    image: string,
    heroText: string,
    description: string,
}

export interface ProductCardProps {
    image: string,
    title: string,
    price: number,
    id?: number,
    description: string,
    category: string,
}


export interface ButtonProps {
    bg: string;
    color: string;
    text: string;
    width: string;
}
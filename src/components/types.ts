// types.ts
export interface NavItem {
    label: string;
    href: string;
}

export interface HeroSectionProps {
    title: string;
    subtitle: string;
    buttonText: string;
}

export interface AmenityItem {
    icon: React.ReactNode;
    label: string;
}

export interface PropertyFeature {
    title: string;
    description: string;
    image: string;
    amenities: AmenityItem[];
}

export interface NewsItem {
    title: string;
    link: string;
    description: string;
}
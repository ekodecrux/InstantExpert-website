export type RoutePath = '/' | '/about' | '/products' | '/services' | '/contact';

export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  overview: string;
  image: string;
  imageAlt: string;
  contactInterestValue: string;
  deploymentOptions: string[];
  keyModules: {
    title: string;
    detail: string;
  }[];
  businessOutcomes: string[];
}

export interface ServiceItem {
  number: string;
  title: string;
  category: 'Enterprise Platforms' | 'Engineering & Advisory' | 'AI & Intelligent Solutions';
  description: string;
  deliverables: string;
  contactInterestValue: string;
}

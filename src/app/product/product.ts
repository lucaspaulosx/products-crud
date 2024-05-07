export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  cateory: string;
  image: string;
  rating: RatingProps;
}

interface RatingProps {
  rate: number;
  count: number;
}

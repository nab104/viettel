export type ApiUser = {
  id: string;
  name: string;
  email: string;
  role: string;
  createdAt?: string;
};

export type ApiCategory = { _id: string; name: string };

export type ApiProduct = {
  _id: string;
  name: string;
  price: number;
  images: string[];
  description: string;
  category: ApiCategory | string;
  stock: number;
};

export type ApiCart = {
  _id: string;
  user: string;
  items: { product: ApiProduct; quantity: number }[];
  updatedAt?: string;
};

export type ApiOrder = {
  _id: string;
  user: string;
  items: {
    _id: string;
    product?: ApiProduct;
    name: string;
    price: number;
    image: string;
    quantity: number;
  }[];
  totalPrice: number;
  status: string;
  createdAt: string;
};

export type ProductCardData = {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  discount: string;
};

import type { ApiProduct, ProductCardData } from "./types";

const PLACEHOLDER = "https://placehold.co/400x400/f3f4f6/6b7280?text=No+image";

export function mapApiProductToCard(p: ApiProduct): ProductCardData {
  return {
    id: String(p._id),
    name: p.name,
    price: p.price,
    originalPrice: p.price,
    image: p.images?.[0] || PLACEHOLDER,
    discount: "",
  };
}

export function getCategoryName(p: ApiProduct): string {
  if (p.category && typeof p.category === "object" && "name" in p.category) {
    return p.category.name;
  }
  return "";
}

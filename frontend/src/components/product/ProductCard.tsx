import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/lib/format";
import type { ProductCardData } from "@/lib/types";

export const ProductCard = ({ product }: { product: ProductCardData }) => {
  const { id, name, price, image, originalPrice, discount } = product;
  const hasDiscount = discount && originalPrice > price;

  return (
    <Link
      href={`/products/${id}`}
      className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 relative"
    >
      {hasDiscount && (
        <div className="absolute top-2 left-2 bg-viettel text-white text-xs font-bold px-2 py-1 rounded-full z-10">
          Giảm {discount}
        </div>
      )}
      <div className="relative aspect-square p-4">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
          unoptimized
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium text-gray-900 text-sm line-clamp-2 min-h-[40px] mb-2 group-hover:text-viettel transition-colors">
          {name}
        </h3>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-viettel font-bold text-lg">{formatPrice(price)}</span>
        </div>
        {originalPrice > price && (
          <div className="text-gray-400 text-sm line-through">{formatPrice(originalPrice)}</div>
        )}
      </div>
    </Link>
  );
};

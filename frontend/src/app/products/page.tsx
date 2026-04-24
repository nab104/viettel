"use client";

import { useEffect, useState } from "react";
import { getProducts } from "@/lib/api";
import { mapApiProductToCard } from "@/lib/product";
import { ProductCard } from "@/components/product/ProductCard";
import { Spinner } from "@/components/ui/Spinner";
import { ErrorAlert } from "@/components/ui/ErrorAlert";
import type { ProductCardData } from "@/lib/types";

export default function ProductsPage() {
  const [products, setProducts] = useState<ProductCardData[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    let live = true;
    (async () => {
      setErr("");
      try {
        const list = await getProducts();
        if (!live) return;
        setProducts(list.map(mapApiProductToCard));
      } catch (e) {
        if (!live) return;
        setErr(e instanceof Error ? e.message : "Lỗi tải sản phẩm");
        setProducts([]);
      } finally {
        if (live) setLoading(false);
      }
    })();
    return () => {
      live = false;
    };
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 uppercase mb-6">Sản phẩm</h1>
      {loading ? (
        <div className="flex justify-center py-20">
          <Spinner className="h-10 w-10" />
        </div>
      ) : err ? (
        <ErrorAlert message={err} />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
      {!loading && !err && products.length === 0 && (
        <p className="text-center text-gray-500 py-8">Chưa có sản phẩm.</p>
      )}
    </div>
  );
}

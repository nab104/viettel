"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { getProductById } from "@/lib/api";
import { formatPrice } from "@/lib/format";
import { getCategoryName } from "@/lib/product";
import { useAuth } from "@/hooks/useAuth";
import { useCart } from "@/hooks/useCart";
import { Spinner } from "@/components/ui/Spinner";
import { ErrorAlert } from "@/components/ui/ErrorAlert";
import type { ApiProduct } from "@/lib/types";
import { Button } from "@/components/ui/Button";

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const { user } = useAuth();
  const { add } = useCart();
  const [p, setP] = useState<ApiProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [addErr, setAddErr] = useState("");
  const [adding, setAdding] = useState(false);

  const load = useCallback(async () => {
    if (!id) return;
    setErr("");
    setLoading(true);
    try {
      const product = await getProductById(String(id));
      setP(product);
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Không tải được sản phẩm");
      setP(null);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    void load();
  }, [load]);

  const image = p?.images?.[0] || "https://placehold.co/600?text=No+image";

  const onAdd = async () => {
    if (!p) return;
    if (!user) {
      router.push(`/login?next=/products/${id}`);
      return;
    }
    setAddErr("");
    setAdding(true);
    try {
      await add(String(p._id), 1);
    } catch (e) {
      setAddErr(e instanceof Error ? e.message : "Không thêm được");
    } finally {
      setAdding(false);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 flex justify-center">
        <Spinner className="h-10 w-10" />
      </div>
    );
  }
  if (err || !p) {
    return (
      <div className="container mx-auto px-4 py-8">
        <ErrorAlert message={err || "Không tìm thấy sản phẩm."} />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
        <div className="relative aspect-square bg-gray-50 rounded-xl">
          <Image src={image} alt={p.name} fill className="object-contain p-6" unoptimized />
        </div>
        <div>
          {getCategoryName(p) && (
            <p className="text-sm text-viettel font-medium mb-1">{getCategoryName(p)}</p>
          )}
          <h1 className="text-2xl font-bold text-gray-900 mb-4">{p.name}</h1>
          <p className="text-3xl font-bold text-viettel mb-2">{formatPrice(p.price)}</p>
          <p className="text-sm text-gray-600 mb-2">Còn hàng: {p.stock} sản phẩm</p>
          {p.description && <p className="text-gray-600 text-sm leading-relaxed mb-6">{p.description}</p>}
          {addErr && <ErrorAlert message={addErr} onClose={() => setAddErr("")} />}
          <div className="flex flex-wrap gap-3">
            <Button onClick={onAdd} disabled={adding || p.stock < 1} type="button">
              {adding ? "Đang thêm…" : p.stock < 1 ? "Hết hàng" : "Thêm vào giỏ hàng"}
            </Button>
            <Button variant="secondary" onClick={() => router.push("/cart")} type="button">
              Xem giỏ hàng
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

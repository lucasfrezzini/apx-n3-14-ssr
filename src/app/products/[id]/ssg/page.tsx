import Logo from "@/components/Logo";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

interface ProductForStaticParams {
  id: string | number;
}

const base_url = "http://fakestoreapi.com/products";

export async function generateStaticParams() {
  const res = await fetch(base_url);
  const products = await res.json();

  const ids = products!.map((p: ProductForStaticParams) => ({
    id: String(p.id),
  }));

  return ids;
}

export default async function ssg({ params }: { params: { id: string } }) {
  /* @next-codemod-ignore */
  const { id } = await params;
  const res = await fetch(`${base_url}/${id}`);
  const product = await res.json();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <Logo />
        <p className="text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          Resultados de <strong>Next.js Server Side Generation</strong> para la
          busqueda de producto con ID: <strong>{id}</strong>
        </p>
        <div className="text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          {product ? (
            <ProductCard product={product} />
          ) : (
            <p>Producto no encontrado o datos incompletos.</p>
          )}
        </div>
        <p className="text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <Link className="underline bg-[#ff0] text-black py-2 px-4" href={"/"}>
            <strong>Go Home</strong>
          </Link>
        </p>
      </main>
    </div>
  );
}

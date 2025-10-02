import Logo from "@/components/Logo";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

const base_url = "http://fakestoreapi.com/products";

export const revalidate = 30;

export default async function isg({ params }: { params: { id: string } }) {
  /* @next-codemod-ignore */
  const { id } = await params;
  const res = await fetch(`${base_url}/${id}`);
  const product = await res.json();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <Logo />
        <p className="text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          Resultados de <strong>Next.js Incremental Site Generation</strong>{" "}
          para la busqueda de producto con ID: <strong>{id}</strong>
        </p>
        <div className="text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <ProductCard product={product} />
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

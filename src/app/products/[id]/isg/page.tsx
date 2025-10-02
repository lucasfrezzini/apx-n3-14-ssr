import Logo from "@/components/Logo";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

const base_url = "http://fakestoreapi.com/products";
const base_app_url =
  process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

const top = 20;
const btns: React.JSX.Element[] = [];
for (let idx = 1; idx <= top; idx++) {
  btns.push(
    <Link
      key={idx}
      className="underline bg-[#ff0] text-black py-2 px-4"
      href={`${base_app_url}/products/${idx}/isg`}
    >
      <strong>Prod: {idx}</strong>
    </Link>
  );
}

export const revalidate = 20;

export default async function isg({ params }: { params: { id: string } }) {
  /* @next-codemod-ignore */
  const { id } = await params;
  const res = await fetch(`${base_url}/${id}`);
  const product = await res.json();

  https: return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <Logo />
        <p className="grid grid-cols-10 justify-center gap-2 text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          {btns}
        </p>
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

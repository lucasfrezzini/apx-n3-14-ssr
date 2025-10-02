import { NextRequest } from "next/server";

export async function GET(
  _req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  /* @next-codemod-ignore */
  const { id } = await context.params;

  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await res.json();
  return Response.json({
    mode: "ssr",
    product,
  });
}

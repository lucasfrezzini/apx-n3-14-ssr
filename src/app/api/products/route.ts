export async function GET() {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const products = await res.json();
  return Response.json({
    mode: "ssg",
    products,
  });
}

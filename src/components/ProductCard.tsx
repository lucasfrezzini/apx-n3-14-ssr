import Image from "next/image";

interface ProductCardProps {
  product: {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-900 text-white p-4">
      <div className="flex justify-center">
        <Image
          src={product.image}
          alt={product.title}
          width={200}
          height={200}
          className="object-contain"
        />
      </div>
      <div className="px-2 py-4">
        <div className="font-bold text-xl mb-2 truncate" title={product.title}>
          {product.title}
        </div>
        <p className="text-gray-400 text-base mb-2 line-clamp-3">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-green-400 font-semibold text-lg">
            ${product.price}
          </span>
          <span className="text-yellow-400 text-sm">
            ⭐ {product.rating.rate} ({product.rating.count})
          </span>
        </div>
      </div>
    </div>
  );
}

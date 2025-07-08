import { Product } from "@/types/products";
import Image from "next/image";
import Link from "next/link";

export default function Product({ category: { name: category }, images, price, slug, title }: Product) {
  return (
    <Link
      href={`/products/${slug}`}
      className="flex flex-col w-[350px] h-[440px] items-center p-4 rounded-xl bg-gray-100/40 hover:bg-gray-100 gap-y-2"
    >
      <Image src={images[0]} alt={title} width={400} height={600} className="aspect-square w-full" />
      <h1>{title}</h1>
      <h2>{category}</h2>
      <h3>{price}$</h3>
    </Link>
  );
}

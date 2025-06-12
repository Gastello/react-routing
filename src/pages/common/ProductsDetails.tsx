import { useLoaderData } from "react-router-dom";
import type { Product } from "./Products";

export default function ProductsDetails() {
  const product = useLoaderData() as Product;
  return (
    <div className="p-5 flex gap-5 justify-center">
      <div className="w-[400px] h-[400px] overflow-hidden">
        <img className="max-h-full" src={product.image} alt={product.title} />
      </div>
      <div className="flex flex-col gap-3">
        <div className="font-bold text-2xl">{product.title}</div>
        <div className="font-thin text-sm bg-gray-700 text-white self-start rounded-xl py-1 px-2">
          {product.category}
        </div>
        <div className="text-xl">{product.price} UAH</div>
        <div>{product.description}</div>
        <button className="font-bold text-xl cursor-pointer bg-gray-500 text-white self-start rounded-xl py-1 px-2">
          Купити
        </button>
      </div>
    </div>
  );
}

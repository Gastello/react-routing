import { useLoaderData } from "react-router-dom";
type Product = {
  category: string;
  description: string;
  id: string;
  image: string;
  price: number;
  title: string;
};
export default function Products() {
  const products = useLoaderData() as Product[];
  return (
    <>
      <div>
        {products.map((el, idx) => (
          <div className="p-5 flex gap-5" key={idx}>
            <div className="w-[200px] h-[200px] overflow-hidden"><img className="max-h-full" src={el.image} alt={el.title} /></div>
            <div className="flex flex-col gap-1">
              <div className="font-bold text-2xl">{el.title}</div>
              <div className="font-thin text-sm bg-gray-700 text-white self-start rounded-xl py-1 px-2">{el.category}</div>
              <div className="text-xl">{el.price} UAH</div>
              <div>{el.description}</div>
              <div className="justify-stretch italic">Дізнатись більше...</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

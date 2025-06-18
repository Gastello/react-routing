import { COMMON_ROUTES } from "./routes.names";
import { CommonPages } from "../pages";
import type { Product } from "../pages/common/Products";
import { NotFound } from "../pages/common";

export default [
  {
    path: "*",
    element: <NotFound />,
  },
  {
    index: true,
    element: <CommonPages.Home />,
  },
  {
    path: COMMON_ROUTES.AUTH,
    element: <CommonPages.Auth />,
    action: async ({ request }: { request: Request }) => {
      const formData = await request.formData();
      console.log("NAME", formData.get("userName"));
      console.log("PASS", formData.get("password"));
    },
  },
  {
    path: COMMON_ROUTES.NOT_FOUND,
    element: <CommonPages.NotFound />,
  },
  {
    path: COMMON_ROUTES.PRODUCTS,
    element: <CommonPages.Products />,
    loader: async () => fetch("/data/products.json").then((res) => res.json()),
  },
  {
    path: `${COMMON_ROUTES.PRODUCTS}/:id`,
    element: <CommonPages.ProductsDetails />,
    loader: async ({ params }: { params: { id: string } }) => {
      const res = await fetch("/data/products.json");
      const products = await res.json();
      return products.find((p: Product) => p.id === params.id);
    },
  },
];

import { COMMON_ROUTES } from "./routes.names";
import { CommonPages } from "../pages";

export default [
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
];
import { SELLER_ROUTES } from "./routes.names";
import { SellerPages } from "../pages";

export default [
  {
    path: SELLER_ROUTES.DASHBOARD,
    element: <SellerPages.Dashboard />,
  },
  {
    path: SELLER_ROUTES.ORDERS,
    element: <SellerPages.Orders />,
  },
];

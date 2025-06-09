import { USER_ROUTES } from "./routes.names";
import { UserPages } from "../pages";

export default [
  {
    path: USER_ROUTES.CART,
    element: <UserPages.Cart />,
  },
  {
    path: USER_ROUTES.ORDERS_HISTORY,
    element: <UserPages.History />,
  },
];
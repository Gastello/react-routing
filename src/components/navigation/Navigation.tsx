import { Link } from "react-router-dom";
import {
  COMMON_ROUTES,
  SELLER_ROUTES,
  USER_ROUTES,
} from "../../routes/routes.names";

export default function Navigation() {
  return (
    <>
      <nav className="flex justify-between py-3 px-5 bg-blue-800">
        <Link
          className="text-white bg-blue-800 px-4 hover:scale-110"
          to={COMMON_ROUTES.HOME}
        >
          HOME
        </Link>

        <Link
          className="text-white bg-blue-800 px-4 hover:scale-110"
          to={COMMON_ROUTES.PRODUCTS}
        >
          PRODUCTS
        </Link>
        <Link
          className="text-white bg-blue-800 px-4 hover:scale-110"
          to={USER_ROUTES.ORDERS_HISTORY}
        >
          ORDERS HISTORY
        </Link>
        <Link
          className="text-white bg-blue-800 px-4 hover:scale-110"
          to={USER_ROUTES.CART}
        >
          CART
        </Link>

        <Link
          className="text-white bg-blue-800 px-4 hover:scale-110"
          to={SELLER_ROUTES.DASHBOARD}
        >
          DASHBOARD
        </Link>
        <Link
          className="text-white bg-blue-800 px-4 hover:scale-110"
          to={SELLER_ROUTES.ORDERS}
        >
          ORDERS
        </Link>

        <Link
          className="text-white bg-blue-800 px-4 hover:scale-110"
          to={COMMON_ROUTES.AUTH}
        >
          LOGIN
        </Link>
      </nav>
    </>
  );
}

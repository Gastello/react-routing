import { createBrowserRouter, RouterProvider } from "react-router-dom";
import commonRouter from "./common.router";
import { COMMON_ROUTES, ROLES } from "./routes.names";
import PageTemplate from "./PageTemplate";
import sellerRouter from "./seller.router";
import userRouter from "./user.router";
import { NotFound } from "../pages/common";

const getUserRole = (role: string) => {
  switch (role) {
    case ROLES.GUEST:
      return commonRouter;
    case ROLES.SELLER:
      return [...commonRouter, ...sellerRouter];
    case ROLES.USER:
      return [...commonRouter, ...userRouter];
    default:
      return [];
  }
};
export default function MyAppRouter() {
  const role = ROLES.USER;

  const router = createBrowserRouter([
    {
      path: COMMON_ROUTES.HOME,
      element: <PageTemplate />,
      errorElement: <NotFound />,
      children: getUserRole(role),
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

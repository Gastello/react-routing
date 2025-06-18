import { useContext } from "react";
import { RoleContext } from "../../routes/MyAppRouter";
import { ROLES } from "../../routes/routes.names";

export default function Footer() {
  const roleContext = useContext(RoleContext);
  if (!roleContext) throw new Error("roleContext is missing!");
  return (
    <>
      <footer className="flex justify-between py-3 px-5 bg-blue-800">
        <button
          onClick={() => roleContext?.setRole(ROLES.GUEST)}
          className="text-white bg-blue-800 px-4 hover:scale-110"
        >
          {roleContext?.role == ROLES.GUEST ? "I am Guest" : "Become Guest"}
        </button>
        <button
          onClick={() => roleContext?.setRole(ROLES.USER)}
          className="text-white bg-blue-800 px-4 hover:scale-110"
        >
          {roleContext?.role == ROLES.USER ? "I am User" : "Become User"}
        </button>
        <button
          onClick={() => roleContext?.setRole(ROLES.SELLER)}
          className="text-white bg-blue-800 px-4 hover:scale-110"
        >
          {roleContext?.role == ROLES.SELLER ? "I am Seller" : "Become Seller"}
        </button>
      </footer>
    </>
  );
}

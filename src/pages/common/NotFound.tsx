import Navigation from "../../components/navigation/Navigation";

export default function NotFound() {
  return (
    <>
      <Navigation />
      <div className="flex h-full justify-center items-center font-bold text-6xl">
        Page not found!
      </div>
    </>
  );
}

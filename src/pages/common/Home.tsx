export default function Home() {
  return (
    <>
      Не авторизованому користувачу доступні такі сторінки:
      <ul className="list-disc list-inside">
        <li>Home</li>
        <li>Login</li>
        <li>Products</li>
        <li>Product Details</li>
      </ul>
      Звичайному користувачу доступні такі сторінки:
      <ul className="list-disc list-inside">
        <li>Cart</li>
        <li>History</li>
      </ul>
      Продавцю доступні такі сторінки:
      <ul className="list-disc list-inside">
        <li>Dashboard</li>
        <li>Orders</li>
      </ul>
    </>
  );
}

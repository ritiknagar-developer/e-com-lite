import Empty from "./Empty";

export default function Cart({ show, close, cart, checkout }) {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition ${
        show ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-5 flex justify-between border-b">
        <h2 className="font-bold text-xl">Cart</h2>
        <button onClick={close}>✖</button>
      </div>

      <div className="p-5 space-y-3 overflow-y-auto h-[70%]">
        {cart.length === 0 && <Empty text="Cart is empty" />}

        {cart.map((c) => (
          <div key={c._id} className="flex justify-between border-b pb-2">
            <span>{c.name}</span>
            <span>x {c.quantity}</span>
          </div>
        ))}
      </div>

      <div className="p-5">
        <button
          disabled={!cart.length}
          onClick={checkout}
          className="w-full bg-green-600 text-white py-2 rounded disabled:bg-gray-400"
        >
          Place Order
        </button>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import Cart from "../components/Cart";
import Orders from "../components/Orders";
import Loader from "../components/Loader";
import Toast from "../components/Toast";
import api from "../api/axios";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showCart, setShowCart] = useState(false);
  const [showOrders, setShowOrders] = useState(false);

  const [toast, setToast] = useState("");

  useEffect(() => {
    fetchProducts();
    fetchOrders();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await api.get("/products");
      setProducts(res.data);
    } catch {
      setToast("Failed to load products");
    }
    setLoading(false);
  };

  const fetchOrders = async () => {
    try {
      const res = await api.get("/orders");
      setOrders(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const addToCart = (product) => {
    const exist = cart.find((c) => c._id === product._id);

    if (exist) {
      if (exist.quantity >= product.stock) return setToast("Out of stock");

      setCart(
        cart.map((c) =>
          c._id === product._id ? { ...c, quantity: c.quantity + 1 } : c,
        ),
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const checkout = async () => {
    try {
      await api.post("/orders/checkout", {
        items: cart.map((i) => ({
          productId: i._id,
          quantity: i.quantity,
        })),
      });

      setToast("Order placed successfully");
      setCart([]);
      fetchProducts();
      fetchOrders();
    } catch (err) {
      setToast(err.response?.data?.message || "Checkout failed");
    }
  };

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      {toast && <Toast msg={toast} clear={() => setToast("")} />}

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Industrial Store</h1>

        <div className="flex gap-3">
          <button
            onClick={() => setShowOrders(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Orders
          </button>

          <button
            onClick={() => setShowCart(true)}
            className="bg-black text-white px-4 py-2 rounded-lg"
          >
            Cart ({cart.length})
          </button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.map((p) => (
          <ProductCard key={p._id} product={p} add={addToCart} />
        ))}
      </div>

      <Cart
        show={showCart}
        close={() => setShowCart(false)}
        cart={cart}
        checkout={checkout}
      />

      <Orders
        show={showOrders}
        close={() => setShowOrders(false)}
        orders={orders}
      />
    </div>
  );
}

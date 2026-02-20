export default function ProductCard({ product, add }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
      <h2 className="font-bold text-lg">{product.name}</h2>

      <p className="text-gray-500">₹ {product.price}</p>
      <p className="text-sm text-gray-400">Stock: {product.stock}</p>

      <button
        onClick={() => add(product)}
        className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
}

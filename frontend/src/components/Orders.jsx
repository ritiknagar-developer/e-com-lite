import { motion, AnimatePresence } from "framer-motion";

export default function Orders({ show, close, orders }) {
  return (
    <AnimatePresence>
      {show && (
        <>
          <div onClick={close} className="fixed inset-0 bg-black/40 z-40" />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-[350px] h-full bg-white shadow-xl z-50 p-5 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-xl font-bold">Orders</h2>
              <button
                onClick={close}
                className="text-gray-500 hover:text-black text-lg"
              >
                ✕
              </button>
            </div>

            {!orders.length ? (
              <p className="text-gray-500 text-center mt-10">No orders yet</p>
            ) : (
              <div className="space-y-4">
                {orders.map((order) => (
                  <div
                    key={order._id}
                    className="border rounded-lg p-3 shadow-sm"
                  >
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-semibold">
                        #{order._id.slice(-6)}
                      </span>
                      <span className="text-green-600 font-semibold">
                        ₹{order.totalAmount}
                      </span>
                    </div>

                    <div className="text-xs text-gray-500 mb-2">
                      {new Date(order.createdAt).toLocaleString()}
                    </div>

                    {order.items.map((i, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span>{i.name || "Product"}</span>
                        <span>x{i.quantity}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

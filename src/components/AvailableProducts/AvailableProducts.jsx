import Card from "../card/Card";

const AvailableProducts = ({
  products,
  setCartValue,
  cartValue,
  selectedCart,
  setSelectedCart,
}) => {
  //   console.log(key);
  return (
    <div className="w-full px-4 md:px-0 py-8">
      {/* The Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        {products && products.length > 0 ? (
          products.map((product) => (
            <Card
              key={product.id}
              product={product}
              cartValue={cartValue}
              setCartValue={setCartValue}
              selectedCart={selectedCart}
              setSelectedCart={setSelectedCart}
            />
          ))
        ) : (
          /* Fallback for empty state */
          <div className="col-span-full py-20 text-center">
            <div className="text-gray-300 mb-4">
              <svg
                className="mx-auto h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900">
              No products found
            </h3>
            <p className="text-gray-500">
              Try adjusting your filters or check back later.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AvailableProducts;

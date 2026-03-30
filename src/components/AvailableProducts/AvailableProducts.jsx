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
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {products.map((product) => {
          return (
            <Card
              key={product.id}
              product={product}
              cartValue={cartValue}
              setCartValue={setCartValue}
              selectedCart={selectedCart}
              setSelectedCart={setSelectedCart}
            ></Card>
          );
        })}
      </div>
    </div>
  );
};

export default AvailableProducts;

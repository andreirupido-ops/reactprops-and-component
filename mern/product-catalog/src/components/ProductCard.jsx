
function ProductCard({
  title,
  price,
  category = "General",
  inStock,
  onAddToCart,
  children
}) {
  return (
    <div className="product-card">
      {children}

      <h2>{title}</h2>
      <p>Category: {category}</p>
      <p>Price: ₱{price.toFixed(2)}</p>
    </div>
  );
}

export default ProductCard;

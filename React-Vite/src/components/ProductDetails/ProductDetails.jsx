import { useParams } from "react-router-dom";
import { productData, vegetableData, groceryData } from "../ProductLayout.jsx/ProductLayout.jsx";
import { useState, useEffect } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Cardone from "../Custom_Hooks/Card.jsx";


const ProductDetails = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  // Get context data once with null check
  const { cart = [], addItemCard = () => {}, updateItemQuantity = () => {} } = Cardone();
  console.log("Cart context:", { cart, addItemCard });

  // Find product from datasets
  const product =
    productData.find((p) => p.id === id) ||
    vegetableData.find((p) => p.id === id) ||
    groceryData.find((p) => p.id === id);

  if (!product) {
    return <div className="text-center text-red-500 mt-20 text-xl">Product not found.</div>;
  }

  // Check if product is already in cart and get its current quantity
  useEffect(() => {
    const cartItem = cart.find(item => item.id === String(product.id));
    if (cartItem) {
      setQuantity(cartItem.quantity || 1);
    } else {
      setQuantity(1);
    }
  }, [cart, product.id]);

  // Handle quantity changes
  const handleQuantityChange = (newQuantity) => {
    if (newQuantity <= 0) {
      setQuantity(1);
    } else {
      setQuantity(newQuantity);
    }
  };

  // Handle add to cart with quantity
  const handleAddToCart = () => {
    const itemToAdd = {
      ...product,
      id: String(product.id), // Ensure ID is a string
      quantity: quantity
    };
    addItemCard(itemToAdd);
    console.log("Added to cart:", itemToAdd);
  };

  // Multiple images support with null check
  const images = Array.isArray(product.images) && product.images.length > 0
    ? product.images
    : [product.image || ''];

  const [mainImage, setMainImage] = useState(images[0] || '');

  // Update main image when product changes (when navigating between products)
  useEffect(() => {
    const newImages = Array.isArray(product.images) && product.images.length > 0
      ? product.images
      : [product.image || ''];
    setMainImage(newImages[0] || '');
  }, [product.id, product.images, product.image]);

  // Star rating logic with null checks
  const maxStars = 5;
  const ratingValue = Number(product.rating) || 0;
  const filledStars = Math.floor(ratingValue);
  const hasHalfStar = ratingValue - filledStars >= 0.25 && ratingValue - filledStars < 0.75;
  const emptyStars = maxStars - filledStars - (hasHalfStar ? 1 : 0);

  // Price and offer with null checks
  const priceNumber = Number((product.price || '0').replace(/[^0-9.-]+/g, "")) || 0;
  const offer = Number(product.offer) || 0;
  const oldPrice = offer ? (priceNumber / (1 - offer / 100)).toFixed(0) : null;

  // Description
  const description = "Experience the best quality and freshness with our handpicked selection. Perfect for your daily needs and special occasions.";

  const shippingInfo = "Shipping within 4 hours";
  const returnPolicy = "7 Days Return Policy";
  const securePayment = "Secure Payment";

  return (
    <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased mt-12">
      <div className="max-w-6xl px-4 mx-auto 2xl:px-0">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
          {/* Image Section */}
          <div className="shrink-0 max-w-md lg:max-w-lg mx-auto bg-gray-50 rounded-lg shadow p-4 flex flex-col items-center">
            <LazyLoadImage
              className="w-full rounded-lg object-contain"
              alt={product.title}
              effect="blur"
              src={mainImage}
              wrapperProps={{ style: { transitionDelay: ".5s" } }}
            />

            {images.length > 1 && (
              <div className="flex gap-2 mt-4">
                {images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Thumbnail ${idx}`}
                    className={`w-16 h-16 object-cover rounded cursor-pointer border-2 ${mainImage === img ? 'border-blue-500' : 'border-transparent'}`}
                    onClick={() => setMainImage(img)}
                  />
                ))}
              </div>
            )}

            {offer > 0 && (
              <span className="mt-4 inline-block bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full">
                {offer}% OFF
              </span>
            )}
          </div>

          {/* Details Section */}
          <div className="mt-6 sm:mt-8 lg:mt-0">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white flex items-center gap-3">
              {product.title}
              {ratingValue >= 4.7 && (
                <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded-full">Best Seller</span>
              )}
            </h1>

            {/* Rating Stars */}
            <div className="mt-4 flex items-center gap-4">
              <div className="flex items-center gap-1">
                {Array.from({ length: filledStars }).map((_, idx) => (
                  <svg key={idx} className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
                {hasHalfStar && (
                  <svg className="w-5 h-5 text-yellow-300" fill="url(#half-gradient-details)" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient id="half-gradient-details" x1="0" x2="1" y1="0" y2="0">
                        <stop offset="50%" stopColor="#fde68a" />
                        <stop offset="50%" stopColor="#d1d5db" />
                      </linearGradient>
                    </defs>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                )}
                {Array.from({ length: emptyStars }).map((_, idx) => (
                  <svg key={idx} className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {product.rating} ({product.total_no_user} Reviews)
              </span>
            </div>

            {/* Price Section */}
            <div className="mt-6 flex items-center gap-4">
              <span className="text-3xl font-extrabold text-gray-900 dark:text-white">{product.price}</span>
              {oldPrice && <span className="text-lg text-gray-400 line-through">${oldPrice}</span>}
              {offer > 0 && (
                <span className="ml-2 bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full">Save {offer}%</span>
              )}
            </div>

            {/* Info Row */}
            <div className="mt-4 flex items-center gap-4 text-sm font-medium">
              <span className="text-green-600">🚚 {shippingInfo}</span>
              <span className="text-blue-600">🔒 {securePayment}</span>
              <span className="text-gray-600">↩️ {returnPolicy}</span>
            </div>

            {/* Quantity Controls */}
            <div className="mt-6 flex items-center gap-4">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Quantity:</label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleQuantityChange(quantity - 1)}
                  className="w-8 h-8 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center text-sm transition-colors duration-200"
                >
                  -
                </button>
                <span className="text-lg font-medium min-w-[30px] text-center text-gray-900 dark:text-white">
                  {quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange(quantity + 1)}
                  className="w-8 h-8 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center text-sm transition-colors duration-200"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleAddToCart}
                className="flex-1 py-4 px-8 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full shadow-lg text-lg"
              >
                Add to Cart
              </button>
              <button className="flex-1 py-4 px-8 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full shadow-lg text-lg">
                Buy Now
              </button>
            </div>

            {/* Description */}
            <hr className="my-8 border-gray-200 dark:border-gray-800" />
            <div className="text-gray-700 dark:text-gray-300 text-lg">{description}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;

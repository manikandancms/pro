import React, {  useContext, useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import useOnlineStatus from "../Custom_Hooks/UseOnlineStatus";
import UserContext from "../Store/UserContext";
import Cardone from "../Custom_Hooks/Card";
import ShimmerLayout from "../shimmer/Shimmer.jsx";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [cartPosition, setCartPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage for saved preference, default to false
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  
  const toggleMenu = () => setMenuOpen(prev => !prev);
  const toggleCart = () => setCartOpen(prev => !prev);
  const toggleDarkMode = () => {
    setDarkMode(prev => {
      const newMode = !prev;
      localStorage.setItem('darkMode', JSON.stringify(newMode));
      return newMode;
    });
  };
  const navigate = useNavigate();
  const cartRef = useRef(null);
  const cartDropdownRef = useRef(null);

  const Data = useOnlineStatus()

  const data = useContext(UserContext)

  const { cart = [], clearCart, removeItemFromCart, updateItemQuantity } = Cardone();
  
  // Debug cart data
  console.log("Header cart data:", cart);
  
  // Calculate cart totals
  const totalItems = cart.reduce((total, item) => total + (Number(item?.quantity) || 1), 0);
  const totalPrice = cart.reduce((total, item) => {
    const price = Number((item?.price || '0').replace(/[^0-9.-]+/g, "")) || 0;
    const quantity = Number(item?.quantity) || 1;
    return total + (price * quantity);
  }, 0);

  // Handle quantity changes
  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeItemFromCart(itemId);
    } else {
      updateItemQuantity(itemId, newQuantity);
    }
  };

  // Close cart when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setCartOpen(false);
      }
    };

    if (cartOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [cartOpen]);

  // Drag functionality for cart dropdown
  const handleMouseDown = (e) => {
    if (isSmallScreen) return; // Disable drag on small screens
    if (e.target.closest('.cart-content')) return; // Don't drag when clicking on cart content
    setIsDragging(true);
    const rect = cartDropdownRef.current.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleMouseMove = (e) => {
    if (isSmallScreen) return; // Disable drag on small screens
    if (!isDragging) return;
    
    const newX = e.clientX - dragOffset.x;
    const newY = e.clientY - dragOffset.y;
    
    setCartPosition({ x: newX, y: newY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset]);

  // Set initial cart position when cart opens on large screens
  useEffect(() => {
    if (cartOpen && !isSmallScreen && cartRef.current) {
      const rect = cartRef.current.getBoundingClientRect();
      setCartPosition({
        x: rect.left - 160, // Center the cart dropdown (320px width / 2 = 160px offset)
        y: rect.bottom + 10  // Position below the cart button
      });
    }
  }, [cartOpen, isSmallScreen]);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset]);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Apply dark mode to document element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  if (isLoading) {
    return <ShimmerLayout />;
  }

  return (
    <div className="2xl:container mx-auto mt-1">
      <div className="w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 h-[10vh] ">
        <div className="flex flex-row justify-items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="https://ik.imagekit.io/mani2/image/new-Ecom@1,25x.png?updatedAt=1750886673213"
              alt="logo-"
              className="h-[90px] md:h-[95px] hover:scale-75 transition-transform duration-500 rounded-lg cursor-pointer"
            />

            {/* Online Status */}
            <span className="flex items-center gap-2 px-5">
              <span
                className={`h-3 w-3 rounded-full ${
                  Data ? "bg-green-400 animate-none" : "bg-red-500"
                }`}
              ></span>
              <span
                className={`text-sm font-medium transition-all duration-300 ease-in-out ${
                  Data ? "text-green-400  " : "text-red-400"
                }`}
              >
                {Data ? "Online" : "Offline"}

                {/* <span className={"text-green-400  px-5"}>{data.whichFor} </span> */}
              </span>
            </span>
          </div>

          {/* Mobile Menu Icon and Dark Mode Toggle */}
          <div className="md:hidden flex gap-2 items-center">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-all duration-300 ${
                darkMode 
                  ? 'bg-gray-700 text-yellow-300 hover:bg-gray-600' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            
            {!menuOpen && (
              <svg
                onClick={toggleMenu}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="1.5em"
                height="1.5em"
                className="hover:scale-125 transition-transform duration-500 cursor-pointer text-black dark:text-white rounded-md "
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M10 6a4 4 0 1 0-8 0a4 4 0 0 0 8 0m0 12a4 4 0 1 0-8 0a4 4 0 0 0 8 0M22 6a4 4 0 1 0-8 0a4 4 0 0 0 8 0m0 12a4 4 0 1 0-8 0a4 4 0 0 0 8 0"
                />
              </svg>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div
          className={
            `${menuOpen ? "flex absolute top-0 left-0 w-full z-50 bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-sm py-8 px-2" : "hidden"} md:static md:flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 md:bg-gradient-to-r from-indigo-600 via-blue-700 to-blue-600 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 rounded-lg md:py-4 md:px-2 md:h-[10vh] shadow-lg`
          }
        >
          {/* Close Icon inside overlay menu (mobile only) */}
          {menuOpen && (
            <div className="absolute top-4 right-4 md:hidden z-50">
              <svg
                onClick={toggleMenu}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="2em"
                height="2em"
                className="hover:scale-125 transition-transform duration-500 cursor-pointer bg-red-700 text-white rounded-lg "
              >
                <g fill="none" fillRule="evenodd">
                  <path d="M0 0h24v24H0z" />
                  <path
                    fill="currentColor"
                    d="M12 14.122l5.303 5.303a1.5 1.5 0 0 0 2.122-2.122L14.12 12l5.304-5.303a1.5 1.5 0 1 0-2.122-2.121L12 9.879 6.697 4.576a1.5 1.5 0 1 0-2.122 2.12L9.88 12l-5.304 5.304a1.5 1.5 0 1 0 2.122 2.12z"
                  />
                </g>
              </svg>
            </div>
          )}
          
          {/* Dark Mode Toggle for Desktop */}
          <div className="hidden md:block">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-all duration-300 ${
                darkMode 
                  ? 'bg-gray-700 text-yellow-500 hover:bg-gray-600' 
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>
          
          {/* Mobile and desktop nav links */}
          <>
            {[
              { label: "Home", to: "/" },
              { label: "Products", to: "/products" },
              { label: "About", to: "/comment" }
            ].map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="text-white hover:text-yellow-300 hover:scale-125 transition-all duration-500 cursor-pointer text-sm font-medium hover:bg-white/10 px-3 py-2 rounded-lg"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            {/* Cart Icon with Dropdown */}
            <div className="relative" ref={cartRef}>
              <button
                onClick={toggleCart}
                className={`text-white hover:text-yellow-300 transition-all duration-300 cursor-pointer text-sm font-medium flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 ${
                  cartOpen ? 'scale-110 bg-white/20' : 'hover:scale-105'
                }`}
              >
                🛒 Cart
                {totalItems > 0 && (
                  <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Cart Dropdown */}
              {cartOpen && (
                <div 
                  ref={cartDropdownRef}
                  className={`${isSmallScreen ? 'absolute top-full left-0 mt-2' : 'fixed'} w-80 rounded-lg shadow-xl z-[9999] max-h-96 overflow-y-auto ${!isSmallScreen ? 'cursor-move' : ''} ${
                    darkMode 
                      ? 'bg-gray-800 text-white' 
                      : 'bg-white text-gray-800'
                  }`}
                  style={{ 
                    ...(isSmallScreen ? {} : {
                      left: cartPosition.x, 
                      top: cartPosition.y,
                      transform: isDragging ? 'scale(1.02)' : 'scale(1)',
                      transition: isDragging ? 'none' : 'all 0.2s ease-in-out'
                    })
                  }}
                  onMouseDown={!isSmallScreen ? handleMouseDown : undefined}
                >
                  {/* Drag Handle */}
                  <div className={`px-4 py-2 rounded-t-lg flex justify-between items-center ${!isSmallScreen ? 'cursor-move' : ''} ${
                    darkMode ? 'bg-gray-700 text-white' : 'bg-blue-500 text-white'
                  }`}>
                    {!isSmallScreen && (
                      <span className="text-sm font-medium">🖱️ Drag to move cart</span>
                    )}
                    <button
                      onClick={() => setCartOpen(false)}
                      className="text-white hover:text-gray-200 text-xl font-bold"
                    >
                      ✕
                    </button>
                  </div>
                  <div className="p-4 cart-content">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className={`text-lg font-semibold ${
                        darkMode ? 'text-white' : 'text-gray-800'
                      }`}>Shopping Cart</h3>
                    </div>

                    {cart.length === 0 ? (
                      <div className="text-center py-8">
                        <p className={darkMode ? 'text-gray-400' : 'text-gray-500'}>Your cart is empty</p>
                      </div>
                    ) : (
                      <>
                        {/* Cart Items */}
                        <div className="space-y-3 mb-4">
                          {cart.map((item, index) => (
                            <div key={index} className={`flex items-center gap-3 p-3 rounded-lg hover:bg-opacity-80 transition-colors ${
                              darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
                            }`}>
                              <img
                                src={item.image || item.images?.[0] || ''}
                                alt={item.title}
                                className="w-12 h-12 object-cover rounded"
                              />
                              <div className="flex-1">
                                <h4 className={`font-medium text-sm truncate ${
                                  darkMode ? 'text-white' : 'text-gray-800'
                                }`}>
                                  {item.title}
                                </h4>
                                <p className={`text-sm ${
                                  darkMode ? 'text-gray-300' : 'text-gray-600'
                                }`}>
                                  {item.price}
                                </p>
                                <p className={`text-xs ${
                                  darkMode ? 'text-gray-400' : 'text-gray-500'
                                }`}>
                                  ID: {item.id}
                                </p>
                                
                                {/* Quantity Controls */}
                                <div className="flex items-center gap-2 mt-2">
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleQuantityChange(item.id, (item.quantity || 1) - 1);
                                    }}
                                    className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs hover:bg-red-600 transition-colors"
                                  >
                                    -
                                  </button>
                                  <span className={`text-sm font-medium min-w-[20px] text-center px-2 py-1 rounded border ${
                                    darkMode 
                                      ? 'bg-gray-600 text-white border-gray-500' 
                                      : 'bg-white text-gray-800 border-gray-300'
                                  }`}>
                                    {item.quantity || 1}
                                  </span>
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleQuantityChange(item.id, (item.quantity || 1) + 1);
                                    }}
                                    className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs hover:bg-green-600 transition-colors"
                                  >
                                    +
                                  </button>
                                </div>
                                
                                {/* Product Details Link */}
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    console.log("Navigating to product:", item.id, item.title);
                                    if (item.id) {
                                      navigate(`/products/${item.id}`);
                                      setCartOpen(false);
                                    } else {
                                      console.error("No product ID found:", item);
                                    }
                                  }}
                                  className="text-blue-400 hover:text-blue-300 text-xs underline mt-1"
                                >
                                  View Product Details
                                </button>
                              </div>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  removeItemFromCart(item.id);
                                }}
                                className="text-red-500 hover:text-red-400 text-sm font-bold"
                              >
                                ✕
                              </button>
                            </div>
                          ))}
                        </div>

                        {/* Cart Summary */}
                        <div className={`border-t pt-4 ${
                          darkMode ? 'border-gray-600' : 'border-gray-200'
                        }`}>
                          <div className="flex justify-between items-center mb-3">
                            <span className="font-medium">Total Items:</span>
                            <span className="font-bold">{totalItems}</span>
                          </div>
                          <div className="flex justify-between items-center mb-4">
                            <span className="font-medium">Total Price:</span>
                            <span className="font-bold text-green-500">${totalPrice.toFixed(2)}</span>
                          </div>
                          
                          {/* Action Buttons */}
                          <div className="flex gap-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                clearCart();
                              }}
                              className="w-full bg-red-500 text-white py-2 px-4 rounded text-sm hover:bg-red-600 transition-colors"
                            >
                              Clear Cart
                            </button>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default Header;
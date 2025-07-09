import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import UseFetchProducts from '../Custom_Hooks/UseFetchProducts';
import ShimmerLayout from '../shimmer/Shimmer';

const productData = [
  // Featured/Bestseller Card - Add this specific card

  {
    id: "1",
    images: [
      "https://ik.imagekit.io/mani2/image/delicious-pineapple-still-life-edited.png?updatedAt=1751788944078",
      "https://ik.imagekit.io/mani2/image/raw-fresh-texture-vitamin-fruit-edited.png?updatedAt=1751787664482"

    ],
    title: "Pineapple Paradise",
    price: "$99",
    rating: "4.9",
    offer: "20",
    total_no_user: "350"
  },
  // .

  {
    id: "2",
    images: [
      "https://ik.imagekit.io/mani2/image/staberry.png?updatedAt=1751782490826",
      "https://ik.imagekit.io/mani2/image/strawberry-edited.png?updatedAt=1751783080949",
      "https://ik.imagekit.io/mani2/image/edited-berry-1.png?updatedAt=1751781804600https://ik.imagekit.io/mani2/image/strawberry-edited.png?updatedAt=1751783080949"

    ],
    title: "Strawberry",
    price: "$179",
    rating: "4.8",
    offer: "15",
    total_no_user: "220"
  },
  {
    id: "3",
    images: [

      "https://ik.imagekit.io/mani2/image/mockup-graphics-haSJEJYzl5A-unsplash-removebg-preview1234.png?updatedAt=1751791222111",
      "https://ik.imagekit.io/mani2/image/pdwatercolo-edited.png?updatedAt=1751790476758",
    ],

    title: "Pear",
    price: "$79",
    rating: "4.7",
    offer: "10",
    total_no_user: "470"
  },
  {
    id: "4",
    images: [
      "https://ik.imagekit.io/jap5d6wbb/image/mocku-edited.png?updatedAt=1751791673244",
      "https://ik.imagekit.io/jap5d6wbb/image/123.png?updatedAt=1751792033362"],
    title: "Pomegranate",
    price: "$159",
    rating: "4.6",
    offer: "18",
    total_no_user: "190"
  },
  {
    id: "5",
    images: ["https://ik.imagekit.io/mani2/image/papaya-111-edit(1).png?updatedAt=1751793633496",
      "https://ik.imagekit.io/mani2/image/papaya123.png?updatedAt=1751793143529"]
      ,
    title: "Papaya",
    price: "$49",
    rating: "4.8",
    offer: "25",
    total_no_user: "620"
  },
  {
    id: "6",
    images: [
      "https://ik.imagekit.io/mani2/image/lon@0,3x123.png?updatedAt=1750872137895",
      "https://ik.imagekit.io/mani2/image/water-nobody-top-background-food123.png?updatedAt=1750871690943"
     
    ],
    title: "Muskmelon",
    price: "$69",
    rating: "4.7",
    offer: "12",
    total_no_user: "310"
  },
  {
    id: "7",
    images: ["https://ik.imagekit.io/mani2/image/avocoda1-edited.png?updatedAt=1751795364200",
      "https://ik.imagekit.io/mani2/image/avocoda-2_edoted.png?updatedAt=1751795362928"
    ],

    title: "Hass avocado",
    price: "$139",
    rating: "4.5",
    offer: "22",
    total_no_user: "270"
  },
  {
    id: "8",
    images:
      ["https://ik.imagekit.io/mani2/image/orang123.png?updatedAt=1750870788443",
        "https://ik.imagekit.io/mani2/image/orange-juicy-ripe-circle-citrus123.png?updatedAt=1750871066761"
      
      ],

    title: "Mandarin orange",
    price: "$129",
    rating: "4.8",
    offer: "20",
    total_no_user: "650"
  },
  {
    id: "9",
    image: "https://ik.imagekit.io/jap5d6wbb/image/green-apple-isolated-white-removebg-preview.png?updatedAt=1748807153700",
    title: "Green Apple",
    price: "$299",
    rating: "4.8",
    offer: "17",
    total_no_user: "180"
  }
];

const vegetableData = [
  {
    id: "v1",
    image: "https://ik.imagekit.io/mani2/image/honza-vojtek-A39EqNtDpZs-unsplash.jpg_updatedAt=1748277656230?updatedAt=1748713484255",
    title: "Bell pepper",
    price: "$29",
    rating: "4.7",
    offer: "15",
    total_no_user: "420"
  },
  {
    id: "v2",
    images: ["https://ik.imagekit.io/mani2/image/tomato-isolated1232123.png?updatedAt=1751796441763",
      "https://ik.imagekit.io/mani2/image/fresh-red-tomatoes123.png?updatedAt=1751796437150",
      "https://ik.imagekit.io/mani2/image/to-111.png?updatedAt=1751796436345"],

    title: "Organic Tomato",
    price: "$12",
    rating: "4.6",
    offer: "10",
    total_no_user: "380"
  },
  {
    id: "v3",
    image: "https://ik.imagekit.io/mani2/image/fresh-carrots-white-background.jpg?updatedAt=1748756538707",
    title: "Sweet Carrots",
    price: "$24",
    rating: "4.8",
    offer: "12",
    total_no_user: "290"
  },
  {
    id: "v4",
    image: "https://ik.imagekit.io/mani2/image/broccoli-with-white-background__1_-removebg-preview.png?updatedAt=1748806392244",
    title: "Fresh Broccoli",
    price: "$34",
    rating: "4.5",
    offer: "18",
    total_no_user: "210"
  },
  {
    id: "v5",
    image: "https://ik.imagekit.io/mani2/image/red-onion-whole-isolated-white__2_-removebg-preview.png?updatedAt=1748805993224",
    title: "Red Onions",
    price: "$22",
    rating: "4.4",
    offer: "8",
    total_no_user: "450"
  },
  {
    id: "v6",
    image: "https://ik.imagekit.io/mani2/image/chinese-broccoli-vegetablesw1111-removebg-preview.png?updatedAt=1748805913644",
    title: "Organic Spinach",
    price: "$27",
    rating: "4.9",
    offer: "20",
    total_no_user: "180"
  },
  {
    id: "v7",
    image: "https://ik.imagekit.io/mani2/image/organic-background-green-vegetarian-nutrition__1_-removebg-preview%20(3).png?updatedAt=1748806257237",
    title: "Green Cabbage",
    price: "$19",
    rating: "4.3",
    offer: "15",
    total_no_user: "320"
  },
  {
    id: "v8",
    image: "https://ik.imagekit.io/mani2/image/cauliflower-wooden-floor.jpg?updatedAt=1748757690605",
    title: "Fresh Cauliflower",
    price: "$32",
    rating: "4.6",
    offer: "16",
    total_no_user: "250"
  },
  {
    id: "v9",
    image: "https://ik.imagekit.io/mani2/image/top-view-fresh-green-beans-table.jpg?updatedAt=1748758097593",
    title: "Green Beans",
    price: "$26",
    rating: "4.7",
    offer: "14",
    total_no_user: "280"
  }
];

const groceryData = [
  {
    id: "g1",
    image:
      "https://ik.imagekit.io/mani2/image/juicy-dates-wooden-plate-wooden-table-high-quality-photo.jpg?updatedAt=1748756658770",
  
    title: "Date palme",
    price: "$35",
    rating: "4.8",
    offer: "12",
    total_no_user: "520"
  },
  {
    id: "g2",
    image: "https://ik.imagekit.io/mani2/image/top-close-up-view-grapes-bowl-bunches-black-raisins-cream-table.jpg?updatedAt=1748715958317",
    title: "Dry Grape",
    price: "$32",
    rating: "4.6",
    offer: "10",
    total_no_user: "480"
  },
  {
    id: "g3",
    image: "https://ik.imagekit.io/mani2/image/healthy-closeup-delicious-white-sweet.jpg?updatedAt=1748799885923",
    title: "Honey Jar",
    price: "$58",
    rating: "4.5",
    offer: "8",
    total_no_user: "650"
  },
  {
    id: "g4",
    image: "https://ik.imagekit.io/mani2/image/raw-cashews-nuts-bowl-dark-background.jpg?updhttps://ik.imagekit.io/mani2/image/raw-cashews-nuts-bowl-dark-background.jpg?updatedAt=1748756557839atedAt=1748715323699",
    title: "Cashew Nut",
    price: "$15",
    rating: "4.4",
    offer: "5",
    total_no_user: "720"
  },
  {
    id: "g5",
    images: ["https://ik.imagekit.io/mani2/image/rice.png?updatedAt=1751797070638",
      "https://ik.imagekit.io/mani2/image/sack-rice-seed-with-white-rice-small-wooden-spoon-rice-plant.png?updatedAt=1751797365994"
    ],
    title: "Raw Rice",
    price: "$42",
    rating: "4.7",
    offer: "15",
    total_no_user: "380"
  },
  {
    id: "g6",
    image: "https://ik.imagekit.io/mani2/image/almond.jpg?updatedAt=1748756546661",
    title: "Almond",
    price: "$38",
    rating: "4.6",
    offer: "12",
    total_no_user: "290"
  },

];

const ProductCard = ({ id, image, images, title, price, rating, offer, total_no_user }) => {
  // Calculate star display with better error handling
  const maxStars = 5;
  const ratingNum = parseFloat(rating) || 0;
  const filledStars = Math.floor(ratingNum);
  const hasHalfStar = ratingNum - filledStars >= 0.25 && ratingNum - filledStars < 0.75;
  const emptyStars = maxStars - filledStars - (hasHalfStar ? 1 : 0);

  // Use first image from images array if available, else fallback to image
  const displayImage = images && images.length > 0 ? images[0] : image;

  // Determine encouraging badges based on rating and offer
  const getEncouragingBadges = () => {
    const badges = [];
    if (ratingNum >= 4.8) {
      badges.push({ text: "🔥 Popular SELLER", color: "bg-yellow-500" });
    }
    return badges;
  };

  const badges = getEncouragingBadges();

  return (
    <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800 hover:shadow-lg transition-all duration-300 hover:scale-105">
      <div className="h-56 w-full relative">
        <Link to="/">
          <img className="mx-auto h-full dark:hidden rounded-lg" src={displayImage} alt={title} />
          <img className="mx-auto hidden h-full dark:block rounded-lg" src={displayImage} alt="dark-mode" />
        </Link>

        {/* Encouraging Badges Overlay */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {badges.map((badge, index) => (
            <span key={index} className={`${badge.color} text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg animate-none`}>
              {badge.text}
            </span>
          ))}
        </div>
      </div>

      <div className="pt-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          <span className="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-primary-900 dark:text-primary-300">
            Offer up to {offer}%
          </span>
        </div>

        <a href="#" className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">
          {title}
        </a>

        {/* Encouraging Subtitle */}
        <p className="text-sm text-green-600 font-medium mt-1">
          {ratingNum >= 4.8 ? "🔥 Customers love this!" :
            ratingNum >= 4.5 ? "⭐ Highly recommended!" :
              "✨ Great value for money!"}
        </p>

        <div className="mt-2 flex items-center gap-2">
          {/* Dynamic rating stars */}
          {Array.from({ length: filledStars }).map((_, idx) => (
            <svg
              key={`star-filled-${idx}`}
              className="h-4 w-4 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
            </svg>
          ))}
          {hasHalfStar && (
            <svg
              className="h-4 w-4 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="half-gradient" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="50%" stopColor="#facc15" />
                  <stop offset="50%" stopColor="#d1d5db" />
                </linearGradient>
              </defs>
              <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" fill="url(#half-gradient)" />
            </svg>
          )}
          {Array.from({ length: emptyStars }).map((_, idx) => (
            <svg
              key={`star-empty-${idx}`}
              className="h-4 w-4 text-gray-300 dark:text-gray-600"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
            </svg>
          ))}
          <p className="text-sm font-medium text-gray-900 dark:text-white">{rating}</p>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">({total_no_user})</p>
        </div>

        <ul className="mt-2 flex items-center gap-4">
          <li className="flex items-center gap-2">
            🚚 <span className="text-sm font-medium text-green-500 dark:text-gray-400">Shipping Within 4 Hours </span>
          </li>
        </ul>

        <div className="mt-4 flex items-center justify-between gap-4">
          <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">{price}</p>
          <Link
            to={`/products/${id}`}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-green-300 via-green-600 to-green-700 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 ease-in-out hover:from-green-500 hover:via-green-700 hover:to-green-800 hover:scale-105 active:scale-95 active:shadow-inner focus:outline-none focus:ring-4 focus:ring-green-400"
          >
            🧺 <span>Buy Now</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

const ProductLayout = () => {
  const [actCategory, setActCategory] = useState("fruits");
  const { isLoading } = UseFetchProducts();

  const CategoryButton = [
    {
      id: "fruits",
      label: "Fruits",
      img: "https://ik.imagekit.io/mani2/image/orange-juicy-ripe-circle-citrus123.png?updatedAt=1750871066761"
    },
    {
      id: "vegetable",
      label: "Vegetable",
      img: "https://ik.imagekit.io/jap5d6wbb/image/fresh-red-tomatoes121.png?updatedAt=1749059290648"
    },
    {
      id: "groceries",
      label: "Groceries",
      img: "https://ik.imagekit.io/mani2/image/juicy-dates-wooden-plate-wooden-table-high-quality-photo.jpg?updatedAt=1748756658770"
    }
  ];

  if (isLoading) {
    return <ShimmerLayout />;
  }

  return (
    <div className="2xl:container mx-auto">
      <div className="w-[90%] mx-auto flex justify-center mt-14 gap-8">
        {CategoryButton.map((category) => (
          <div key={category.id} className="flex flex-col items-center cursor-pointer" onClick={() => setActCategory(category.id)}>
            <img
              src={category.img}
              alt={category.label}
              className={`w-24 h-24 object-cover rounded-full border-4 transition-all duration-300 ${
                actCategory === category.id 
                  ? 'border-blue-600 shadow-lg scale-110 dark:border-blue-400 bg-gray-100 dark:bg-gray-700' 
                  : 'border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800'
              }`}
            />
            <span className={`mt-2 text-lg font-semibold transition-all duration-300 ${
              actCategory === category.id 
                ? 'text-blue-600 dark:text-blue-400' 
                : 'text-gray-700 dark:text-white'
            }`}>
              {category.label}
            </span>
          </div>
        ))}
      </div>

      {/* Fruits Section */}
      {actCategory === 'fruits' && (
        <>
          <div className="w-[90%] mx-auto mt-12 text-center">
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
              Fresh Fruits Just For You 🍓🍍🍎
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Discover our wide selection of handpicked, sweet delicious fruits!
            </p>
          </div>
          <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 mt-12 mb-16">
            {productData.map((item) => (
              <ProductCard
                key={uuidv4()}
                id={item.id}
                image={item.image}
                images={item.images}
                title={item.title}
                price={item.price}
                rating={item.rating}
                offer={item.offer}
                total_no_user={item.total_no_user}
              />
            ))}
          </div>
        </>
      )}

      {/* Vegetables Section */}
      {actCategory === 'vegetable' && (
        <>
          <div className="w-[90%] mx-auto mt-12 text-center">
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
              Fresh Vegetables 🥬🥕🥦
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Farm-fresh vegetables delivered to your doorstep!
            </p>
          </div>
          <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 mt-12 mb-16">
            {vegetableData.map((item) => (
              <ProductCard
                key={uuidv4()}
                id={item.id}
                image={item.image}
                images={item.images}
                title={item.title}
                price={item.price}
                rating={item.rating}
                offer={item.offer}
                total_no_user={item.total_no_user}
              />
            ))}
          </div>
        </>
      )}

      {/* Groceries Section */}
      {actCategory === 'groceries' && (
        <>
          <div className="w-[90%] mx-auto mt-12 text-center">
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
              Essential Groceries 🍚🫖☕
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              All your daily grocery needs in one place!
            </p>
          </div>
          <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 mt-12 mb-16">
            {groceryData.map((item) => (
              <ProductCard
                key={uuidv4()}
                id={item.id}
                image={item.image}
                images={item.images}
                title={item.title}
                price={item.price}
                rating={item.rating}
                offer={item.offer}
                total_no_user={item.total_no_user}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export { productData, vegetableData, groceryData };
export default ProductLayout;

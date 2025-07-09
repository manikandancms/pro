import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import ShimmerLayout from "../shimmer/Shimmer.jsx";

const HeroSection = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const intervalRef = useRef(null);

    const transitionDuration = 50;   // 0.5s for transition
    const displayDuration = 1500;     // 2s display time for each card
    const totalCycle = displayDuration + transitionDuration;

    const heroCards = [
        {
            title: "Fresh Fruits",
            subtitle: "50% OFF!",
            description: "Get fresh organic fruits delivered to your doorstep",
            image: "https://ik.imagekit.io/mani2/image/allfruits.png?updatedAt=1751778459146",
            buttonText: "Shop Fruits",
            bgColor: "bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500",
            indicatorColor: "bg-pink-500",
            textColor: "text-white",
            linkTo: "/products"
        },
        {
            title: "Organic Vegetables",
            subtitle: "100% Natural!",
            description: "Premium organic vegetables for healthy living",
            image: "https://ik.imagekit.io/mani2/image/Allveg-edited.png?updatedAt=1751777955854",
            buttonText: "Shop Organic",
            bgColor: "bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500",
            indicatorColor: "bg-emerald-500",
            textColor: "text-white",
            linkTo: "/vegetables"
        },
        {
            title: "Daily Groceries",
            subtitle: "Free Delivery!",
            description: "All your daily grocery needs in one place",
            image: "https://ik.imagekit.io/mani2/edited-groce.png?updatedAt=1751781122461",
            buttonText: "Shop Groceries",
            bgColor: "bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-700",
            indicatorColor: "bg-indigo-500",
            textColor: "text-white",
            linkTo: "/groceries"
        }
    ];

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        startCarousel();
        return () => clearInterval(intervalRef.current);
    }, []);

    const startCarousel = () => {
        intervalRef.current = setInterval(() => {
            setCurrentCardIndex(prev => (prev + 1) % heroCards.length);
        }, totalCycle);
    };

    const goToCard = (index) => {
        setCurrentCardIndex(index);
        if (intervalRef.current) clearInterval(intervalRef.current);
        startCarousel();
    };

    if (isLoading) return <ShimmerLayout />;

    return (
        <div className="relative overflow-hidden mt-[calc(3.5rem+20px)] h-[calc(30vh+20px)] md:h-[calc(70vh+20px)] w-[95%] mx-auto rounded-lg">
            {/* Carousel Container */}
            <div
                className="flex h-full"
                style={{
                    transform: `translateX(-${currentCardIndex * 100}%)`,
                    transition: `transform ${transitionDuration}ms ease-in-out`,
                    width: `${heroCards.length * 35}%`
                }}
            >
                {heroCards.map((card, index) => (
                    <div
                        key={index}
                        className="h-full flex-shrink-0"
                        style={{ width: '100%' }}
                    >
                        <section className={`h-full w-full flex items-center justify-center p-8 ${card.bgColor} relative`}>
                            {/* Left Side - Text Only */}
                            <div className="flex-1 text-left max-w-md z-10 pr-8">
                                <h2 className={`text-sm md:text-5xl font-bold ${card.textColor} mb-4 drop-shadow-lg`}>
                                    {card.title}
                                </h2>
                                <p className="text-xs md:text-2xl font-semibold text-yellow-300 mb-4 drop-shadow-lg">
                                    {card.subtitle}
                                </p>
                                <p className={`text-xs md:text-xl ${card.textColor} mb-6 drop-shadow-lg opacity-90`}>
                                    {card.description}
                                </p>
                            </div>

                            {/* Right Side - Image */}
                            <div className="flex-1 flex justify-center items-center z-10">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl"></div>
                                    <img
                                        className="relative w-32 h-28 md:w-80 md:h-80 object-cover rounded-lg drop-shadow-lg"
                                        src={card.image}
                                        alt={`${card.title.toLowerCase()} illustration`}
                                        onError={(e) => {
                                            e.target.src = 'https://via.placeholder.com/400x400?text=Image+Not+Found';
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Indicator Bubble */}
                            <div className={`absolute top-6 right-6 w-5 h-5 rounded-full ${card.indicatorColor} shadow-lg z-10`} />

                            {/* Background Pattern */}
                            <div className="absolute inset-0 opacity-15">
                                <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full"></div>
                                <div className="absolute bottom-10 right-10 w-32 h-32 bg-white rounded-full"></div>
                                <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full"></div>

                            </div>
                        </section>
                    </div>
                ))}
            </div>

            {/* Navigation Indicators */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
                {heroCards.map((card, index) => (
                    <button
                        key={index}
                        onClick={() => goToCard(index)}
                        className={`
                            w-4 h-4 rounded-full 
                            ${card.indicatorColor} 
                            transition-all duration-300 
                            ${index === currentCardIndex ? 'scale-125 shadow-xl border-2 border-white' : 'opacity-60 hover:opacity-80'}
                        `}
                        aria-label={`Go to card ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroSection;
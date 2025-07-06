import { Link } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import ShimmerLayout from "../shimmer/Shimmer.jsx"

const VegetableHeroSection = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const intervalRef = useRef(null);

    // Array of 4 different vegetable hero cards
    const heroCards = [
        {
            title: "Fresh Vegetables",
            subtitle: "Farm to Table!",
            description: "Fresh vegetables straight from local farms",
            image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&h=500&fit=crop",
            buttonText: "Shop Vegetables",
            bgColor: "bg-gradient-to-r from-green-400 to-emerald-600"
        },
        {
            title: "Organic Vegetables",
            subtitle: "100% Natural!",
            description: "Certified organic vegetables for healthy living",
            image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=500&fit=crop",
            buttonText: "Shop Organic",
            bgColor: "bg-gradient-to-r from-lime-400 to-green-600"
        },
        {
            title: "Seasonal Vegetables",
            subtitle: "Fresh & Local!",
            description: "Seasonal vegetables picked at peak freshness",
            image: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=500&h=500&fit=crop",
            buttonText: "Shop Seasonal",
            bgColor: "bg-gradient-to-r from-teal-400 to-cyan-600"
        },
        {
            title: "Premium Vegetables",
            subtitle: "Top Quality!",
            description: "Premium grade vegetables for discerning customers",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop",
            buttonText: "Shop Premium",
            bgColor: "bg-gradient-to-r from-emerald-400 to-teal-600"
        }
    ];

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        // Start continuous carousel rotation
        const startCarousel = () => {
            intervalRef.current = setInterval(() => {
                setCurrentCardIndex((prevIndex) => {
                    const nextIndex = prevIndex === heroCards.length - 1 ? 0 : prevIndex + 1;
                    return nextIndex;
                });
            }, 5000); // 5 seconds
        };

        // Start the carousel immediately
        startCarousel();

        // Cleanup function to clear interval
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [heroCards.length]);

    // Function to handle manual navigation
    const goToCard = (index) => {
        setCurrentCardIndex(index);
        // Restart the interval after manual navigation
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        intervalRef.current = setInterval(() => {
            setCurrentCardIndex((prevIndex) => {
                const nextIndex = prevIndex === heroCards.length - 1 ? 0 : prevIndex + 1;
                return nextIndex;
            });
        }, 5000); // 5 seconds
    };

    if (isLoading) {
        return <ShimmerLayout />;
    }

    return (
        <>
            <div className="relative overflow-hidden mt-[calc(3.5rem+20px)] h-[calc(70vh+20px)] w-[95%] mx-auto rounded-lg">
                {/* Hero Cards Carousel */}
                <div 
                    className="flex transition-transform duration-500 ease-in-out h-full"
                    style={{ 
                        transform: `translateX(-${currentCardIndex * 100}%)`,
                        width: `${heroCards.length * 100}%`
                    }}
                >
                    {heroCards.map((card, index) => (
                        <div 
                            key={index}
                            className="w-full flex-shrink-0 h-full"
                            style={{ width: `${100 / heroCards.length}%` }}
                        >
                            <section className={`py-8 antialiased md:py-16 h-full flex items-center justify-center pt-5 pb-10 rounded-lg ${card.bgColor} shadow-2xl`}>
                                <div className="2xl:container mx-auto grid max-w-screen-xl px-4 md:grid-cols-12 lg:gap-12 xl:gap-0">
                                    <div className="w-full mx-auto content-center justify-self-start text-center md:col-span-7 md:text-start">
                                        <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-black md:text-4xl lg:text-5xl xl:text-6xl drop-shadow-lg">
                                            {card.title}
                                            <br />
                                            <span className="text-red-600 font-bold">{card.subtitle}</span>
                                        </h1>
                                        <p className="mb-4 max-w-2xln font-bold text-black text-2xl md:mb-12 md:text-4xl lg:mb-5 lg:text-xl drop-shadow-lg">
                                            {card.description}
                                        </p>
                                        <div className="hidden md:flex md:justify-start">
                                            <Link
                                                to="/vegetables"
                                                className="inline-block w-auto rounded-full bg-black/80 backdrop-blur-sm px-3 py-1.5 text-xs font-bold text-white shadow-lg transition-all duration-300 hover:bg-black hover:scale-105 focus:outline-none focus:ring-4 focus:ring-black/50 md:px-4 md:py-2 md:text-sm lg:px-5 lg:py-2.5 lg:text-base border border-black/30"
                                            >
                                                {card.buttonText}
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="mt-8 flex justify-center items-center md:col-span-5 md:mt-0">
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-white/10 rounded-full blur-xl"></div>
                                            <img
                                                className="relative w-64 h-64 object-contain md:w-80 md:h-80 lg:w-96 lg:h-96 drop-shadow-2xl"
                                                src={card.image}
                                                alt={`${card.title.toLowerCase()} illustration ${index + 1}`}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center px-4 mt-auto md:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2">
                                    <Link
                                        to="/vegetables"
                                        className="inline-block w-auto rounded-full bg-black/80 backdrop-blur-sm px-3 py-1.5 text-xs font-bold text-white shadow-lg transition-all duration-300 hover:bg-black hover:scale-105 focus:outline-none focus:ring-4 focus:ring-black/50 md:px-4 md:py-2 md:text-sm lg:px-5 lg:py-2.5 lg:text-base border border-black/30"
                                    >
                                        {card.buttonText}
                                    </Link>
                                </div>
                            </section>
                        </div>
                    ))}
                </div>
                
                {/* Carousel Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                    {heroCards.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToCard(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                index === currentCardIndex 
                                    ? 'bg-black scale-125 shadow-lg' 
                                    : 'bg-black/50 hover:bg-black/75'
                            }`}
                            aria-label={`Go to card ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default VegetableHeroSection 
import { Link } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import ShimmerLayout from "../shimmer/Shimmer.jsx"

const GroceriesHeroSection = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const intervalRef = useRef(null);

    // Array of 4 different grocery hero cards
    const heroCards = [
        {
            title: "Daily Groceries",
            subtitle: "Free Delivery!",
            description: "All your daily grocery needs in one place",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=500&fit=crop",
            buttonText: "Shop Groceries",
            bgColor: "bg-gradient-to-r from-blue-400 to-purple-600"
        },
        {
            title: "Pantry Essentials",
            subtitle: "Stock Up Now!",
            description: "Essential pantry items for every household",
            image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&h=500&fit=crop",
            buttonText: "Shop Essentials",
            bgColor: "bg-gradient-to-r from-indigo-400 to-blue-600"
        },
        {
            title: "Household Items",
            subtitle: "Everything You Need!",
            description: "Complete household supplies and cleaning products",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=500&fit=crop",
            buttonText: "Shop Household",
            bgColor: "bg-gradient-to-r from-purple-400 to-pink-600"
        },
        {
            title: "Bulk Shopping",
            subtitle: "Save More!",
            description: "Buy in bulk and save money on groceries",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=500&fit=crop",
            buttonText: "Shop Bulk",
            bgColor: "bg-gradient-to-r from-violet-400 to-purple-600"
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
                                        <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-white md:text-4xl lg:text-5xl xl:text-6xl drop-shadow-lg">
                                            {card.title}
                                            <br />
                                            <span className="text-yellow-300 font-bold">{card.subtitle}</span>
                                        </h1>
                                        <p className="mb-4 max-w-2xln font-bold text-white text-2xl md:mb-12 md:text-4xl lg:mb-5 lg:text-xl drop-shadow-lg">
                                            {card.description}
                                        </p>
                                        <div className="hidden md:flex md:justify-start">
                                            <Link
                                                to="/groceries"
                                                className="inline-block w-auto rounded-full bg-white/20 backdrop-blur-sm px-3 py-1.5 text-xs font-bold text-white shadow-lg transition-all duration-300 hover:bg-white/30 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/50 md:px-4 md:py-2 md:text-sm lg:px-5 lg:py-2.5 lg:text-base border border-white/30"
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
                                        to="/groceries"
                                        className="inline-block w-auto rounded-full bg-white/20 backdrop-blur-sm px-3 py-1.5 text-xs font-bold text-white shadow-lg transition-all duration-300 hover:bg-white/30 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/50 md:px-4 md:py-2 md:text-sm lg:px-5 lg:py-2.5 lg:text-base border border-white/30"
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
                                    ? 'bg-white scale-125 shadow-lg' 
                                    : 'bg-white/50 hover:bg-white/75'
                            }`}
                            aria-label={`Go to card ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default GroceriesHeroSection 
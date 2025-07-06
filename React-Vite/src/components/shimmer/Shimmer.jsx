import React from 'react'


const ShimmerCard = () => {
  return (
    <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800 animate-pulse">
      <div className="h-56 w-full bg-gray-300 dark:bg-gray-600 rounded-lg mb-4"></div>
      <div className="pt-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          <div className="h-6 w-24 bg-gray-300 dark:bg-gray-600 rounded"></div>
        </div>
        <div className="h-6 w-32 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
        <div className="mt-2 flex items-center gap-2">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="h-4 w-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
          ))}
          <div className="h-4 w-8 bg-gray-300 dark:bg-gray-600 rounded"></div>
          <div className="h-4 w-12 bg-gray-300 dark:bg-gray-600 rounded"></div>
        </div>
        <ul className="mt-2 flex items-center gap-4">
          <li className="flex items-center gap-2">
            <div className="h-4 w-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
            <div className="h-4 w-32 bg-gray-300 dark:bg-gray-600 rounded"></div>
          </li>
        </ul>
        <div className="mt-4 flex items-center justify-between gap-4">
          <div className="h-8 w-16 bg-gray-300 dark:bg-gray-600 rounded"></div>
          <div className="h-10 w-24 bg-gray-300 dark:bg-gray-600 rounded"></div>
        </div>
      </div>
    </div>
  );
};

const ShimmerLayout = () => {
  return (
    <div className="2xl:container mx-auto">
      <div className="w-[90%] mx-auto flex justify-center mt-14 gap-4">
        {[1, 2, 3].map((item) => (
          <div key={item} className="h-12 w-32 bg-gray-300 dark:bg-gray-600 rounded-full animate-pulse"></div>
        ))}
      </div>
      
      <div className="w-[90%] mx-auto mt-12 text-center">
        <div className="h-12 w-96 bg-gray-300 dark:bg-gray-600 rounded mx-auto mb-4 animate-pulse"></div>
        <div className="h-6 w-80 bg-gray-300 dark:bg-gray-600 rounded mx-auto animate-pulse"></div>
      </div>

      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 mt-12 mb-16">
        {[...Array(9)].map((_, index) => (
          <ShimmerCard key={index} />
        ))}
      </div>
    </div>
  );
};
export default ShimmerLayout
import { useContext, useState, useEffect } from "react";
import UserContext from "../Store/UserContext";
import ShimmerLayout from "../shimmer/Shimmer.jsx";

const Footer = () => {
  const data = useContext(UserContext)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <ShimmerLayout />;
  }

  return (
    <div className="2xl:container mx-auto mt-10">
      <div className="w-full mx-auto grid grid-cols-1 bg-gray-800 rounded-t-lg">
        <div className="text-center flex flex-col justify-center items-center mt-0">
           
            <img
              src="https://ik.imagekit.io/mani2/image/new-Ecom@1,25x.png?updatedAt=1750886673213"
              alt="logo-"
              className="h-[90px] md:h-[95px] "
            />
        
          <p className="font-[Poppins] font-bold text-[18px] leading-[20px] text-white mb-2">
            Contact Us
          </p>
          <p className="font-[Poppins] font-bold text-[14px] leading-[20px] text-white">
            Malgreenshoping@.com
          </p>
          <p className="font-[Poppins] font-bold text-[14px] leading-[20px] text-white">
            Phone: +91 9123456789, Telephone: 0416 223334444
          </p>
          <p className="font-[Poppins] mt-10 font-normal text-[18px] leading-[20px] text-white">
            Address:
          </p>
          <p className="font-[Poppins] font-normal text-[14px] leading-[30px] text-white">
            123 Ayur Vigyan Nagar, Chennai, Tamil Nadu, India. <br />
            All Rights is Reserved by Clicker Corporate - {data.academicYear}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer
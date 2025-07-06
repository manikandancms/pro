import React, { useEffect, useState } from 'react'

const UseFetchProducts = () => {
  const [isLoading, setIsLoading] = useState(true);
 
  useEffect(() => {
    // Simulate data fetching delay
    setTimeout(() => {
      setIsLoading(false);
    }, 600); // Optional loading delay
  }, []);

  return { isLoading };
}

export default UseFetchProducts

import { useEffect, useState } from "react"



const Sample = () => {

    const [counter, setCounter] = useState(0);
    const [phone, setPhone] = useState({
        model: "roma",
        name1: "Apple",
        year: "2025",
        color: "Blue"
    });

    const [count, setCount] = useState(0);


        useEffect(() => {
        const interval = setInterval(() => {
            setCount(prev => {
                if (prev < 5) {
                    return prev + 1;
                } else {
                    clearInterval(interval);
                    return prev;
                }
            });
        }, 1000);

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);


    // useEffect(() => {

    //     setTimeout(() => {
    //         setCount(prev =>    prev==<number prev + 1)
        
    //     }, 2000)
    // },[]
    // );

    const colorchange1 = () => {
        setPhone((prev) => {
            return { ...prev, color: "Red" }
        })
    }




    const Increament = () => {
        setCounter(prev => prev + 1)
       

    }

    const Decreament = () => {
        setCounter(counter - 1)

    }

    const Reset = () => {
        setCounter(0)

    }

    const colorchange = () => {
        setIphone("Red")
    }


    return (
        <>
            <p className=" mt-10">Counter: {counter}</p>

            <div className="space-x-5 " >     <button onClick={Increament} class="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-lg font-semibold rounded-2xl shadow-md hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">Add by 1</button>
                <button className="p-3 " onClick={Reset} class="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-lg font-semibold rounded-2xl shadow-md hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">Reset</button>
                <button className="p-3 " onClick={Decreament} class="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-lg font-semibold rounded-2xl shadow-md hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">Remove by 1</button>
            </div>


            <div>
                <h2>{phone.brand}Red </h2>
                <p>my {phone.color} {phone.name1} {phone.model} in {phone.year}</p>
                <button onClick={colorchange1} class="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-lg font-semibold rounded-2xl shadow-md hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">Red</button>



            </div>

            <div>
                <p>my counter is stats from {count}</p>


            </div>



        </>



    )
}

export default Sample
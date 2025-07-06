import { useState } from "react"


const Value = () => {

    let [value, setValue] = useState(0)
      let [name, setName] = useState("Mani")
        let [bool, setBool] = useState(true)

    return (
        <>
            <div >
                <div>
                    <p>vaule</p>
                    <p>{value}</p>
                </div>

                <div className="space-x-4">
                    <button onClick={() => {
                        setValue(value + 1)
                        console.log(value)
                    }} className="inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >+




                    </button>

                 

                    <button onClick={() => {
                        setValue(0)
                        console.log(value)
                    }} className="inline-flex items-center rounded-lg  bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >Reset




                    </button>


                    <button onClick={() => {
                        setValue(value - 1)
                        console.log(value)
                    }} className="inline-flex items-center rounded-lg  bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >-




                    </button>
                </div>

            </div>

            <div className="mt-5">
                <div>
                    <p>Name</p>
                    <p>{name}</p>

                </div>

                <div>

                    
                    <button onClick={() => {
                        setName("Ram")
                        console.log(name)
                    }} className="inline-flex items-center rounded-lg  bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >Change




                    </button>
                    

                </div>
            </div>

            <div className="mt-5">
                <div>
                    <p>Boolean</p>
                    <p>{bool ? "🚀" : "❌"}</p>

                </div>


                <div>

                    
                    <button onClick={() => {
                        setBool(false)
                        console.log(bool)
                    }} className="inline-flex items-center rounded-lg  bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >Change Emoji




                    </button>

                </div>
            </div>

        </>

    )
}

export default Value
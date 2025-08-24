import { useState } from "react"
import "../style.css"
import { IoAddCircleSharp } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import { CiSaveDown2 } from "react-icons/ci";
import { IoIosAddCircleOutline } from "react-icons/io";

const App = () => {
    let [items, setItems] = useState([
        { id: 1, label: "HTML & CSS", checked: true },
        { id: 2, label: "JavaScript", checked: true },
        { id: 3, label: "React", checked: false },
    ]);

    let [newitem, setNewitem] = useState("")
    let [edithandle, setEditHandle] = useState(false);
    let [currentEleid, setCurrentEleid] = useState(null)


    let newChecked = (id) => {
        let updateCheck = items.map((item) => { return item.id === id ? { ...item, checked: !item.checked } : item })

        setItems(updateCheck)
    }




    let updateEdit = (id) => {
        let newlistitem = items.find(item => item.id === id)
        setEditHandle(true)
        setCurrentEleid(id)
        setNewitem(newlistitem.label)
    }

    let handleAddorSave = () => {

        if (edithandle) {
            let newlistitems = items.map((item) => { return item.id === currentEleid ? { ...item, label: newitem } : item })

            setItems(newlistitems)
            setCurrentEleid(null)
            setNewitem(" ")
            setEditHandle(false)
        }

        else {
            setItems([...items, {
                id: items.length + 1, label: newitem, checked: false

            }])

            setNewitem(" ")

        }



    }

    let handleDelete = (id) => {


        let newDel = items.filter((item) => item.id !== id).map((item, index) => {
            return {
                ...item, id: index + 1
            }
        })
        setItems(newDel)

    }








    return (
        <main className="max-2xl: mx-auto flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className=" w-[90%] mx-autp bg-white shadow-md  rounded-lg p-6 ">
                <h1 className="font-semibold text-2xl text-center text-slate-800 mb-5">Do-To list</h1>
                <div className="flex items-center gap-2 mb-5">
                    <input type="text" placeholder="Add new items..." className="border border-gray-600"
                        value={newitem}
                        onChange={(e) => { setNewitem(e.target.value) }} />
                    <button className="px-2 py-1 bg-white border border-slate-950" onClick={handleAddorSave}>{edithandle ? <CiSaveDown2 className="text-green-800 text-xl " /> : <IoIosAddCircleOutline className="text-blue-800 text-xl " />}</button>
                </div>


                <ul>
                    {
                        items.map((item) => {
                            return (
                                <li key={item.id} className="flex items-center  gap-2 mb-5">
                                    <input type="checkbox" checked={item.checked} onChange={() => newChecked(item.id)} />
                                    <label > {item.label}</label>
                                    <CiEdit role="botton" tabIndex={0} className="outline-none cursor-pointer" onClick={() => updateEdit(item.id)} />
                                    <RiDeleteBin6Line role="botton" tabIndex={0} className="outline-none text-red-500 text-lg cursor-pointer" onClick={() => handleDelete(item.id)} />


                                </li>
                            )
                        })
                    }
                </ul>
            </div >


        </main>
    )
}

export default App

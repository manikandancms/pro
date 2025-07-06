import { useEffect, useState } from "react"

const useOnlineStatus = ()=>{
    const [online, SetOnline] = useState(navigator.onLine)


    useEffect(()=>{
        addEventListener("online", ()=>{
            SetOnline(true)
        })
    });

       useEffect(()=>{
        addEventListener("offline", ()=>{
            SetOnline(false)
        })
    },[online])



    return online
}

export default useOnlineStatus


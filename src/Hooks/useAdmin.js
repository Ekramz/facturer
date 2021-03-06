import { useState, useEffect } from 'react'

const useAdmin = user => {
    const [admin, setAdmin] = useState('')
    const [adminLoading, setAdminLoading]=useState(true)
    useEffect(()=>{
        const email = user?.email
        fetch(`https://powerful-caverns-14505.herokuapp.com/admin/${email}`,{
                method:"GET",
                headers:{
                    "content-type":"application/json", 
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
        .then(res=>res.json())
        .then(data=>{
            setAdminLoading(false)
            setAdmin(data.admin)
        })
    },[user])

    

return [admin,adminLoading]
}


export default useAdmin
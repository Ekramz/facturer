import { useState, useEffect } from 'react'

const useToken = user => {
    const [token, setToken] = useState('')

    

    useEffect(() => {
        const email=user?.user?.email
        const currentUser={email}
       if(email){

        fetch(`https://powerful-caverns-14505.herokuapp.com/user/${email}`,{
            method:'PUT',
            headers:{
                'content-Type':'application/json', 
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body:JSON.stringify(currentUser)
        })
        .then(res=>res.json())
        .then(data=>{
            localStorage.setItem('accessToken',data.token)
            setToken(data.token)

        })
       }
    }, [user])

return [token]
}


export default useToken
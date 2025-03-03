import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const VerifyAccount = () => {
    const {token} = useParams()
    const [verifying, setVerifying] = useState(false)
    const [verification, setVerification] = useState()

    useEffect(()=>{
        handleVerifyAcc()
    },[])


    const handleVerifyAcc = async ()=>{
        setVerifying(true)
        try {
            const res = await fetch(`http://localhost:3000/api/v1/auth/verify/${token}`, {method: "POST"})
            const data = await res.json()
            console.log(data);
            setVerification(data) 
            
        } catch (error) {
            console.error(error)
        } finally{
            setVerifying(false)
        }
    }
    
  return (
    <div>
      {
        verifying ? <p>Verifying...</p> : (
            <p style={{color: verification?.status == "success" ? "green" : "red"}}>{verification?.message}</p>
        )
      }
    </div>
  )
}

export default VerifyAccount

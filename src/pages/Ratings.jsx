import { useState } from "react"
import PrimaryButton from "../components/Button"

const Ratings = () => {
const emptyRatings = {
    title: "",
    body: "",
    tags: "",
}
const [ratings, setRatings] = useState(emptyRatings)

const [submit, setSubmit] = useState(false)
const handleInput = (e) =>{
    const {name, value} = e.target
    setRatings((prev)=>({...prev,[name]:value,

    }))
    console.log(ratings);
    
}
const handleSubmit = async (e) =>{
e.preventDefault()
setSubmit(true)
try {
    const res = await fetch ('http://localhost:3000/api/v1/uploadRatings',{
        method: "POST",
        body: JSON.stringify(ratings),
        headers:{
            "Content-Type" : "application/json"
        }
    })
    const data = await res.json()
    setRatings(emptyRatings)
    console.log(data);
    if(res.ok){
        toast.success(data.message)
        navigate("/counter")
    }
} catch (error) {
    console.error(error);
}
}

  return (
    <>
   <section style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
   }}>
   <h1>Ratings Upload</h1>
<form onSubmit={handleSubmit}>
<div style={{
         display: "flex",
         flexDirection: "column",
         alignItems: "center",
         gap: "10px"
    }}>
        <input type="text" placeholder="title" name="title" onChange={handleInput} value={ratings.title}/>
        <input type="text" placeholder="Body" name="body" style={{
            height: "50px"
        }} onChange={handleInput} value={ratings.body}/>
        <input type="text" placeholder="tags" name="tags" onChange={handleInput} value={ratings.tags}/>
    </div>
    <div style={{
        marginTop: "10px"
    }}>
        <button type="submit">Submit</button>
    </div>
</form>
   </section>
    </>
  )
}

export default Ratings


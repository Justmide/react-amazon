import { useState } from "react"

// A State piece of a object that holds the data that can change over time after the affect look (rendering) and behaviour of the application

const Counter = () => {
    // const [count, setCount] = useState(1)
    //   Variable, function  default value 
   const [form, setform] = useState({
    username: "",
    email: "",
    password: ""
   })
  
   const [show, setShow] = useState (false)

   const handleShowPassword = () =>{
    setShow((prev) => !prev)
   }

//  const fetchProducts = async () =>{
//     try {
//         const res = await fetch("http://localhost:3000/users")
//         const data = await res.text()
//         console.log(data);
        
//     } catch (error) {
//         console.log(err);
        
//     }
//  }


   const handleInput = (e) => {
    const { name, value } = e.target;
    setform((prev)=>({...prev, [name]:value}))
    console.log(form);
    
   };

    // const handleClick = () =>{
    //     prev - pevious value 
    //   setCount((prev)=>(prev + 1))
    //     setCount((prev)=>(prev + 1)) //reassigning a constant value
    // }
  return (
    <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "300px",
        margin: "3rem auto",
    }}>
      <input type="text" name="username" placeholder="name" id="nameEl" onChange={handleInput}/>
      <input type="email" name="email" placeholder="email" id="emailEl" onChange={handleInput}/>
      <input type={setShow ? "text" : "password"} name="password" placeholder="password" onChange={handleInput}/>
    {/* <p>Count: {count}</p> */}
    {/* <button onClick={handleClick}>Click</button> */}
    <button onClick={handleInput}>Show</button>
    <div>
      
        <p>name: {form.username}</p>
        <p>email: {form.email}</p>
        <p>password: {form.password}</p>
       
    </div>
    </div>
    
  )
}


export default Counter

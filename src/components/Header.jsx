import { Link } from "react-router-dom"
import PrimaryButton from "./Button"
import { useContext } from "react"
import { authContext } from "../Context/AuthContext"

const logo = "SotaTrade Inc."
const logo1 = "SotaTrade"
const country = 'nigeria'


     
const Header = () => {
    const handleSignUp = ()=>{
        alert('sign up from header!')
    }
     const {user, signUp} = useContext(authContext)
  return (
    
    <div style={
      {display: "flex", 
      alignContent: "center", 
      justifyContent: "space-between", 
      padding: "20px", 
      height: "80px", 
      width: "100%", 
      background:"linear-gradient(33deg, rgba(0,0,0,1) 0%, rgba(40,114,214,1) 49%, rgba(7,8,8,1) 99%)", alignItems: "center",
      }}>
       <h1 style={{
        color: "whitesmoke",
        marginLeft: "30px",
        fontSize: "30px",
        fontFamily: "cursive"
       }} >{country == "nigeria" ? logo1 : logo}</h1>
      <div style={{display: "flex", 
        border: "1px solid rgb(160, 200, 245)", 
        height: "40px",
        paddingRight: "20px",
        paddingLeft: "20px",
        borderRadius: "20px",
        background: "rgba(146, 192, 245, 0.08)", 
        }}>
      <ul style={{ 
        textTransform: "none", 
        alignContent: "center",
        gap: "2rem", display: "flex", 
        alignItems: "center", 
        justifyContent: "space-between", 
        listStyle: "none"
        }}>
      <Link style={{textDecoration: "none", color: "white", fontSize: "20px",}} to="/">Chart</Link>
        <Link  style={{textDecoration: "none", color: "white", fontSize: "20px",}} to="/counter">Markets</Link>
        <a  style={{textDecoration: "none", color: "white", fontSize: "20px",}} href="#">News</a>
        <a style={{textDecoration: "none", color: "white", fontSize: "20px",}} href="#">Community</a>
        <Link  style={{textDecoration: "none", color: "white", fontSize: "20px",}} to="/signup">Sign Up</Link>
        <Link  style={{textDecoration: "none", color: "white", fontSize: "20px",}} to="/dashboard">Dashboard</Link>
      </ul>
      </div>
      <div>
      <PrimaryButton text="Start Trading" display={handleSignUp} />
    </div>
    </div>
  )
}

export default Header

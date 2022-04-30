import React,{useEffect} from 'react'
import { useNavigate } from "react-router-dom";
function Logout(props) {
    const navigate = useNavigate();
    useEffect(() => {
        localStorage.clear();
        props.updateName();
        props.updateStatus();
        navigate("/")
    
      return () => {
        
      }
    }, [])
    
  return (
    <></>

  )
}

export default Logout
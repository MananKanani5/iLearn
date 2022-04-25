import { data } from 'autoprefixer';
import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    password: ""
  });
  const setValue = (fieldName) => (evt) =>
    setData({ [fieldName]: evt.target.value });
    const setUn =  (evt) =>
    {
      setData({username: evt.target.value, password:data.password })
    }
    const setPw = (evt) =>
    {
      setData({username: data.username, password:evt.target.value })
    }
    const { username, password } = data;
    const handleSubmit = async (e) => {
      e.preventDefault();
      //console.log("clicked")
      let edp="";
      if(username.substring(0,3)==="STU")
      {
        edp="Student";
      }
      else if(username.substring(0,3)==="TCH")
      {
        edp="Teacher";
      }
      else if(username.substring(0,3)==="ADM")
      {
        edp="Admin";
      }
      else 
      {
        edp="Invalid";
      }
      console.log(edp)
      
      console.log("Submit Clicked")
      //TODO API
      const response = await fetch(`http://localhost:5000/api/${edp}/Login`,{
        method:"POST",
        headers:{
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify({UserName:data.username,Password:data.password})
      });
      
      const json=await response.json();
      console.log(json);
      if(json.success)
      {
        console.log("You are in");
        console.log("Role="+json.role);
        localStorage.removeItem('role');
        localStorage.setItem('role',json.role);
        navigate('/About')
      }
      else{
        console.log('You are not in: '+json.error);
        //TODO show respective error
      }
    };
  
  return (
    <>
    <div className=" px-8 py-12  bg-gray-100  ">
          <form className="bg-white shadow-md rounded-2xl px-8 pt-6 pb-8 mb-4 max-w-md mx-auto sm:max-w-xl" onSubmit={handleSubmit}>
            <h1 className="text-2xl font-bold uppercase text-center mb-14 mt-2">
              Login Here
            </h1>

            <div className="m-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                id="username"
                onChange={setUn}
                value={username}
                type="text"
                placeholder="Username"
                name="username"
                autoComplete="username"
                required
              />
            </div>

            <div className="m-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="Password"
              >
                Password
              </label>
              <input
                className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                type="password"
                id="password"
                onChange={setPw}
                value={password}
                placeholder="Enter Password"
                name="password"
                autoComplete="current-password"

                required
              />
              <p className="text-Primary-color float-right p-2 cursor-pointer hover:text-hover-primary">
                  Password Forget?
              </p>
            </div>

            <div className="m-4 mt-16">
              <button
                className="bg-Primary-color hover:bg-hover-primary transition ease-in-out duration-400 px-6 py-3 h-auto w-auto rounded-full cursor-pointer hover:shadow-lg text-white font-semibold mt-2"
                id="submit"
                type="submit"
              >
                Login
              </button>
            </div>

            <div className="m-4">
                <p>

                </p>
            </div>
          </form>
          {/* <p className="text-center text-gray-500 text-xs">
          {JSON.stringify(this.state)}
        </p>
        <p className="text-center text-indigo-500 text-xs">
        </p> */}
        </div>
    </>
  )
}

export default Login
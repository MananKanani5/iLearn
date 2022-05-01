import { data } from "autoprefixer";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
//1min ill type DONE
const ForgetPass = (props) => {
  const navigate = useNavigate();
  const [uid, setUid] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCpass] = useState("");
  const [otp, setOtp] = useState("");
  const [otpe, setOtpe] = useState("");
  const [b1, setB1] = useState(false);
  const [b2, setB2] = useState(false);
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  //states needed OTP, Pass, Cpass
  const handleUidChange = (e) => {
    setUid(e.target.value);
  };
  const handlePassChange = (e) => {
    setPass(e.target.value);
  };

  const handleCpassChange = (e) => {
    setCpass(e.target.value);

    //console.log(document.getElementById('password').value)
    if (document.getElementById("password").value != "") {
      document.getElementById("confirmpass").classList.add("mystyle");
      if (
        document.getElementById("confirmpass").value ===
        document.getElementById("password").value
      ) {
        document.getElementById("confirmpass").classList.remove("mystyle");
        document.getElementById("confirmpass").classList.add("mystyle1");
        document.getElementById("submit2").disabled = false;
        setB1(true);
      } else {
        document.getElementById("confirmpass").classList.remove("mystyle1");
        document.getElementById("confirmpass").classList.add("mystyle");
        document.getElementById("submit2").disabled = true;
        setB1(false);
      }
    }
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
    console.log(otpe);
    if (document.getElementById("otp").value != "") {
      document.getElementById("otp").classList.add("mystyle");
      {
        if (document.getElementById("otp").value === otpe) {
          document.getElementById("otp").classList.remove("mystyle");
          document.getElementById("otp").classList.add("mystyle1");
          document.getElementById("submit2").disabled = false;
          setB2(true);
        } else {
          document.getElementById("otp").classList.remove("mystyle1");
          document.getElementById("otp").classList.add("mystyle");
          document.getElementById("submit2").disabled = true;
          setB2(false);
        }
      }
    }
  };

  let edp="";
  const handleSubmit = async (e) => {

    
      if(uid.substring(0,3)==="STU")
      {
        edp="Student";
      }
      else if(uid.substring(0,3)==="TCH")
      {
        edp="Teacher";
      }
      else if(uid.substring(0,3)==="ADM")
      {
        edp="Admin";
      }
      else 
      {
        edp="Invalid";
      }
      console.log(edp)

    e.preventDefault();
    const response = await fetch(`${process.env.REACT_APP_URL_LOCAL}/api/${edp}/getemail`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Uid: uid,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.status == "Found") {
      if (json.success) {
        setOtpe(json.OTP);
        setId(json.id);
        setEmail(json.Email);
        var element = document.getElementById("uid");
        element.disabled = true;
        document.getElementById("btn1").style.display = "none";
        document.getElementById("afterpw").classList.remove("pw");
      } else {
        console.log("Internal Error");
      }
    } else {
      console.log("Invalid UID");
    }
  };
  ///updatepass
  const handleSubmit2 = async (e) => {
    e.preventDefault();

    if(uid.substring(0,3)==="STU")
    {
      edp="Student";
    }
    else if(uid.substring(0,3)==="TCH")
    {
      edp="Teacher";
    }
    else if(uid.substring(0,3)==="ADM")
    {
      edp="Admin";
    }
    else 
    {
      edp="Invalid";
    }
    console.log(edp)
    console.log(b1 + "\t" + b2);
    if (b1 & b2) {
      console.log("Submit 2 clickec");
      //TODO API
      const response = await fetch(
        `${process.env.REACT_APP_URL_LOCAL}/api/${edp}/updatepass`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: id,
            Password: pass,
          }),
        }
      );
      const json = await response.json();
      console.log(json);

      if (json.status == "updated")
      {
        alert("Password Updated Successfully");
      // window.location = '/some/url';
      console.log("updated");
      navigate('/Login')
      }
      else{
        console.log("Err in Pass Update");
      }

      
    } else {
      document.getElementById("submit2").disabled = true;
    }
  };
  return (
    <>
      <div className=" px-8 py-12  bg-gray-100  ">
        <div className="bg-white shadow-md rounded-2xl px-8 pt-6 pb-8 mb-4 max-w-md mx-auto sm:max-w-xl">
          <form id="" onSubmit={handleSubmit}>
            <h1 className="text-2xl font-bold uppercase text-center mb-14 mt-2">
              Password Reset
            </h1>

            <div className="m-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="UserId"
              >
                UID
              </label>
              <input
                className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                id="uid"
                type="text"
                placeholder="Enter uid"
                name="uid"
                onChange={handleUidChange}
                value={uid}
                autoComplete="username"
                pattern="^(STU|ADM|TCH)\d{4}$"
                title="Please Enter Correct UID"
                required
              />
              <p
                id="msg2"
                className="text-Primary-color float-right p-2 cursor-pointer hover:text-hover-primary"
              ></p>
            </div>
            <NavLink to={"/Login"} className="text-Primary-color float-right p-2 cursor-pointer hover:text-hover-primary">
                  Login Instead
              </NavLink>
            <div className="m-4 mt-8" id="btn1">
              <button
                className="bg-Primary-color hover:bg-hover-primary transition ease-in-out duration-400 px-6 py-3 h-auto w-auto rounded-full cursor-pointer hover:shadow-lg text-white font-semibold"
                id="submit"
                type="submit"
              >
                Submit
              </button>
            </div>

            <div className="m-4">
              <p></p>
            </div>
          </form>

          <div className="pw" id="afterpw">
            <div className="m-4 mt-12">
              <p> OTP has been sent to your Registered Mail id: {email}</p>
            </div>
            <form onSubmit={handleSubmit2}>
              <div className="m-4 mt-8">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="otp"
                >
                  OTP
                </label>
                <input
                  className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                  type="text"
                  id="otp"
                  onChange={handleOtpChange}
                  value={otp}
                  pattern="^\d{6}$"
                  autoComplete="otp"
                  placeholder="OTP"
                  required
                />
              </div>

              <div className="flex flex-wrap tel justify-between">
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
                    onChange={handlePassChange}
                    value={pass}
                    autoComplete="new-password"
                    placeholder="Create Password"
                    required
                  />
                </div>

                <div className="m-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="confirmpass"
                  >
                    Confirm Password
                  </label>
                  <input
                    className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                    type="password"
                    id="confirmpass"
                    onChange={handleCpassChange}
                    value={cpass}
                    autoComplete="new-password"
                    placeholder="Confirm Password"
                    required
                  />
                </div>
                <div className="m-4 mt-8" id="btn2">
                  <button
                    className="bg-Primary-color hover:bg-hover-primary transition ease-in-out duration-400 px-6 py-3 h-auto w-auto rounded-full cursor-pointer hover:shadow-lg text-white font-semibold"
                    id="submit2"
                    type="submit"
                    disabled
                  >
                    Reset Now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* <p className="text-center text-gray-500 text-xs">
          {JSON.stringify(this.state)}
        </p>
        <p className="text-center text-indigo-500 text-xs">
        </p> */}
      </div>
    </>
  );
};

export default ForgetPass;

import React from "react";
import "../App.css";
class StudentCreate extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email:"",
    tel:"",
    alttel:"",
    parentemail:"",
    paranttel:"",
    add:"",
    dept:"",
    password:"",
    confirmpass:""
  };

  setValue = (fieldName) => (evt) =>
    this.setState({ [fieldName]: evt.target.value });

  render() {

    const { firstName, lastName, email, tel, alttel, parentemail, paranttel, add, dept, password, confirmpass } = this.state;

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log("Registration Submit Clicked");
      const response = await fetch("http://localhost:5000/api/Student/Register",{
        method:"POST",
        headers:{
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
          "Uid" :"abscewr",
          "Fname":firstName,
          "Lname":lastName,
          "Email":email,
          "Phone":tel,
          "Alternate_Phone":alttel,
          "Address":add,
          "Role":"student",
          "UserName":"Gaurav4yadavy3590",
          "Password":password
        })
      });
      const json=await response.json();
      console.log(json);
      if(json.success)
      {
        console.log("Registered");
        //TODO redirect to logged in main page
      }
      else{
        console.log('Cannot Register: '+json.error);
        //TODO show respective error
      }
    }

    
    return (
      <div className=" px-8 py-12  bg-gray-100 m-z max-sm:px-5">
        <form className="bg-white shadow-md rounded-2xl px-8 max-sm:px-5 pt-6 pb-8 mb-4 max-w-md mx-auto sm:max-w-xl" onSubmit={handleSubmit} autoComplete="on">
          <h1 className="text-2xl font-bold uppercase text-center mb-14 mt-2" >
            Create New Student
          </h1>


      <div className="flex flex-wrap name justify-between">
          <div className="m-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="First name">
              Firstname
            </label>
            <input
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              type="text"
              id="firstName"
              onChange={this.setValue("firstName")}
              value={firstName}
              placeholder="First Name" required />
          </div>

          <div className="m-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="Last name">
              Lastname
            </label>
            <input
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              type="text"
              id="lasttName"
              onChange={this.setValue("lastName")}
              value={lastName}
              placeholder="Last Name" required />
          </div>
    </div>

    



          <div className="m-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              E-mail
            </label>
            <input
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              id="email"
              onChange={this.setValue("email")}
              value={email}
              autoComplete="email"
              type="email" placeholder="Your Email" required
            />
          </div>



      <div className="flex flex-wrap tel justify-between">
          <div className="m-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="Phone Number">
              Phone Number
            </label>
            <input
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              type="tel"
              id="tel"
              onChange={this.setValue("tel")}
              value={tel}
              placeholder="Phone Number" required />
          </div>

          <div className="m-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="Alt phone">
              Alternate Phone Number
            </label>
            <input
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              type="tel"
              id="alttel"
              onChange={this.setValue("alttel")}
              value={alttel}
              placeholder="Alternate Phone Number"  />
          </div>
      </div>

      <div className="m-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
             Parent/Guardian's E-mail
            </label>
            <input
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              id="parentemail"
              onChange={this.setValue("parentemail")}
              value={parentemail}
              autoComplete="email"
              type="email" placeholder="Parent's Email" required
            />
          </div>

          <div className="m-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="Phone Number">
              Parent/Guardian's Phone Number
            </label>
            <input
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              type="tel"
              id="paranttel"
              onChange={this.setValue("paranttel")}
              value={paranttel}
              placeholder="Parent's Phone Number" required />
          </div>


      <div className="m-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="Address"
            >
              Address
            </label>
            <textarea
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              id="address"
              onChange={this.setValue("add")}
              value={add}
              type="text" placeholder="Address" rows={5} required
            />
      </div>


      <div className="m-4">
            {/* <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="option"
            >
              Department
            </label>
            <select
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              id="dept"
              onChange={this.setValue("dept")}
              value={dept}
              type="" placeholder="Address" rows={5} required
            /> */}
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="option"
            >
              Department
            </label>
            <select name="cars" id="cars" className=" bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full leading-normal" onfocus='this.size=10;' onblur='this.size=0;' onchange='this.size=1; this.blur();'>

                <optgroup label="BSCIT">
                <option value="FY-BSCIT">FY-BSCIT</option>
                <option value="SY-BSCIT">SY-BSCIT</option>
                <option value="TY-BSCIT">TY-BSCIT</option>
                </optgroup>

                <optgroup label="BAF">
                <option value="FY-BAF">FY-BAF</option>
                <option value="SY-BAF">SY-BAF</option>
                <option value="TY-BAF">TY-BAF</option>
                </optgroup>

                <optgroup label="BMS">
                <option value="FY-BMS">FY-BMS</option>
                <option value="SY-BMS">SY-BMS</option>
                <option value="TY-BMS">TY-BMS</option>
                </optgroup>

                <optgroup label="B.COM">
                <option value="FY-B.COM">FY-B.COM</option>
                <option value="SY-B.COM">SY-B.COM</option>
                <option value="TY-B.COM">TY-B.COM</option>
                </optgroup>

            </select>


      </div>



      <div className="flex flex-wrap tel justify-between">
          <div className="m-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="Password">
              Password
            </label>
            <input
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              type="password"
              id="password"
              onChange={this.setValue("password")}
              value={password}
              autoComplete="new-password"
              placeholder="Create Password" required />
          </div>

          <div className="m-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="confirmpass">
              Confirm Password
            </label>
            <input
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              type="password"
              id="confirmpass"
              onChange={this.setValue("confirmpass")}
              value={confirmpass}
              autoComplete="new-password"
              placeholder="Confirm Password" required />
          </div>
      </div>




          <div className="m-4">
            <button
              className="bg-Primary-color hover:bg-hover-primary transition ease-in-out duration-400 px-6 py-3 h-auto w-auto rounded-full cursor-pointer hover:shadow-lg text-white font-semibold"
              id="submit"
              type="submit"
            >
              Create
            </button>
          </div>
        </form>
        {/* <p className="text-center text-gray-500 text-xs">
          {JSON.stringify(this.state)}
        </p>
        <p className="text-center text-indigo-500 text-xs">
        </p> */}
      </div>
    );
  }
}

export default StudentCreate;
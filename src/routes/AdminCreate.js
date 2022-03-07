import React from "react";
class AdminCreate extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email:"",
    tel:"",
    alttel:"",
    add:"",
    password:"",
    confirmpass:""
  };

  setValue = (fieldName) => (evt) =>
    this.setState({ [fieldName]: evt.target.value });

  render() {

    const { firstName, lastName, email, tel, alttel, add, password, confirmpass } = this.state;

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log("Registration Submit Clicked");
      const response = await fetch("http://localhost:5000/api/Admin/Register",{
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
          "Role":"admin",
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
      <div className=" px-8 py-12  bg-gray-100 m-z ">
        <form className="bg-white shadow-md rounded-2xl px-8 pt-6 pb-8 mb-4 max-w-md mx-auto sm:max-w-xl" onSubmit={handleSubmit}>
          <h1 className="text-2xl font-bold uppercase text-center mb-14 mt-2" >
            Create New Admin
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

export default AdminCreate;

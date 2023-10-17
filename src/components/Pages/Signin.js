import React from "react";
import '../Styles/Signin.css'
export const Signin = () => {
  return (
    <div className="type">
      <div>
         <h2>facebook</h2>
        <p className="face">Facebook helps you connect and <br></br> share with the people in your life</p>
      </div>
       
      <div className="formm">
        <form><p><label><input type="text" placeholder="Email address or phone number" className="text"></input></label></p>
        <p><label><input type="text" placeholder="Password" className="password"></input></label></p>
        </form>
       <hr></hr>
       <p><button type="sumbit" className="button">Login</button><nav><br></br> Forgotten password?</nav> </p>
       <hr></hr>
       <button type="submit" className="account">Create Account</button>
       <nav>Create a Page for a celebrity, brand or business.</nav>
      </div>
    </div>
  );
};
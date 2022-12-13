import React from "react";

import Navbar from "./Navbar";
const Form = (props) => {
   
   
  const {Firstname,
  date,
  leader,
  members,handleChange,handleSubmit
  } = props





  
    return (
      <div className="forms">
        <Navbar />
        <form  onSubmit={handleSubmit} className="">
          <h1 className="label">Parliament Form </h1>
          <p>
            Hello Please <span>Enter your Parliament</span>
          </p>
          <hr />
          <label>Parliament Name</label>
          <input
            type="text"
            onChange={handleChange}
            name="Firstname"
            value={Firstname}
            placeholder='Enter Paliment Name'
          />
          
          <br />
          <label>parliament Date</label>
          <input
            type="date"
            onChange={handleChange}
            name="date"
            value={date}
            
          />
          <br />
          <br />
          <label>Parliament Leader</label>
          <input
            type="text"
            onChange={handleChange}
            name="leader"
            value={leader}
            placeholder='Enter Parliament Leader name'
          />
         
          <br />
          <label>Parliament Members</label>
          <input
            type="number"
            onChange={handleChange}
            name="members"
            value={members}
            placeholder='Enter Number Of Members'
          />
          <br />
          <br />
         
          <button type="submit" className="butt">
            Submit
          </button>
        </form>
        <br />
        
      </div>
      
    );
};

export default Form;

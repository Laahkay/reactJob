import React from "react";

function Advertise(props) {
  const [checked, setChecked] = React.useState(false);
  const [clicked2, setClicked2] = React.useState(true);

  const handleChange = () => {
    setChecked(!checked);
    setClicked2(!clicked2);
    
  };

  return (
    <div>
      <h1>Advertising</h1>
      <form>
        <h2>List Of Jobs available<h4 className="Red">2</h4></h2>
        <label>
          <h2>
            Company Name:
          </h2>
          <h3>Moja Design</h3>
          <>
            Position : <>Graphic Designer</>
          </>
          <br />
          <>
            Salary : <>R5000.00</>
          </>
          <input type="checkbox" checked={checked} onChange={handleChange} />
        </label>
        <br />
        <label>
          <h2>
            Company Name:
          </h2>
          <h3>Star Shine(SS)</h3>
          <>
            Position : <>Junior Assistant</>
          </>
          <br />
          <>
            Salary : <>R10000.00</>
          </>
          <input type="checkbox" checked={clicked2} onChange={handleChange} />
        </label>
        
      </form>
    </div>
  );
}

export default Advertise;

import React, { useState } from "react";



export default function StateTutorial() {
  //definicija state-a
  //const[imenujemo promenljivu koju zelimo, stavljamo set napravljenoj promenljivoj koju zelimo da promenimo i stavljamo useState()]

    const [inputValue, setInputValue] = useState("Milos");
    
    let onChange = (event) => {
        //targetujemo vrednost iz input polja
        const newValue = event.target.value;
        //setujemo novu vrednost 
        setInputValue(newValue);
        
    }

  return (
    <div>
          <input placeholder="upisi nesto" onChange={onChange} />
          {inputValue}
    </div>
  );
}

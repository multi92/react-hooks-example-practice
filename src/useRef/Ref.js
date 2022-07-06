import React, {useRef} from 'react'

//useRef hook jeste najlaksi nacin kako da pristupimo dom elementu
//veoma je laksi nego u vanila Js-u gde moramo manuelno da pristupimo DOMU
//u ovom primeru cemo se fokusirati na dom elementu input polja svaki put kada kliknemo na dugme

export default function Ref() {

    const inputRef = useRef(null);

    const onClick = () => {
        inputRef.current.value = "";
    }



  return (
      <div>
          <h1>Milos Mijajlovic</h1>
          <input type="text" placeholder="Napisi nesto" ref={inputRef}></input>
          <button onClick={onClick}>Promeni ime</button>
    </div>
  )
}

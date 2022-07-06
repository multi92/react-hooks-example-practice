import { useLayoutEffect, useEffect, useRef } from "react";

export default function LayoutEffect() {
  const inputRef = useRef(null);
  //useLayout ce se prvi renderovati na stranici
  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  });
    //na stranici ce se zapravo videti "zdravo" ali kada bolje pogledamo u konzoli videcemo da se prvo renderuje value='Milos'
  //useEffect se uvek renderuje posle useLayoute
  useEffect(() => {
    inputRef.current.value = "Zdravoo";
  });

  return (
    <div className="App">
      <input ref={inputRef} value="Milos" style={{ width: 400, height: 60 }} />
    </div>
  );
}

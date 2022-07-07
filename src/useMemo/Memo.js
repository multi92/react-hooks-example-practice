import axios from "axios";
import { useEffect, useState, useMemo } from "react";

export default function Memo() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    //preuzimamo pomocu axios get url-a neke komentare i stavljamo ih u response.data kao listu
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data);
      });
  }, []);

  //funkcija za pronalazak najduzeg imena u komentarima
  const findLongestName = (comments) => {
    if (!comments) return null;

    let longestName = "";

    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }
    console.log("IZRACUNATO");
    return longestName;
    };
    
    //prvu vrednost memo hooka-a jeste funkcija koju smo napravili

  const getLongestName = useMemo(() => findLongestName(data, [toggle]));

  return (
    <div className="App">
      <div>{getLongestName}</div>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {" "}
        Toggle
      </button>
      {toggle && <h1>toggle</h1>}
    </div>
  );
}

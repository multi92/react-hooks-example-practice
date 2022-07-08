import React, { useEffect } from 'react';

export default function Child({ returnComment }) {
    
    useEffect(() => {
        console.log("funkcija je pozvana");
    }, [returnComment]);


    return <div>{ returnComment("Milos") }</div>
}

import { useState } from "react";
import { useEffect } from "react";
export const Contador = () => {
    const [number, setContador] = useState<number>(0);
        const sumar = () =>{
            setContador(number+1);
            if(number === 10){
                alert("llegaste al 10")
            }
            //console.log(number);
        }
        const restar = () =>{
            setContador(number-1);
            if(number === 10){
                alert("llegaste al 10")
            }
            //console.log("numero: " + number);
        }

        useEffect( () => {
            console.log("contador: " + number);
        }, [number] )

    return (
    <div style={{marginBottom: "700px", backgroundColor: "#f2f22f2", border: "1px solid black"}}>
        <h2>La cuenta del CONTADOR ACT esta en: {number}</h2>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
    </div>
    );
}
"use client";
import React from "react";
import Prueba2 from "./Prueba2.jsx";

const Prueba = () => {
    // Datos que deseas pasar al componente Prueba
    const datos = {
        dato1: "Hola",
        dato2: "Mundo"
    };

    return (
        <div>
            {/* Renderiza el componente Prueba y pasa los datos como props */}
            <Prueba2 datos={datos} />
        </div>
    );
};

export default Prueba;




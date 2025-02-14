"use client";
import { useState } from "react";
 import Inicio from "./Inicio.jsx";

const TaskCounter=(props)=>{
    return(
    <>
    <h2>tareas realizadas {props.valor}</h2>
    </>
    )
}
export default TaskCounter;
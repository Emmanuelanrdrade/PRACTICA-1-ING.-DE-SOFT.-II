"use client ";
import { useState } from "react";
import TaskForm from "./TaskForm";
const TaskList =(props)=>{
    return(
        <>
        <p>LISTA DE TAREAS REALIZADAS :{props.nombre} </p>
         
        </>
    )
}
export default TaskList;
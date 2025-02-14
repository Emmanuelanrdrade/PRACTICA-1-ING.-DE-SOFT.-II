"use client ";
import { useState } from "react";

const TaskItem =(props)=>{
    return(
        <>
        <p>listo desde las tareas individuales {props.tipotarea}</p>
        </>
    )
}
export default TaskItem;
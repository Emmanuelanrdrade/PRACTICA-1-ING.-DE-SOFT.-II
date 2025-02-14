"use client";
import { useState } from "react";
import TaskCounter from "./TaskCounter"
import Inicio from "./Inicio";
import TaskList from "./TaskList";
import TaskItem from "./TaskItem";
const TaskForm=()=>{   
    const [nombre,cambiarnombre]=useState('');
    const [agregarnombre,cambiaragrenombre]=useState(['']);

    const [descripcion,cambiartipo]=useState('');
    const [agregardescri,cambiaragredes]=useState(['']);

    const[numerotarea,cambiarnumerotarea]=useState('');
    const [agregarntarea,cambiaragregarta]=useState(['']);

    const[fecha,cambiarfecha] =useState('');
    const [agregarfecha,cambiaragrefe]=useState(['']);

    const [tipotarea,cambiartipotarea]=useState('');
    const [agregar,agregartarea]=useState(['']);
 


    const agregartareanueva=()=>{
        if(nombre!==''){
            cambiaragrenombre([...agregarnombre,nombre]);
            cambiarnombre('');
        }
        if(descripcion !==''){
            cambiaragredes([agregardescri,descripcion]);
            cambiartipo ('');

        }

        if(numerotarea!==''){
               cambiaragregarta([...agregarntarea,numerotarea]);
               cambiarnumerotarea('');
        }
        if(fecha!==''){
             cambiaragrefe([agregarfecha,fecha]);
             cambiarfecha('');
        }

        if(tipotarea!== ''){
            agregartarea([...agregar,tipotarea]);
            cambiartipotarea('')
        }
    }
    const [valor, setValor]=useState(0);
    const sumar=()=>{
        setValor(valor+1);
    }
    const restar=()=>{
        setValor(valor-1);
    }
    const restablecer=()=>{
        setValor(0);
    }
    return(
        <>
            <p> REGISTRO DE NUEVA TAREA </p>
            <div>
                    <label htmlFor="nombre">TITULO DE TAREA</label>   
                    <input type="text" name="nombre" id="nombre" value={nombre} onChange={(e)=>{cambiarnombre(e.target.value)}} /> <button onClick={agregartareanueva }>Agregar</button> <br />
                        <ul>
                            <p>titulo agregado</p>
                                {agregarnombre.map((tipo,inicio)=>(
                                <li key={inicio}>{tipo}</li>
                            ))}
                        </ul>
                    <label htmlFor="descripcion">DESCRIPCION DE TAREA</label>
                    <input type="text" name="descripcion" id="descripcion" value={descripcion} onChange={(e)=>{cambiartipo(e.target.value)}} /> <br />
                    <ul>
                        <p>descripcion agregada</p>
                                {agregardescri.map((tipo1,inicio1)=>(
                                <li key={inicio1}>{tipo1}</li>
                            ))}
                    </ul>
                    <label htmlFor="nombre">NUMERO DE TAREA </label>
                    <input type="number" name="numero" id="numero" value={numerotarea} onChange={(e)=>{cambiarnumerotarea(e.target.value)}} /> <br />
                        <ul>
                            <p></p>
                                {agregarntarea.map((tipo,inicio)=>(
                                <li key={inicio}>{tipo}</li>
                            ))}
                        </ul> 
                    <label htmlFor="nombre">FECHA DE TAREA </label>
                    <input type="date" name="fecha" id="fecha" value={fecha} onChange={(e)=>{cambiarfecha(e.target.value)}} />
                        <ul>
                                {agregarfecha.map((tipo,inicio)=>(
                                <li key={inicio}>{tipo}</li>
                            ))}
                        </ul>
                    <label htmlFor="nombre">TIPO DE TAREA </label>
                     <input type="text"value={tipotarea} onChange={(e) => {cambiartipotarea(e.target.value)}}/>  
                     <ul>
                                {agregar.map((tipo,inicio)=>(
                                <li key={inicio}>{tipo}</li>
                            ))}
                     </ul>
                    <br />
            </div> 
            <div>
            <h1>Contador de tareas:</h1>
            <h2>{valor}</h2>
            <button onClick={sumar}>Aumentar</button> <br />
            <button onClick={restar}>Restar</button> <br />
            <button onClick={restablecer}>Restablecer</button>
         </div>
         <Inicio valor={valor} nombre={nombre} tipotarea={tipotarea}/>
         <TaskCounter valor={valor} />
        <TaskList nombre={nombre}/>
        <TaskItem tipotarea={tipotarea}/>
        
        </>
    )
}

export default TaskForm;
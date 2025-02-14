"use client";
import { useState } from "react";
import "./TaskForm.jsx";
import TaskForm from "./TaskForm.jsx";
import TaskList from "./TaskList.jsx";
import TaskItem from "./TaskItem.jsx";
import "./Estilo.css"
import TaskCounter from "./TaskCounter.jsx";
const Inicio=(props)=>{  
    let [Sesion,CambiarSesion]=useState(true);
    const sesionHandler=()=>{
        if (Sesion==true){
            CambiarSesion(false);
        }
        else{
            CambiarSesion(true);
        }
    }
    let [Sesion2,CambiarSesion2]=useState(true);
    const sesion2Handler=()=>{
        if (Sesion2==true){
            CambiarSesion2(false);
        }
        else{
            CambiarSesion2(true);
        }
    }
    let [Sesion3,CambiarSesion3]=useState(true);
    const sesion3Handler=()=>{
        if (Sesion3===true){
            CambiarSesion3(false);
        }
        else{
            CambiarSesion3(true);
        }
    }
    let [Sesion4,CambiarSesion4]=useState(true);
    const sesion4Handler=()=>{
        if (Sesion4===true){
            CambiarSesion4(false);
        }
        else{
            CambiarSesion4(true);
        }
    }
    return(
        < >
         {Sesion===true?
             <div  id="caja">
                 <button onClick={sesionHandler} id="p">INGRESAR NUEVAS TAREAS</button>
             </div>
          :
            <div  id="caja">
                 <form action="">
                     <div>
               
                     </div>
                 </form>
                 <button onClick={sesionHandler}id="p">SALIR DE NUEVAS TAREAS </button>
                 <TaskForm/>
            </div>
         }
        
    
        {Sesion2===true?
         <div  id="caja">
             <button onClick={sesion2Handler} id="p">SALIR DE VER LAS TAREAS  </button>
              <p>tareas {props.nombre}</p>
         </div>
      :
         <div  id="caja">
          
           <button onClick={sesion2Handler}id="p"> VER LAS TAREAS </button>
           <TaskList/>
         </div>
         }
         {Sesion3===true?
         <div  id="caja">
             <button onClick={sesion3Handler} id="p"> SALIR DE VER LAS VER LAS TAREAS  </button>
            <p>tareas indiduales {props.tipotarea}</p>
         </div>
      :
         <div  id="caja">
          
           <button onClick={sesion3Handler}id="p">TAREAS INDIVIDUALES</button>
           <TaskItem/>
         </div>
         }
         {Sesion4===true?
         <div id="caja">
             <button onClick={sesion4Handler} id="p"> VER CONTADOR DE TAREAS </button>
            
         </div>
      :
         <div  id="caja">
          
           <button onClick={sesion4Handler}id="p">SALIR DEL CONTADOR</button>
           <p>TAREAS REALIZADAS :</p>
           <p>NUMERO DE TAREAS {props.valor}</p>
         </div>
         }
      </>
    )
}

export default Inicio;
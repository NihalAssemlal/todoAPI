import React, { createContext, useState } from 'react'
import {v4 as uuidv4} from 'uuid';



export const FirstContext = createContext();


export default function FirstContextProvider(props) {

    const [tasks, setTasks] = useState([
      {id:uuidv4(), nom:'sport', complete:false},
      {id:uuidv4(), nom:'sport', complete:false},
      {id:uuidv4(), nom:'sport', complete:false}
  ]);
        
    
    const [tache, setTache] = useState('');

    const addTache = () =>{ 
        if (tache.length === 0){
          alert('stop');
        }else{
          let nTasks = [...tasks];
          let nTache = {};
          nTache.id = uuidv4();
          nTache.nom = tache;
          nTache.complete=false;
          nTasks.push(nTache);
          setTasks(nTasks);
          setTache('');
          console.log(nTache);
        }
        
      }

      const delTask = (idp) =>{
        let nt = tasks.filter((t)=>{
          return t.id !== idp;
        });
        setTasks(nt);
      }
    
      const modif = (id)=>{
        let nt = tasks.map((tt)=>{
          if(tt.id === id){
            tt.complete = !tt.complete;
          }
          return tt;
        })
        setTasks(nt);
      }
    
   
  return (
    <FirstContext.Provider value = {{tasks, setTasks, tache, setTache, addTache, delTask, modif}}>
         {props.children}
    </FirstContext.Provider>
  )
}

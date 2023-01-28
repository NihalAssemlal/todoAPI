import React from 'react';
import { useContext } from 'react';
import {FirstContext} from '../context/FirstContext';
import './style/style.css';

export default function Comp2() {
    const {tasks, tache, setTache, addTache, delTask, modif} = useContext(FirstContext);
  return (
    <div className='container'>
    <h1>To Do List</h1>
      <form>
        <p>add tasks:</p>
        <input type="text" className='inp' value={tache} onChange={(e)=>setTache(e.target.value)} placeholder="Write your new task here"/>
        <br />
        <input type="button" className='add' onClick={addTache} value="Add" />
        
      </form>
      <br />
      
      <ul>
       {tasks.map((t)=>{
        return <li key={t.id} className={t.complete ? "comple" : ""}>
          <input type="text" readOnly value={t.nom} className='inp' />
          <input type="button" value='supprimer' className='delete' onClick={()=>delTask(t.id)} />
          <input type="button" value='modifier' className='modify' onClick={()=>modif(t.id)} />
        </li>
       })}
      </ul>
    </div>
  )
}

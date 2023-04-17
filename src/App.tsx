import { useState } from "react";
import "./App.css";
import { Item } from "./components/types/Item";
import { ListItem } from "./components/Listers/Listes";
import { AddArea } from "./components/AddArea/Area";


export default () => {
  const [list, setList] = useState<Item[]>([
    {
      id: 1,
      name: "Estudar",
      done: false,
    },
   
  ]);

const handleAddTask = (taskName:string) =>{
  let newlist = [...list]; //Clonando a lista
  newlist.push({ // Adicionando a lista clonada em um novo Array
    id:list.length + 1,
    name:taskName,
    done:false
  })
  setList(newlist) // Atualiza a lista.
}


  return (
    <div className="container">
      <div className="area">
        <header>
          <h1>Lista de Tarefas</h1>
        </header>
       
       <AddArea onEnter={handleAddTask}/>

          { list.map((item , index) => (
           <ListItem key={index} item={item} />
          ))}



      </div>
    </div>
  );
};

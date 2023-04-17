import './listers.css'
import { Item } from '../types/Item'
import { useState } from "react";

type Props = {
  item: Item;
 
};

export const ListItem = ({ item }: Props) => {
  const [isChecked, setIsChecked] = useState(item.done);

  const handleCheck = (event:any) => {
   setIsChecked(!isChecked)

   setIsChecked(event.target.checked) // Ao clicar o item será modificado atualizando o estado do componente para TRUE
   item.done = event.target.checked
 };
   
  
  
  {/* Quando o usuário clica no checkbox, 
   a função handleCheck é chamada, 
  atualizando o estado do 
  componente e renderizando o label com o estilo 
  line-through ou none de acordo com o estado atual do checkbox (TRUE OU FALSE). */}
  
  return (
    <div className="content">
      <input type="checkbox" checked={isChecked} onChange={handleCheck} />   
      <label style={{ textDecoration: isChecked ? "line-through" : "none" }}>
        {item.name}   {/* - {item.done.toString()} ----> Liberando voce verá a modificação do estado para TRUE e FALSE */}  
  
      </label>
    </div>
  );
};







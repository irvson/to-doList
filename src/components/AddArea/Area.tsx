import { useState , KeyboardEvent } from 'react'

import './area.css'

type Props ={
    onEnter: (taskName:string) => void
}


export const AddArea = ({onEnter}:Props) =>{
const [inputText , setInputText] = useState('')

const handleKeyUp = (e:KeyboardEvent) =>{
    if(e.code ==='Enter' && inputText !== '') {
        onEnter(inputText)
        setInputText('')

    }
}

    return (
        <div>
      <div className="input-area">
        <span>➕</span>       
        <input type="text" 
        placeholder='Adicione uma tarefa'
        value={inputText}
        onChange={e => setInputText(e.target.value) }
        onKeyUp={handleKeyUp}
        />
        </div> 
        </div>
        
    )
}
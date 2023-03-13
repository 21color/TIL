import React, { useState } from 'react'
import './App.css'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const todos = [
  { id: 'todo-1', content: 'Take out the garbage' },
  { id: 'todo-2', content: 'Watch my favorite show' },
  { id: 'todo-3', content: 'Charge my phone' },
]

function App() {
  
  const [widgets, setWidget] = useState(todos)
  
  const onDragEnd=  (result) => {
    const { destination, source, draggableId } = result;
    if (!result.destination) return; 
    
    const newItems = Array.from(widgets);
    const [reOrdered] = newItems.splice(source.index, 1);
    newItems.splice(destination.index, 0, reOrdered);
    setWidget(newItems);
  }

  return (
    <DragDropContext
    onDragEnd={onDragEnd}>
      <Droppable droppableId="todos">
        {(provided) => (
       <ul 
       className='todos'
       {...provided.droppableProps}
       ref={provided.innerRef}
       >
        {widgets.map(({id, content}, index) => (
          <Draggable key={id} draggableId={id} index={index}>{
            (provided) =>(
               <li
               ref={provided.innerRef}
               {...provided.draggableProps}
                {...provided.dragHandleProps}
               >{content}
               </li>
               )}
          </Draggable>
        ))}
        {provided.placeholder}
       </ul>
      )}
       </Droppable>
    </DragDropContext>
  )
}

export default App

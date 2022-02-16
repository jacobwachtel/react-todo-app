import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const TodoItem = ({ todo, todos, setTodos, color }) => {
   const [editedTodo, setEditedTodo] = useState(todo.title);

   useEffect(() => {
      setEditedTodo(todo.title);
   }, [todo]);

   const deleteHandler = () => {
      const currentTodoId = todo.id;
      setTodos(todos.filter((todo) => currentTodoId !== todo.id));
   };

   const saveTodo = () => {
      const currentTodoId = todo.id;
      setTodos(
         todos.map((todo) =>
            todo.id === currentTodoId ? { ...todo, title: editedTodo } : todo
         )
      );
   };

   const completeTodo = () => {
      const currentTodoId = todo.id;
      setTodos(
         todos.map((todo) =>
            todo.id === currentTodoId
               ? { ...todo, completed: !todo.completed }
               : todo
         )
      );
   };

   return (
      <TodoListItem>
         <Checkbox
            style={{ color: color }}
            className={todo.completed ? 'fas fa-check-circle' : 'far fa-circle'}
            onClick={completeTodo}
         />
         <input
            style={{
               textDecoration: todo.completed ? 'line-through' : 'none',
            }}
            value={editedTodo}
            onChange={(e) => setEditedTodo(e.target.value)}
         />

         {todo.title !== editedTodo && (
            <SaveTodo className="fas fa-check" onClick={saveTodo} />
         )}
         <DeleteTodo className="fas fa-trash-alt" onClick={deleteHandler} />
      </TodoListItem>
   );
};

export default TodoItem;

const TodoListItem = styled.div`
   height: 5rem;
   display: flex;
   align-items: center;
   padding: 1.5rem 2rem;
   transition: 0.3s;

   input {
      flex: 1;
      font-size: 2.2rem;
      outline: none;
      background: none;
      color: #eee;
      border: none;
   }
`;

const Checkbox = styled.i`
   font-size: 2rem;
   margin-right: 1rem;
   cursor: pointer;
`;

const DeleteTodo = styled.i`
   font-size: 1.5rem;
   color: #ff1605;
   padding: 1rem 1.6rem;
   margin-left: 1.4rem;
   border-radius: 4px;
   margin-right: -1.2rem;

   &:hover {
      background-color: #7e2601;
      transition: 0.3s;
      cursor: pointer;
   }
`;

const SaveTodo = styled.i`
   font-size: 1.5rem;
   padding: 1rem 1.6rem;
   border-radius: 4px;
   margin-right: -1.2rem;
   color: #42c732;

   &:hover {
      background-color: #2b6127;
      transition: 0.3s;
      cursor: pointer;
   }
`;

import { React, useState } from 'react';
import TodoItem from './TodoItem';
import styled from 'styled-components';

const TodoList = () => {
   const [todo, setTodo] = useState('');
   const [todos, setTodos] = useState([]);

   const addButtonHandler = () => {
      if (todo.length > 0) {
         setTodos([
            {
               id: todos.length,
               title: todo,
               completed: false,
            },
            ...todos,
         ]);
      }
      setTodo('');
      console.log(todos);
   };
   return (
      <Wrapper>
         <TodoCategoryHeader>
            <CategoryIcon style={{ background: '#FD76A1' }}>
               <i className={'fas fa-user'} />
            </CategoryIcon>
            <Title>Personal</Title>
            <TodoInput value={todo} onChange={(e) => setTodo(e.target.value)} />
            <AddTodo className="fas fa-plus" onClick={addButtonHandler} />
         </TodoCategoryHeader>

         {todos.map((todo, index) => {
            return (
               <TodoItem
                  key={index}
                  todo={todo}
                  todos={todos}
                  setTodos={setTodos}
               />
            );
         })}
      </Wrapper>
   );
};

export default TodoList;

const Wrapper = styled.div`
   background-color: #202122;
   margin-bottom: 3rem;
   border-radius: 20px;
   overflow: hidden;
`;

const TodoCategoryHeader = styled.div`
   background-color: #272833;
   height: 6rem;
   display: flex;
   align-items: center;
   padding: 1.5rem 2rem;
`;

const CategoryIcon = styled.div`
   height: 3rem;
   width: 3rem;
   border-radius: 4px;
   display: flex;
   align-items: center;
   justify-content: center;
   margin-right: 1rem;
`;

const Title = styled.div`
   flex: 1;
   font-size: 1.8rem;
   font-weight: 600;
`;

const TodoInput = styled.input`
   height: 3rem;
   font-size: 1.8rem;
   outline: none;
   border: none;
   background-color: #20212d;
   color: #eee;
   border-radius: 4px;
   padding: 0.5rem 1rem;
   margin-right: 0.5rem;
`;

const AddTodo = styled.i`
   padding: 1rem 1.6rem;
   font-size: 1.5rem;
   /* color: ; */
   border-radius: 4px;
   margin: 0 1rem 0 0.5rem;

   &:hover {
      background-color: #20212d;
      transition: 0.3s;
      cursor: pointer;
   }
`;

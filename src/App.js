import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import styled from 'styled-components';
// import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';
import Sidebar from './components/Sidebar';

function App() {
   const [sideBarToggle, setSideBarToggle] = useState(true);

   const todoList = [
      {
         name: 'Personal',
         color: '#fd76a1',
         icon: 'fas fa-user',
      },
      {
         name: 'Work',
         color: '#70c4b3',
         icon: 'fas fa-briefcase',
      },
      {
         name: 'Coding Work',
         color: '#ab6ddf',
         icon: 'fas fa-file-code',
      },
   ];

   return (
      <Wrapper>
         <Header
            sideBarToggle={sideBarToggle}
            setSideBarToggle={setSideBarToggle}
         />
         <Main>
            <Sidebar sideBarToggle={sideBarToggle} todoList={todoList} />
            <MainContent
               style={{
                  width: `calc(100vw-(30rem))`,
               }}
            >
               <TodoContent>
                  <Title>Dashboard</Title>
                  <Greeting>Good Morning, Jacob!</Greeting>
                  {todoList.map((category) => (
                     <TodoList
                        key={category.name}
                        name={category.name}
                        color={category.color}
                        icon={category.icon}
                     />
                  ))}
               </TodoContent>
            </MainContent>
         </Main>
      </Wrapper>
   );
}

export default App;

const Wrapper = styled.div`
   background-color: #18181f;
   min-height: 100vh;
   min-width: 100vw;
   color: #eee;
`;

const Main = styled.div`
   display: flex;
`;

const MainContent = styled.div`
   width: 100vw;
   display: flex;
   justify-content: center;
   transition: 0.3s;
`;

const TodoContent = styled.div`
   max-width: 70rem;
   width: 100%;
`;

const Title = styled.div`
   margin: 3rem 0 6rem 0;
   font-size: 3.2rem;
   font-weight: 700;
`;

const Greeting = styled.div`
   margin-bottom: 2.5rem;
   font-size: 3.5rem;
   font-weight: 800;
`;

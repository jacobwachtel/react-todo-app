import React from 'react';
import styled from 'styled-components';

const Sidebar = ({ sideBarToggle, todoList }) => {
   return (
      <Wrapper
         style={{
            width: `${sideBarToggle ? '30rem' : '7rem'}`,
         }}
      >
         <Title>{sideBarToggle ? 'Collections' : 'C'}</Title>

         <CategoryList>
            {todoList.map((category) => (
               <Category key={category.name}>
                  <CategoryIcon style={{ backgroundColor: category.color }}>
                     <i className={category.icon} />
                  </CategoryIcon>
                  {sideBarToggle && <span>{category.name}</span>}
               </Category>
            ))}
         </CategoryList>
      </Wrapper>
   );
};

export default Sidebar;

const Wrapper = styled.div`
   height: calc(100vh - 7rem);
   background-color: #20212d;
   padding-left: 1.5rem;
   display: flex;
   flex-direction: column;
`;

const Title = styled.div`
   font-size: 3rem;
   font-weight: 700;
   padding: 5rem 0 5rem 0.5rem;
`;

const CategoryList = styled.div`
   margin-top: -1.6rem;
`;

const Category = styled.div`
   display: flex;
   align-items: center;
   margin: 0.4rem -1.6rem;
   padding: 1rem 1.6rem;
   border-radius: 4px;
   width: calc(100% - 3.2rem);

   span {
      margin-left: 1rem;
      font-weight: 500;
      font-size: 1.8rem;
   }

   &:hover {
      background-color: #18181f;
      transition: 0.3s;
      cursor: pointer;
   }
`;

const CategoryIcon = styled.div`
   height: 3rem;
   width: 3rem;
   border-radius: 4px;
   margin-right: 1rem;
   display: grid;
   place-items: center;
   flex-shrink: 0;
   i {
      font-size: 1.5rem;
   }
`;

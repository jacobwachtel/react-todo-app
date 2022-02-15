import React from 'react';
import styled from 'styled-components';
import profilePic from '../images/JW-photo.jpg';

const Header = () => {
   return (
      <Wrapper>
         <HeaderItem>
            <i className="fas fa-bars" />
         </HeaderItem>

         <HeaderItem>
            <i className="fas fa-border-all" />
            <span>Dashboard</span>
         </HeaderItem>

         <HeaderItem>
            <i className="fas fa-images" />
            <span>Collection</span>
         </HeaderItem>

         <Placeholder />
         <HeaderItem>
            <Profile>
               <img
                  src="https://lh3.googleusercontent.com/ogw/ADea4I4RUoce-1Ih6qiKh0BowsAjjGixVwhF0z-tBHEzL98=s32-c-mo"
                  alt="Profile Pic"
               />
            </Profile>
         </HeaderItem>
      </Wrapper>
   );
};

export default Header;

const Wrapper = styled.div`
   display: flex;
   height: 7rem;
   font-size: 1.8rem;
   align-items: center;
   background-color: #20212d;
   padding: 0 20px;
   -webkit-box-shadow: 0 0.4rem 1.5rem #121212;
   box-shadow: 0 0.4rem 1.5rem #121212;
   position: sticky;
   top: 0;
`;

const HeaderItem = styled.div`
   padding: 1rem 1.4rem;
   border-radius: 5px;

   span {
      padding-left: 1.5rem;
      font-weight: 500;
   }

   &:hover {
      background-color: #18181f;
      transition: 0.3s;
      cursor: pointer;
   }
`;

const Placeholder = styled.div`
   flex: 1;
`;

const Profile = styled.div`
   display: flex;
   align-items: center;

   img {
      height: 3.5rem;
      width: 3.5rem;
      border-radius: 50%;
      background-position: cover;
   }
`;

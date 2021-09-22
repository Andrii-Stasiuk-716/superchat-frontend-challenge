import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.div`
    padding: 20px 0;
    font-size: 22px;
    color: #000;
    text-decoration: none;
`;
const MainTitle = styled.h2`
    a {
        color: #000;
        text-decoration: none;  
    }
    
`;

const Header = () => {
    return (
        <Nav>
           <MainTitle ><Link to='/superchat-frontend-challenge'>Crazy github links</Link></MainTitle> 
        </Nav>
    );
};

export default Header;
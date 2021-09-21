import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MainTitle = styled.div`
    padding: 20px 0;
    font-size: 22px;
    color: #000;
    text-decoration: none;
`;

const Header = () => {
    return (
        <MainTitle>
           <h2 style={{color: '#000'}}><Link to='/'>Crazy github links</Link></h2> 
        </MainTitle>
    );
};

export default Header;
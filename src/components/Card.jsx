import React from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';

const Div = styled.div`
    background: ${props => props.param.state.color};
    color: ${props => props.param.state.textColor};
`;

const Card = () => {
    const state = useLocation();

    return (
        <Div param={state}>
            <p>username: {state.state.username}</p>
            <p>repository: {state.state.repo}</p>
            <p>color: {'color'}</p>
        </Div>
    );
};

export default Card;
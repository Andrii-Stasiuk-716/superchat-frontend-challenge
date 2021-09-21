import React from 'react';
import { useLocation, useParams, useRouteMatch } from 'react-router';
import styled from 'styled-components';

// const Div = styled.div`
//     background: ${props => props.param.color};
//     color: ${props => props.param.textColor};
// `;

const Card = (props) => {
    const state = useLocation();

    return (
        <div param={state}>
            username: {'user'}
            repository: {'repo'}
            color: {'color'}
        </div>
    );
};

export default Card;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Columns = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
`;

const Title = styled.h2`
    margin: 10px 0;
`;

const Label = styled.label`
    display: inline-block;
    margin: 10px 0;
    width: 200px;
    outline: none;
    
`;

const Input = styled.input`
    width: 250px;
    padding: 5px;
    margin: 10px 10px 10px 0;
    outline: none;
    border: 1px solid #ced4da;
    &:focus {
        box-shadow: 0 0 3px 1px #73ade8;
    }
`;

const ColorInput = styled.input`
    width: 50px;
    margin: 10px 10px 10px 0;
    outline: none;
    border: none;
    background: transparent;
    cursor: pointer;
`;

const Textarea = styled.textarea`
    resize: none;
    width: 400px;
    height: 50px;
    padding: 5px;
    margin: 10px 10px 10px 0;
    outline: none;
`;

const Test = styled.div`
    width: 400px;
    height: 200px;
    background: ${props => props.color};
    color: ${props => props.textColor};
    padding: 10px;
    margin: 10px 10px 10px 0;
    border-radius: 10px;
    box-shadow: 0 0 3px 2px #ccc;
`;

const Creator = () => {
    const [username, setUsername] = useState('');
    const [repo, setRepo] = useState('');
    const [color, setColor] = useState('5ed5f3');
    const [textColor, setTextColor] = useState('ffffff');
    const value = `https://bohdanomelianec.github.io/superchat-frontend-challenge/link/${username || 'user'}/${repo || 'repo'}/?c=${color}&tc=${textColor}`;

    return (
        <div>
            <Title>Link creator</Title>
            <Input
                type='text'
                placeholder=':username'
                value={username}
                onChange={(e) => setUsername(e.target.value)} />
            <Input
                placeholder=':repository'
                value={repo}
                onChange={(e) => setRepo(e.target.value)} />
            <hr />
            <Columns>
                <Column>
                    <Title>Link options</Title>
                    <div>
                        <Label htmlFor='color'>Set background color:</Label>
                        <ColorInput id="color" type="color" value={'#' + color} onChange={(e) => setColor(e.target.value.slice(1))} />
                    </div>
                    <div>
                        <Label htmlFor='textcolor'>Set text color:</Label>
                        <ColorInput id="textcolor" type="color" value={'#' + textColor} onChange={(e) => setTextColor(e.target.value.slice(1))} />
                    </div>
                </Column>
                <Column>
                    <Title>Preview</Title>
                    <Link to={`/superchat-frontend-challenge/link/${username || 'user'}/${repo|| 'repo'}/?c=${color}&tc=${textColor}`} >link</Link>
                    <Textarea
                        value={value}
                        readOnly />
                    <Test color={'#' + color} textColor={'#' + textColor}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus nobis quia consectetur quibusdam repudiandae non eius neque facilis, libero odit numquam impedit eaque quaerat totam accusamus quae veniam praesentium voluptate.
                    </Test>
                </Column>
            </Columns>
        </div>
    );
};

export default Creator;
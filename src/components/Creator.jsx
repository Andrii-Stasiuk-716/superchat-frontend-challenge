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

const FileInput = styled.input`
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
`;

const FileLabel = styled.label`
    display: inline-block;
    padding: 7px;
    font-size: 14px;
    border-radius: 5px;
    background: #005372;
    color: #fff;
    cursor: pointer;
    &:hover {
        background: #007099;
        box-shadow: 0 0 5px 2px #ccc;
    }
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
    const [color, setColor] = useState('#ffffff');
    const [textColor, setTextColor] = useState('#000000');
    const [avatar] = useState('');
    const value = `https://github.com/${username || 'user'}/${repo || 'repo'}?color=${color}`;
    const values = {
        username,
        repo,
        color,
        textColor
    }

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
                        <Label>Choose your avatar:</Label>
                        <FileLabel htmlFor='myFile'>Select image</FileLabel>
                        <FileInput id="myFile" type="file" onChange={(e) => console.dir(e.target)} />
                    </div>
                    <div>
                        <Label htmlFor='color'>Set background color:</Label>
                        <ColorInput id="color" type="color" value={color} onChange={(e) => setColor(e.target.value)} />
                    </div>
                    <div>
                        <Label htmlFor='textcolor'>Set text color:</Label>
                        <ColorInput id="textcolor" type="color" value={textColor} onChange={(e) => setTextColor(e.target.value)} />
                    </div>
                </Column>
                <Column>
                    <Title>Preview</Title>
                    <Link to={{pathname: '/link', state: values}}>link</Link>
                    {/* <Link to={`/link/?color=${color}&textcolor=${textColor}&user=${username}`} >link</Link> */}

                    <Textarea
                        value={value}
                        readOnly />
                    <Test color={color} textColor={textColor}>
                        <img src={avatar} alt='avatar' />
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus nobis quia consectetur quibusdam repudiandae non eius neque facilis, libero odit numquam impedit eaque quaerat totam accusamus quae veniam praesentium voluptate.
                    </Test>
                </Column>
            </Columns>

        </div>
    );
};

export default Creator;
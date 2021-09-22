import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';

const UserInfo = styled.div`
    width: 80%;
    margin: 20px auto;
    background: ${props => props.param.state?.color || '#ccc'};
    color: ${props => props.param.state?.textColor || '#fff'};
    border-radius: 10px;
    box-shadow: 0 0 5px 5px #f2f2f2;
`;

const Main = styled.div`
    padding: 20px 60px;
    display: flex;
    align-items: center;
`;

const Bottons = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: space-around;
    button {
        padding: 10px;
        width: 90px;
        border: none;
        border-radius: 4px;
        box-shadow: 1px 1px 2px 1px #ccc;
        cursor: pointer;
        :hover {
            box-shadow: -1px -1px 2px 1px #ccc;
        }
    }
`;

const Additional = styled.div`
    padding: 20px 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Avatar = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: #ccc;
`;

const UserName = styled.h1`
    margin: 20px 60px;
`;
const Repo = styled.h2`
    margin: 20px auto;
`;

const Card = () => {
    const [avatar, setAvatar] = useState();
    const [name, setName] = useState('Unknown');
    const [repo, setRepo] = useState({});
    const [contributors, setContr] = useState([]);
    const state = useLocation();

const fetchData = async () => {
    fetch(`https://api.github.com/users/${state.state.username}`)
    .then(res => res.json())
    .then(res => {
        setAvatar(res.avatar_url)
        setName(res.login)
    });

    const data = await fetch(`https://api.github.com/users/${state.state.username}/repos`)
    .then(res => res.json())
    .then(res => {
        const repos = res.filter(repo => repo.name === state.state.repo)
        setRepo(...repos)
        return repos
  
    });

    if(data) {
       fetch(data[0].contributors_url)
        .then(res => res.json())
        .then(res => {
            const contr = res.map(item => item.login);
            setContr(contr)
        }) 
    }
}
    useEffect(() => {
        fetchData()
    }, [])

    
    const getUser = () => {
        
        
    }

    return (
        <UserInfo param={state}>
            <Main>
                <Avatar src={avatar}/>
                <UserName>{name}</UserName>
            </Main>
            <Bottons>
                <button onClick={getUser}>Follow</button>
                <button>Star {repo.stargazers_count}</button>
                <button>Contributors</button>
                <button>click</button>
            </Bottons>
            <Additional>
                <Repo>repository: {repo.name || 'your repository'}</Repo>
                <p>{repo.description}</p>
                <ul>
                    {
                        contributors.map(item => <li>{item}</li>)
                    }
                </ul>
            </Additional>
            
            
        </UserInfo>
    );
};

export default Card;
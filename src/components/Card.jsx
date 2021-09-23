import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';

const UserInfo = styled.div`
    position: relative;
    width: 80%;
    margin: 20px auto;
    background: #f3f3f3;
    border-radius: 10px;
    box-shadow: 0 0 5px 5px #f2f2f2;
    display: flex;
    flex-direction: column;
`;

const Main = styled.div`
    padding: 20px 60px;
    display: flex;
    flex-direction: column;
    align-items: center;

    background: ${props => '#' + props.param.color};
    color: ${props => '#' + props.param.textColor};
    border-radius: 10px 10px 200px 200px;
`;

const Buttons = styled.div`
    
    button {
        position: absolute;
        top: 30px;
        right: 30px;
        padding: 8px 15px;
        background: transparent;
        color: white;
        font-size: 14px;
        font-weight: 600;
        border: 1px solid #fff;
        border-radius: 4px;
        cursor: pointer;
        :hover {
            box-shadow: 0px 0px 3px 1px #fff;
        }
    }
`;

const Additional = styled.div`
    padding: 20px 60px;
    display: flex;
    justify-content: space-between;
    align-items: strech;
    background: ${props => '#' + props.param.color};
    border-radius: 150px 150px 10px 10px;
    color: ${props => '#' + props.param.textColor};
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
const Header3 = styled.h3`
    margin: 20px auto;
`;

const Block = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

const HR = styled.div`
    width: 1px;
    height: auto;
    background: #fff;
`;

const OList = styled.ol`
    li {
        margin: 10px;
    }
`;

const Card = () => {
    const [avatar, setAvatar] = useState();
    const [name, setName] = useState('Unknown');
    const [repo, setRepo] = useState({});
    const [contributors, setContr] = useState([]);
    const state = useParams();
    console.log('params', state)

const fetchData = async () => {
    const data = await fetch(`https://api.github.com/users/${state.name}`)

    if(data.ok) {
        const responce = await data.json();
        setAvatar(responce.avatar_url)
        setName(responce.login)
    
        fetch(`https://api.github.com/users/${state.name}/repos`)
        .then(res => res.json())
        .then(res => {
            const repos = res.filter(repo => repo.name === state.repo)
            setRepo(...repos)
            return repos
        })
        .then(repo => {
            fetch(repo[0]?.contributors_url)
            .then(res => res.json())
            .then(res => {
                const contr = res.map(item => item.login);
                setContr(contr)
            }) 
        });
    }
}
    useEffect(() => {
        fetchData()
    }, [])


    return (
        <UserInfo >
            <Main param={state}>
                <Avatar src={avatar}/>
                <UserName>{name}</UserName>
            </Main>
            <Buttons>
                <button>Star {repo ? repo.stargazers_count : '?'}</button>
            </Buttons>
            
            <Repo>{repo ? repo.name : 'Your repository'}</Repo>
            <Additional param={state}>
                <Block>
                    <Header3>Short description</Header3>
                    <p>{repo ? repo.description : 'No description'}</p>
                </Block>
                <HR />
                <Block>
                    <Header3>Top contributors</Header3>
                    <OList>
                    {
                        contributors.map(item => <li key={item.toString()}>{item}</li>)
                    }
                    </OList>
                </Block>
                
                
            </Additional>
            
            
        </UserInfo>
    );
};

export default Card;
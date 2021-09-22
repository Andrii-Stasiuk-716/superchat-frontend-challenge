import React from "react";
import Creator from "./components/Creator";
import Card from "./components/Card";
import Header from "./components/Header";
import styled from 'styled-components';
import {BrowserRouter as Router, Route} from "react-router-dom";

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <Router>
      <Wrapper>
        <Header />
      </Wrapper>
      <hr/>
      <Wrapper>
        <Route exact path='/' component={Creator}/>
        <Route exact path='/link/:name/:repo' component={Card} />
        
        
      </Wrapper>
      
    </Router>
  );
}

export default App;

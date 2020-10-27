import React from 'react';
import {Link} from 'react-router-dom';
import { Button, Navbar } from 'reactstrap';
import styled from 'styled-components';
import '../App.css';

// let IndieFlower = `IndieFlower`
let ShadowsIntoLightTwo = `ShadowsIntoLightTwo`

export const ContainerDiv = styled.div`
    
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
line-height: 1px;
background-color: #1E96FC;
width: 100%;
color: #FCF300;
margin: 0;
border-radius: 30px;
h1 {
    font-family: virginia, ${ShadowsIntoLightTwo}, sans-serif;
    font-size: 3.2rem;
}
`;


const NavigationBar = () => {
    return (
    <ContainerDiv>
        <center>
        <Navbar>
            <h1> Conway's Game of Life - Cellular Automata </h1>
            
            <Link to={'/'}>
                <Button>
                Home
                </Button>
            </Link>
            <Link to={'/Rules'}>
                <Button>
                Rules
                </Button>
            </Link>
            <Link to={'/Game'}>
                <Button>
                Game of Life
                </Button>
            </Link>
      </Navbar>
      </center>
    </ContainerDiv>
    )
};
    
export default NavigationBar;
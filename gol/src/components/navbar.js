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
background-color: #99AC5D;
width: 60%;
color: #216745;
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
            <Link to={'/About'}>
                <Button>
                About
                </Button>
            </Link>
            <Link to={'/Menu'}>
                <Button>
                Menu of Services
                </Button>
            </Link>
      </Navbar>
      </center>
    </ContainerDiv>
    )
};
    
export default NavigationBar;
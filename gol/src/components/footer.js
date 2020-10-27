import React from 'react';
import styled from 'styled-components';

const Foot = styled.div`
align: center;
display: flex;
flex-direction: column;
justify-content: center;
width: 100%;
align-items: center;
background-color: #1E96FC;
border-radius: 22px;
h2 {
    display:flex;
    justify-content: center;
    background-color: #127456;
    width: 14%;
    border-radius: 12px;
}
`




const Footer = () => {
    return (
        <div>
            <hr></hr>
        <Foot>
            
        <h2>Conway's Game of Life</h2>
        <p>Created by <a href="http://mmcleod.me">Michael "Trabin" McLeod</a> ©2020 in conjunction with <a href="http://lambdaschool.com">Lambda School</a></p>
        <p>Some images used are ©Wikipedia and used for non-monitary means.</p>
        </Foot>
        </div>
    )
}

export default Footer;
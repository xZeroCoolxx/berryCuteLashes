import { Menu } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components';

let Container = styled.div`
    
    border: solid;
    display: flex;
    margin: auto;
    justify-content: space-between;
    width: 95%;
`;

let LogoHolder = styled.div`
    border: solid;
    border-color: red;
    width: 100px;
`;

let NavMenuButton = styled.div`
    border: solid;
    border-color: green;
    width: 25px;
`;

const Nav = () => {
  return (
    <Container>
        <LogoHolder>Logo</LogoHolder>
        <NavMenuButton><Menu/> </NavMenuButton>
    </Container>
  )
}

export default Nav

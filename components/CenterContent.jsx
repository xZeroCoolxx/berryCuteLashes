import React from 'react'
import styled from 'styled-components';


let Container = styled.div`
    border: solid;
    display: flex;
    flex-direction: column;
    height: 50vh;
    margin: auto;
    margin-top: 40px;
    width: 70%;
`;

let TitleHolder = styled.div`
    border: solid;
    border-color: blue;
    height: 20%;
    width: 100%;
`;

let ImageHolder = styled.div`
    border: solid;
    border-color: green;
    width: 100%;
    height: 40%;
`;

let DescriptionHolder = styled.div`
    border: solid;
    border-color: red;
    height: 40%;
    width: 100%;
`;

const CenterContent = () => {
  return (
    <Container>
        <TitleHolder></TitleHolder>
        <ImageHolder></ImageHolder>
        <DescriptionHolder></DescriptionHolder>
    </Container>
  )
}

export default CenterContent

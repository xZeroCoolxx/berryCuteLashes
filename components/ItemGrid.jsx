import React from 'react'
import styled from 'styled-components'
import { useEffect } from 'react'


let Container = styled.div`
    border: solid;
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    margin-top: 60px;
    height: 50vh;
    width: 85%;
`;


const ItemGrid = () => {
    useEffect(() => {
        let myCount = 13;

        for(let i = 0; i < myCount; i++)[

        ]

        // Your script logic here
        console.log('Script logic running');

        // Optionally, clean up any listeners or intervals
        return () => {
            // Cleanup logic if needed
        };
    }, []); 

  return (
    <Container>

    </Container>
  )
}

export default ItemGrid

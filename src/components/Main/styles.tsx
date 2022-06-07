import styled from "styled-components";

export const Container =  styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 30;

`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    height: auto;
    width: 55%;
`;
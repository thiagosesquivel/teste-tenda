import styled from "styled-components";

export const SelectContainer = styled.div`
    border: solid 1px var(--verde-escuro) ;
    border-radius: 4px;
    display: flex;
    height: 3rem;
    align-items: center;

    select{
        background-color: transparent;
        border:none;
        width: 100%;
        padding: 4px;
        font-weight: 700;
        color: var(--verde-escuro);
        height: 100%;
        font-size: 1rem;

        option{
            color:white;
            background-color: var(--verde-escuro);
            padding: 4px;
        }

        option:hover{
            background-color: none;
        }

    }
    
    select:focus{
        outline: none;
    }


`;

export const ContainerIcon = styled.div`
    border-right: 2px solid var(--verde-escuro);
    display: flex ;
    justify-content: center;
    align-items: center;
    height: 3rem;
    width: 3rem;
    background-color: var(--opacity);

    svg{
        width: 1.5rem;
        color:var(--verde-escuro);
        height: 1.5rem;
    }
`;
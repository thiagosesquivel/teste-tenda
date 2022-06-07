import styled from "styled-components";

export const ContainerCheckbox = styled.div`
    display: flex;
    align-items: flex-start;
    margin-top: 10px;

    input[type="checkbox"]{

    }

    /* input[type="checkbox"]:checked + .checkbox{
        background-color: var(--verde-escuro);
    }
    .checkbox{
        width: 24px;
        border-radius: 6px;
        height: 24px;
        margin-right: 4px;
        border:4px solid var(--verde-escuro);
        background-color: var(--verde-claro);
    } */

    label{
        font-size: 0.825rem;
        color: var(--verde-escuro);
    }
`;
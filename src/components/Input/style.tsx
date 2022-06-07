import styled from "styled-components";

export const InputContainer = styled.div`
    border: solid 1px var(--verde-escuro) ;
    border-radius: 4px;
    height: 3rem;
    display: flex; 
    align-items: center;
    margin-top: 1rem;

    &:hover{
        background-color: var(--opacity);
    }

    input{
        background-color: transparent;
        border:none;
        width: 100%;
        height: 100%;
        padding: 8px;
        font-size: 1rem;
        cursor: pointer;
    }

    input:focus{
        outline: none;
    }

    input::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: var(--verde-escuro);
  font-weight: 700;
  opacity: 1; /* Firefox */
}

input:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: var(--verde-escuro);
  font-weight: 700;

}

input::-ms-input-placeholder { /* Microsoft Edge */
  color: var(--verde-escuro);
  font-weight: 700;

}
`;

export const ContainerIcon = styled.div`
    border-right: 2px solid var(--verde-escuro);
    display: flex ;
    height: 3rem;
    width: 3rem;
    justify-content: center;
    align-items: center;
    background-color: var(--opacity);


    svg{
        width: 1.5rem;
        color:var(--verde-escuro);
        height: 1.5rem;
    }
`;
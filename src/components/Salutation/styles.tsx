import styled from "styled-components";

export const Container =  styled.div`

*{
    margin:0;
}
 display: flex;
 align-items:flex-start;
 justify-content: center;
 height: 100%;
 width: 100%;
 flex-direction: column;

 p{
     font-weight: 700;
 }

  .title{
      font-size: 3rem;
      color: white;
  }

  @media (max-width:720px) {
        .title{
            font-size: 2rem;
        }

        
    }
`;
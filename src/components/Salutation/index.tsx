import React from 'react'
import Logo from '../Logo/index'
import { Container } from './styles'

export default function Salutation() {
  return (
   <Container>
       <Logo/>
       <h1 className='title'>
       A casa dos seus sonhos.<br></br>
Possível. Acessível. Viável. 
       </h1>
       <p>Saia do aluguel e conquiste a sua Alea. Dê o primeiro passo agora!</p>
   </Container>
  )
}

import React from 'react'
import { ContainerIcon, InputContainer } from './style'

export default function Input({icon: Icon}) {
  return (
    <InputContainer>
        <ContainerIcon>
            <Icon/>
        </ContainerIcon>
        <input/>
    </InputContainer>
  )
}

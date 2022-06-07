import React from 'react'
import { ContainerIcon, InputContainer } from './style'

export default function Input({icon: Icon, placeholder}) {
  return (
    <InputContainer>
        <ContainerIcon>
            <Icon/>
        </ContainerIcon>
        <input placeholder={placeholder}/>
    </InputContainer>
  )
}

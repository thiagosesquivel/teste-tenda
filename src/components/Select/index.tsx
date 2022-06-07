import React from 'react'
import { ContainerIcon, SelectContainer } from './style'



export default function Select({options, icon:Icon}) {
  return (
    <SelectContainer>
        <ContainerIcon>
            <Icon/>
        </ContainerIcon>
        <select placeholder=''>
            <option> Selecione onde morar</option>
            {options?.map(option=> <option key={option.value} value={option.value}>{option.description}</option>)}
        </select>
    </SelectContainer>

    )
}

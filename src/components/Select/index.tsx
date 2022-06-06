import React from 'react'
import { ContainerIcon, SelectContainer } from './style'



export default function Select({options, icon:Icon}) {
  return (
    <SelectContainer>
        <ContainerIcon>
            <Icon/>
        </ContainerIcon>
        <select>
            {options?.map(option=> <option value={option.value}>{option.description}</option>)}
        </select>
    </SelectContainer>

    )
}

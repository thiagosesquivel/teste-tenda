import React from 'react'
import { ContainerCheckbox } from './styles'

export default function Checkbox({conteudo, id}) {
  return (
        <ContainerCheckbox>
            <input id={id} type="checkbox"/>
            <label className='checkbox' htmlFor={id}></label>
            <label>{conteudo}</label>
        </ContainerCheckbox>
    )
}

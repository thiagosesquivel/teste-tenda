import React from 'react'
import Form from '../Form/index'
import Salutation from '../Salutation/index'
import { Container, Grid } from './styles'

export default function Main({options}) {
  console.log(options);
  return (
    <Container>
        <Grid>
          <Salutation/>
          <Form options={options}/>
        </Grid>
    </Container>
    )
}
